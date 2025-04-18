import { useParams, useSearchParams } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";
import { fetchTonWalletData } from "@/lib/userService";
import useSWR from "swr";
import { ProfileSkeleton } from "@/components/profile/profileSkeleton";
import { ErrorPage } from "../error/error";

export function UserProfile() {
    const { walletAddr } = useParams();
    const {
        data: userData,
        error,
        isLoading,
    } = useSWR(
        walletAddr ? ["ton-wallet-data", walletAddr] : null,
        // fetcher
        ([, address]) => fetchTonWalletData(address),
        { shouldRetryOnError: false }
    );
    const [copied, setCopied] = useState(false);
    const isMobile = useIsMobile();

    const [searchParams, setSearchParams] = useSearchParams();
    const section = searchParams.get("section") ?? "courses";

    const truncateAddress = (address: string) => {
        if (address.length <= 16) return address;
        return isMobile
            ? `${address.slice(0, 8)}...${address.slice(-8)}`
            : address;
    };

    const handleCopy = () => {
        if (!userData?.address) return;
        navigator.clipboard.writeText(userData.address);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    // Loading state
    if (isLoading) {
        return <ProfileSkeleton />;
    }

    // Error state
    if (error) {
        return (
            <ErrorPage
                first={"Wallet Not Found"}
                second={"We couldn't find a user with this wallet."}
                third={"Please double-check the address and try again."}
            />
        );
    }

    // Null fallback (just in case)
    if (!userData) {
        return (
            <ErrorPage
                first={"Wallet doesn't exist"}
                second={"We couldn't find a user with this wallet."}
                third={"Please double-check the address and try again."}
            />
        );
    }

    // Rendered profile
    return (
        <div className="mt-8 mx-auto space-y-3">
            <div className="rounded-3xl py-4 px-8 bg-white shadow-sm">
                <div className="flex flex-row justify-between items-center">
                    <div className="space-y-2 text-left">
                        <Table>
                            <TableBody className="border-0">
                                <TableRow className="border-0">
                                    <TableCell className="w-[50px] font-semibold p-0 pr-6 py-2">
                                        <p>Name</p>
                                    </TableCell>
                                    <TableCell className="py-0">
                                        {userData.name}
                                    </TableCell>
                                </TableRow>
                                <TableRow className="border-0">
                                    <TableCell className="font-semibold p-0 py-2">
                                        <p>Address</p>
                                    </TableCell>
                                    <TableCell
                                        onClick={handleCopy}
                                        className="py-2 flex items-center space-x-2 w-full group relative"
                                    >
                                        <p className="truncate max-w-full">
                                            {truncateAddress(userData.address)}
                                        </p>
                                        <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white-500 duration-200">
                                            {copied ? (
                                                <Check className="w-[13px] h-[13px] text-blue-500" />
                                            ) : (
                                                <Copy className="w-[13px] h-[13px]" />
                                            )}
                                        </button>
                                    </TableCell>
                                </TableRow>
                                <TableRow className="border-0">
                                    <TableCell className="font-semibold p-0 py-2">
                                        <p>Balance</p>
                                    </TableCell>
                                    <TableCell className="py-0">
                                        {userData.balance} TON
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white py-4 px-8 rounded-3xl shadow-sm">
                <Tabs
                    value={section}
                    onValueChange={(val) => {
                        setSearchParams({ section: val });
                    }}
                >
                    <TabsList className="w-full flex justify-start bg-white p-0 space-x-5">
                        <TabsTrigger
                            value="courses"
                            className="text-md data-[state=active]:underline underline-offset-8 px-0 py-2"
                        >
                            <span className="font-semibold">My Courses</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="certificates"
                            className="text-md data-[state=active]:underline underline-offset-8 px-0 py-2"
                        >
                            <span className="font-semibold">Certificates</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="courses">
                        <div className="mt-4 space-y-4">
                            <p className="text-gray-600 text-center md:text-left">
                                No courses enrolled yet.
                            </p>
                        </div>
                    </TabsContent>

                    <TabsContent value="certificates">
                        <div className="mt-4 space-y-4">
                            <p className="text-gray-600 text-center md:text-left">
                                No certificates available.
                            </p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
