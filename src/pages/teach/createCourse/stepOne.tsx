import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Image } from "lucide-react";
import { z } from "zod";

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
    setCourseData: React.Dispatch<React.SetStateAction<{
        logo: string;
        title: string;
        summary: string;
        recommendedWorkload: string;
        whatYouWillLearn: string;
        about: string;
        whatYouWillGain: string;
        initialRequirements: string;
        price: number;
        modules: {
            moduleTitle: string;
            quiz?: {
                questions: {
                    questionText: string;
                    options: string[];
                    correctAnswer: number;
                }[];
            };
            lessons: {
            title: string;
            videoUrl: string;
            }[];
        }[];
    }>>;
    setValidationStatus: React.Dispatch<React.SetStateAction<{ stepOne: boolean; stepTwo: boolean; stepThree: boolean; }>>
    showErrors: boolean;
}

const schema = z.object({
    logo: z.string().min(1, "Logo is required"),
    title: z.string().min(5, "Title must be at least 5 characters"),
    summary: z.string().min(5, "Summary must be at least 5 characters"),
    recommendedWorkload: z.string().min(5, "Workload description required"),
    whatYouWillLearn: z.string().min(5, "This field is required"),
    about: z.string().min(5, "About section must have details"),
    whatYouWillGain: z.string().min(5, "This field is required"),
    initialRequirements: z.string().min(5, "Specify any requirements"),
});

export function StepOne({ courseData, setCourseData, setValidationStatus, showErrors }: StepOneProps) {
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const validate = () => {
            const result = schema.safeParse(courseData);
            if (!result.success) {
                const errorMessages: Record<string, string> = {};
                result.error.issues.forEach((issue) => {
                    errorMessages[issue.path[0]] = issue.message;
                });
                setErrors(errorMessages);
                setValidationStatus((prev) => ({ ...prev, stepOne: false }));
            } else {
                setErrors({});
                setValidationStatus((prev) => ({ ...prev, stepOne: true }));
            }
        };
        validate();
    }, [courseData, setValidationStatus]);



    const handleInputChange = (field: string, value: string) => {
        setCourseData((prev) => ({ ...prev, [field]: value }));
    };

    const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setCourseData((prev) => ({ ...prev, logo: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-2">
            {/* Logo Upload */}
            <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Course Information</h2>
                <Label htmlFor="title" className="mb-2 block text-sm font-medium">
                    Course Logo
                </Label>
                <Card className="w-[180px] h-[180px] p-4 flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg relative">
                    {courseData.logo ? (
                        <img src={courseData.logo} alt="Course Logo" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                        <div>
                            <Image className="text-gray-500"/>
                            <p className="text-gray-500">Logo</p>
                            <p className="text-xs text-gray-400">PNG file with transparency, 230×230px</p>
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/png"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleLogoUpload}
                    />
                </Card>
                {showErrors && errors.logo && <p className="text-red-500 text-xs mt-1">{errors.logo}</p>}

            </div>

            {/* Title */}
            <div className="pt-3">
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
                <div className="flex justify-between">
                    <div>
                        {showErrors && errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
                    </div>
                    <div className="text-gray-500 text-xs mt-1 text-right">
                        <span>{courseData.title.length}/64</span>
                    </div>
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
                <div className="flex justify-between">
                    <div>
                    {showErrors && errors.summary && <p className="text-red-500 text-xs">{errors.summary}</p>}
                    </div>
                    <div className="text-gray-500 text-xs mt-1 text-right">
                        <span>{courseData.summary.length}/512</span>
                    </div>
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
                <div className="flex justify-between">
                    <div>
                    {showErrors && errors.recommendedWorkload && <p className="text-red-500 text-xs">{errors.recommendedWorkload}</p>}
                    </div>
                    <div className="text-gray-500 text-xs mt-1 text-right">
                        <span>{courseData.recommendedWorkload.length}/24</span>
                    </div>
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
                <div className="flex justify-between">
                    <div>
                        {showErrors && errors.whatYouWillLearn && <p className="text-red-500 text-xs">{errors.whatYouWillLearn}</p>}
                    </div>
                    <div className="text-gray-500 text-xs mt-1 text-right">
                        <span>{courseData.whatYouWillLearn.length}/512</span>
                    </div>
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
                <div className="flex justify-between">
                    <div>
                        {showErrors && errors.about && <p className="text-red-500 text-xs">{errors.about}</p>}
                    </div>
                    <div className="text-gray-500 text-xs mt-1 text-right">
                          <span>{courseData.about.length}/512</span>
                    </div>
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
                <div className="flex justify-between">
                    <div>
                        {showErrors && errors.whatYouWillGain && <p className="text-red-500 text-xs">{errors.whatYouWillGain}</p>}
                    </div>
                    <div className="text-gray-500 text-xs mt-1 text-right">
                        <span>{courseData.whatYouWillGain.length}/512</span>
                    </div>
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
                <div className="flex justify-between">
                    <div>
                        {showErrors && errors.initialRequirements && <p className="text-red-500 text-xs">{errors.initialRequirements}</p>}
                    </div>
                    <div className="text-gray-500 text-xs mt-1 text-right">
                        <span>{courseData.initialRequirements.length}/512</span>
                    </div>
                </div>
            </div>
        </div>
    )

}