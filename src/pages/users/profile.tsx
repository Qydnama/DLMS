import { useSearchParams } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export function UserProfile() {
    const [copied, setCopied] = useState(false);

    // 1. Grab the current "section" from query params, default to "courses"
    const [searchParams, setSearchParams] = useSearchParams();
    const section = searchParams.get("section") ?? "courses";

    // Example user data
    const userData = {
        id: "1",
        name: "Blip Blop Blop Blip",
        address: "UQDKHZ7e70CzqdvZCC83Z4WVR8POC_ZB0J1Y4zo88G-zCSRH",
        balance: "3,239.404 TON ≈ $11,661,857.67",
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(userData.address);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 640);
      window.addEventListener('resize', handleResize);
      handleResize(); 
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const truncateAddress = (address: string) => {
      return isMobile
        ? `${address.slice(0, 8)}...${address.slice(-8)}`
        : address;
    };

    return (
        <div className="mt-8 mx-auto space-y-3">
            <div className="rounded-3xl py-4 px-8 bg-white shadow-sm">
                {/* User Info */}
                <div className="flex flex-row justify-between items-center">
                    <div className="space-y-2 text-left">
                        <Table>
                            <TableBody className="border-0">
                                <TableRow className="border-0">
                                    <TableCell className="w-[50px] font-semibold p-0 pr-6 py-2">
                                        <p>Name</p>
                                    </TableCell>
                                    <TableCell className="py-0">{userData.name}</TableCell>
                                </TableRow>
                                <TableRow className="border-0">
                                    <TableCell className="font-semibold p-0 py-2">
                                    <p>Address</p>
                                    </TableCell>
                                    <TableCell onClick={handleCopy} className="py-2 flex items-center space-x-2 w-full group relative">
                                        <p className="truncate max-w-full">{truncateAddress(userData.address)}</p>
                                        <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white-500 duration-200">
                                            {copied ? (
                                            <Check className="w-[13px] h-[13px] text-green-500" />
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
                                    <TableCell className="py-0">{userData.balance}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            <div className="bg-white py-4 px-8 rounded-3xl shadow-sm">
                {/* User Courses and Certificates */}
                <Tabs
                    value={section}
                    onValueChange={(val) => {
                    setSearchParams({ section: val });
                    }}
                >
                    
                    <TabsList className="w-full flex justify-start bg-white p-0 space-x-5 ">
                        <TabsTrigger
                            value="courses"
                            className="text-md data-[state=active]:underline underline-offset-8 px-0 py-2"
                        >
                            <span className="font-semibond">My Courses</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="certificates"
                            className="text-md data-[state=active]:underline underline-offset-8 px-0 py-2"
                        >
                            <span className="font-semibond">Certificates</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* My Courses Content */}
                    <TabsContent value="courses">
                    <div className="mt-4 space-y-4 ">
                        <p className="text-gray-600 text-center md:text-left">
                        No courses enrolled yet.
                        </p>
                    </div>
                    </TabsContent>

                    {/* Certificates Content */}
                    <TabsContent value="certificates">
                    <div className="mt-4 space-y-4 ">
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
