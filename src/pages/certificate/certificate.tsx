import { Link, useParams } from "react-router-dom";
import { CertificateAttributes } from "@/components/certificate/certificateAttributes";
import { useCertificate } from "@/hooks/useCertificate";
import { ErrorPage } from "@/pages/error/error";
import { ChevronRight } from "lucide-react";
import { CertificateSkeleton } from "@/components/certificate/certificateSkeleton";

export function Certificate() {
    const { certificateAddr } = useParams();
    const { data: certificateData, error, isLoading } = useCertificate(certificateAddr);

    if (isLoading) return <CertificateSkeleton />;

    if (error || !certificateData) {
        return (
            <ErrorPage
                first={"Certificate Not Found"}
                second={"We couldn't find this certificate."}
                third={"Please double-check the address and try again."}
            />
        );
    }

    return (
        <div className="bg-white rounded-[2vw] p-6 shadow-md w-full mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Certificate Image */}
                <div className="w-1/2">
                    <img
                        src="/images/cards/1.png"
                        alt="Certificate"
                        className="w-full rounded-xl object-cover"
                    />
                </div>

                {/* Info Panel */}
                <div className="flex-1 space-y-4">
                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {certificateData.certificateId}
                    </h1>

                    {/* Course Info */}
                    <Link
                        to={`/courses/${certificateData.courseAddress}`}
                        className="flex items-center space-x-2 group"
                    >
                        <img
                            src={certificateData.courseImage}
                            alt="Course"
                            className="w-6 h-6 rounded object-cover"
                        />
                        <span className="hover:text-blue-600 font-semibold transition duration-200 text-sm sm:text-base flex items-center">
                            <span>{certificateData.courseTitle}</span>
                            <ChevronRight className="w-[17px] h-[17px]" />
                        </span>
                    </Link>

                    {/* Description */}
                    <p className="text-sm sm:text-[15px] font-[550] break-words">
                        {certificateData.description}
                    </p>

                    {/* Owner Info */}
                    <div className="text-sm sm:text-base ">
                        <span className="text-gray-600">Owner:{" "}</span>
                        <Link
                            to={`/users/${certificateData.ownerAddress}`}
                            className="hover:underline font-[550]"
                        >
                            {certificateData.ownerAddress?.slice(0, 8)}...
                            {certificateData.ownerAddress?.slice(-8)}
                        </Link>
                    </div>

                    {/* Attributes */}
                    <CertificateAttributes attributes={certificateData.attributes} />
                </div>
            </div>
        </div>
    );
}
