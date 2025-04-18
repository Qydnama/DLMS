import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StepSlider } from "@/components/createCourse/stepSlider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { StepOne } from "@/pages/teach/createCourse/stepOne";
import { StepTwo } from "@/pages/teach/createCourse/stepTwo";
import { StepThree } from "@/pages/teach/createCourse/stepThree";
import { StepFour } from "@/pages/teach/createCourse/stepFour";
import { StepFive } from "@/pages/teach/createCourse/stepFive";

export function CreateCourse({ children }: { children: React.ReactNode }) {
    const [isDirty, setIsDirty] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;

    const [showErrors, setShowErrors] = useState({
        stepOne: false,
        stepTwo: false,
        stepThree: false,
    });

    const [validationStatus, setValidationStatus] = useState({
        stepOne: false,
        stepTwo: false,
        stepThree: false,
        stepFour: false,
    });

    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [activeQuizIndex, setActiveQuizIndex] = useState(0);

    interface courseDataInterface {
        logo: string;
        title: string;
        summary: string;
        recommendedWorkload: string;
        whatYouWillLearn: string;
        about: string;
        whatYouWillGain: string;
        initialRequirements: string;
        price: number;
        level: string;
        language: string;
        certificate: {
            image: string;
        };
        modules: {
            moduleTitle: string;
            quiz: {
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
    }

    // Единое состояние courseData
    const [courseData, setCourseData] = useState<courseDataInterface>({
        logo: "",
        title: "",
        summary: "",
        recommendedWorkload: "",
        whatYouWillLearn: "",
        about: "",
        whatYouWillGain: "",
        initialRequirements: "",
        level: "Beginner",
        language: "English",
        price: 1,
        certificate: {
            image: "/images/nfts/nft_sample.png",
        },
        modules: [
            {
                moduleTitle: "Module 1",
                quiz: {
                    questions:
                        (Array(5)
                            .fill(null)
                            .map(() => ({
                                questionText: "",
                                options: ["", ""],
                                correctAnswer: 0,
                            })) as Array<{
                            questionText: string;
                            options: string[];
                            correctAnswer: number;
                        }>) || undefined,
                },
                lessons: [
                    {
                        title: "",
                        videoUrl: "",
                    },
                ],
            },
        ],
    });

    // При монтировании считаем форму «грязной»
    useEffect(() => {
        setIsDirty(true);
    }, []);

    // Предупреждение при покидании/перезагрузке вкладки
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isDirty) {
                e.preventDefault();
                e.returnValue = "";
            }
        };
        if (isDirty) {
            window.addEventListener("beforeunload", handleBeforeUnload);
        }
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [isDirty]);

    // Навигация по шагам
    const handleNextStep = () => {
        if (currentStep === 1) {
            setShowErrors((prev) => ({ ...prev, stepOne: true }));
        }
        if (currentStep === 2) {
            setShowErrors((prev) => ({ ...prev, stepTwo: true }));
        }
        if (currentStep === 3) {
            setShowErrors((prev) => ({ ...prev, stepThree: true }));
        }
        if (currentStep === 4) {
            setShowErrors((prev) => ({ ...prev, stepFour: true }));
        }
        if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
    };

    const handlePrevStep = () => {
        if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    };

    const [jwt, setJwt] = useState('');
    const [isValidJwt, setIsValidJwt] = useState(false);

    const isFormValid =
        validationStatus.stepOne &&
        validationStatus.stepTwo &&
        validationStatus.stepThree &&
        validationStatus.stepFour &&
        isValidJwt;


    const handleCreateCourse = async () => {
        
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-3xl shadow-md">
            {children}

            <StepSlider currentStep={currentStep} totalSteps={totalSteps} />
            <Separator className="mt-3 mb-6" />

            <form className="space-y-5 w-full">
                {/* Step 1 */}
                {currentStep === 1 && (
                    <StepOne
                        courseData={courseData}
                        setCourseData={setCourseData}
                        setValidationStatus={setValidationStatus}
                        showErrors={showErrors.stepOne}
                    />
                )}

                {/* Step 2 (Modules & Lessons, hasQuiz) */}
                {currentStep === 2 && (
                    <StepTwo
                        courseData={courseData}
                        setCourseData={setCourseData}
                        setValidationStatus={setValidationStatus}
                        showErrors={showErrors.stepTwo}
                        setActiveModuleIndex={setActiveModuleIndex}
                        activeModuleIndex={activeModuleIndex}
                    />
                )}

                {/* Step 3 (Quiz builder) */}
                {currentStep === 3 && (
                    <StepThree
                        courseData={courseData}
                        setCourseData={setCourseData}
                        activeQuizIndex={activeQuizIndex}
                        setActiveQuizIndex={setActiveQuizIndex}
                        setValidationStatus={setValidationStatus}
                        showErrors={showErrors.stepThree}
                    />
                )}

                {/* Step 4 (Review & Submit) */}
                {currentStep === 4 && (
                    <StepFour
                        courseData={courseData}
                        setCourseData={setCourseData}
                        setValidationStatus={setValidationStatus}
                    />
                )}

                {currentStep === 5 && (
                    <StepFive
                        courseData={courseData}
                        validationStatus={validationStatus}
                        setCurrentStep={setCurrentStep}
                        jwt={jwt}
                        setJwt={setJwt}
                        setIsValidJwt={setIsValidJwt}
                        isValidJwt={isValidJwt}
                    />
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <Button
                        onClick={handlePrevStep}
                        type="button"
                        className={`rounded-2xl bg-blue-500 p-2.5 gap-0 flex justify-center items-center ${
                            currentStep === 1
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200"
                        }`}
                        disabled={currentStep === 1}
                    >
                        <ChevronLeft
                            className="flex justify-center items-center"
                            style={{ width: "18px", height: "18px" }}
                        />
                        <span className="m-0 p-0 font-semibold">Previous</span>
                    </Button>

                    <Button
                        onClick={currentStep !== totalSteps ? handleNextStep : handleCreateCourse}
                        type="button"
                        className={`rounded-2xl bg-blue-500 p-2.5 gap-0 flex justify-center items-center ${
                            !isFormValid && currentStep === totalSteps
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200"
                        }`}
                        disabled={!isFormValid && currentStep === totalSteps}
                    >
                        <span className="font-semibold">
                            {currentStep !== totalSteps
                                ? "Next"
                                : "Create Course"}
                        </span>
                        <ChevronRight
                            className="flex justify-center items-center"
                            style={{ width: "18px", height: "18px" }}
                        />
                    </Button>
                </div>
            </form>
        </div>
    );
}
