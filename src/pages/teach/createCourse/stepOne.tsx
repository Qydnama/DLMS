import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Image } from "lucide-react";

interface StepOneProps {
    courseData: {
        logo: string;
        title: string;
        summary: string;
        recommendedWorkload: string;
        whatYouWillLearn: string;
        about: string;
        whatYouWillGain: string;
        initialRequirements: string;
    };
    handleInputChange: (field: string, value: string) => void;
    handleLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function StepOne({ courseData, handleInputChange, handleLogoUpload }: StepOneProps) {

    return (
        <div>
            {/* Logo Upload */}
            <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Course Information</h2>
                <Card className="w-[180px] h-[180px] p-4 flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg relative">
                    <div>
                        <Image className="text-gray-500"/>
                        <p className="text-gray-500">Logo</p>
                        <p className="text-xs text-gray-400">PNG file with transparency, 230×230px</p>
                    </div>
                    <input
                        type="file"
                        accept="image/png"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleLogoUpload}
                    />
                </Card>
            </div>

            {/* Title */}
            <div>
                <Label htmlFor="title" className="mb-2 block text-sm font-medium">
                    Title
                </Label>
                <Input
                    id="title"
                    className="w-full rounded-2xl"
                    placeholder="Enter course title"
                    value={courseData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    maxLength={64}
                />
                <div className="text-gray-500 text-xs mt-1 text-right">
                    <span>{courseData.title.length}/64</span>
                </div>
            </div>

            {/* Summary */}
            <div>
                <Label htmlFor="summary" className="mb-2 block text-sm font-medium">
                    Summary
                </Label>
                <Textarea
                    id="summary"
                    className="w-full rounded-2xl"
                    placeholder="Enter a short summary of the course"
                    value={courseData.summary}
                    onChange={(e) => handleInputChange("summary", e.target.value)}
                    maxLength={512}
                />
                <div className="text-gray-500 text-xs mt-1 text-right">
                    <span>{courseData.summary.length}/512</span>
                </div>
            </div>
            {/* Recommended Workload */}
            <div>
                <Label htmlFor="workload" className="mb-2 block text-sm font-medium">
                    Recommended Workload
                </Label>
                <Input
                    id="workload"
                    className="w-full rounded-2xl"
                    placeholder="e.g., 10 hours per week"
                    value={courseData.recommendedWorkload}  
                    onChange={(e) => handleInputChange("recommendedWorkload", e.target.value)}  
                    maxLength={24}
                />
                <div className="text-gray-500 text-xs mt-1 text-right">
                    <span>{courseData.recommendedWorkload.length}/24</span>
                </div>
            </div>

            {/* What You Will Learn */}
            <div>
                <Label htmlFor="learning" className="mb-2 block text-sm font-medium">
                    What You Will Learn
                </Label>
                <Textarea
                    id="learning"
                    className="w-full rounded-2xl"
                    placeholder="List key learnings from this course"
                    value={courseData.whatYouWillLearn} 
                    onChange={(e) => handleInputChange("whatYouWillLearn", e.target.value)} 
                    maxLength={512}
                />
                <div className="text-gray-500 text-xs mt-1 text-right">
                    <span>{courseData.whatYouWillLearn.length}/512</span>
                </div>
            </div>

            {/* About the Course */}
            <div>
                <Label htmlFor="about" className="mb-2 block text-sm font-medium">
                    About the Course
                </Label>
                <Textarea
                    id="about"
                    className="w-full rounded-2xl"
                    placeholder="Enter detailed information about the course"
                    value={courseData.about}  
                    onChange={(e) => handleInputChange("about", e.target.value)} 
                    maxLength={512}
                />
                <div className="text-gray-500 text-xs mt-1 text-right">
                    <span>{courseData.about.length}/512</span>
                </div>
            </div>

            {/* What You Will Gain */}
            <div>
                <Label htmlFor="gain" className="mb-2 block text-sm font-medium">
                    What You Will Gain
                </Label>
                <Textarea
                    id="gain"
                    className="w-full rounded-2xl"
                    placeholder="List benefits and skills gained from this course"
                    value={courseData.whatYouWillGain}  
                    onChange={(e) => handleInputChange("whatYouWillGain", e.target.value)}  
                    maxLength={512}
                />
                <div className="text-gray-500 text-xs mt-1 text-right">
                    <span>{courseData.whatYouWillGain.length}/512</span>
                </div>
            </div>

            {/* Initial Requirements */}
            <div>
                <Label htmlFor="requirements" className="mb-2 block text-sm font-medium">
                    Initial Requirements
                </Label>
                <Textarea
                    id="requirements"
                    className="w-full rounded-2xl"
                    placeholder="Specify prerequisites for enrolling in this course"
                    value={courseData.initialRequirements}  
                    onChange={(e) => handleInputChange("initialRequirements", e.target.value)}  
                    maxLength={512}
                />
                <div className="text-gray-500 text-xs mt-1 text-right">
                    <span>{courseData.initialRequirements.length}/512</span>
                </div>
            </div>
        </div>
    )

}