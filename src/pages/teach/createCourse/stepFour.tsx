import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, X } from "lucide-react";

interface StepFourProps {
    courseData: {
        price: number;
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
        lessons: { title: string; videoUrl: string }[];
    }>>;
    validationStatus: { stepOne: boolean; stepTwo: boolean; stepThree: boolean};
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export function StepFour({ courseData, setCourseData, validationStatus, setCurrentStep }: StepFourProps) {

    const handleInputChange = (field: string, value: string | number | boolean) => {
        setCourseData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-6">
            <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Pricing & Access</h2>

                {/* Course Price */}
                <div className="space-y-3">
                    <Label htmlFor="price" className="block text-sm font-medium">
                        Course Price (TON)
                    </Label>
                    <Input
                        id="price"
                        type="number"
                        min="1"
                        step="0.1"
                        className="w-full rounded-2xl"
                        placeholder="Enter price in TON"
                        value={courseData.price}
                        onChange={(e) => handleInputChange("price", parseFloat(e.target.value))}
                    />
                </div>
            </div>
            <div>

                <div className="bg-gray-100 p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold">Checklist</h3>
                <ul className="mt-3 space-y-2 text-md font-medium">
                    <li onClick={() => setCurrentStep(1)} className="flex items-center cursor-pointer hover:underline">
                        {validationStatus.stepOne ? (
                            <Check className="text-green-500 w-5 h-5 mr-2" />
                        ) : (
                            <X className="text-red-500 w-5 h-5 mr-2" />
                        )}
                        Course Information
                    </li>
                    <li onClick={() => setCurrentStep(2)} className="flex items-center cursor-pointer hover:underline">
                        {validationStatus.stepTwo ? (
                                <Check className="text-green-500 w-5 h-5 mr-2" />
                            ) : (
                                <X className="text-red-500 w-5 h-5 mr-2" />
                        )}
                        Lessons
                    </li>
                    <li onClick={() => setCurrentStep(3)} className="flex items-center cursor-pointer hover:underline">
                        {validationStatus.stepThree ? (
                            <Check className="text-green-500 w-5 h-5 mr-2" />
                        ) : (
                            <X className="text-red-500 w-5 h-5 mr-2" />
                        )}
                        Quizzes
                    </li>
                </ul>
                </div>

            </div>


            
        </div>
    );
}
