import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import { StepSlider } from "@/components/createCourse/stepSlider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StepOne } from "@/pages/teach/createCourse/stepOne";
import { StepTwo } from "@/pages/teach/createCourse/stepTwo";
import { StepThree } from "@/pages/teach/createCourse/stepThree";
import { StepFour } from "@/pages/teach/createCourse/stepFour";

export function CreateCourse({ children }: { children: React.ReactNode }) {
    const [isDirty, setIsDirty] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;
    const [showErrors, setShowErrors] = useState({
        stepOne: false,
        stepTwo: false,
        stepThree: false,
    });
    
    const [validationStatus, setValidationStatus] = useState({
        stepOne: false,
        stepTwo: false,
        stepThree: false,
    });


    const [courseData, setCourseData] = useState({
        logo: "",
        title: "",
        summary: "",
        recommendedWorkload: "",
        whatYouWillLearn: "",
        about: "",
        whatYouWillGain: "",
        initialRequirements: "",
        price: 0,
        lessons: [{title: "", videoUrl: ""}] as { title: string; videoUrl: string }[],
    });

    // Quiz Handlers
    const [quizzes, setQuizzes] = useState([
        {
            title: "Quiz 1",
            questions: Array(5).fill(null).map(() => ({
                questionText: "",
                options: ["", ""],
                correctAnswer: 0
            })),
        },
    ]);
    const [activeQuizIndex, setActiveQuizIndex] = useState(0);


    
    useEffect(() => {
        setIsDirty(true);
      }, []);
    
      // beforeunload handler to warn user of unsaved changes
      useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
          if (isDirty) {
            e.preventDefault();
            e.returnValue = "";
          }
        };
    
        // Add listener if isDirty is true
        if (isDirty) {
          window.addEventListener("beforeunload", handleBeforeUnload);
        }
    
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [isDirty]);


    const handleNextStep = () => {
        if (currentStep === 1) {
            setShowErrors({
                ...showErrors,
                stepOne: true,
            });
        }
        if (currentStep === 2) {
            setShowErrors({
                ...showErrors,
                stepTwo: true,
            });
        }
        if (currentStep === 3) {
            setShowErrors({
                ...showErrors,
                stepThree: true,
            });
        }
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };


    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-3xl shadow-md">
            {children}
            <StepSlider currentStep={currentStep} totalSteps={totalSteps} />
            <Separator className="mt-3 mb-6" />
            <form className="space-y-5 w-full">
                {currentStep === 1 && (
                    <StepOne
                        courseData={courseData}
                        setCourseData={setCourseData}
                        setValidationStatus={setValidationStatus}
                        showErrors={showErrors.stepOne}/>
                )}

                {currentStep === 2 && (
                    <StepTwo
                        courseData={courseData}
                        setCourseData={setCourseData}
                        setValidationStatus={setValidationStatus}
                        showErrors={showErrors.stepTwo}/>
                )}

                {currentStep === 3 && (
                    <StepThree
                        quizzes={quizzes}
                        activeQuizIndex={activeQuizIndex}
                        setActiveQuizIndex={setActiveQuizIndex}
                        setQuizzes={setQuizzes}
                        setValidationStatus={setValidationStatus}
                        showErrors={showErrors.stepThree}
                    />
                )}

                {currentStep === 4 && (
                    <StepFour
                        courseData={courseData}
                        setCourseData={setCourseData}
                        validationStatus={validationStatus}
                        setCurrentStep={setCurrentStep}
                    />
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <Button onClick={handlePrevStep} type="button" 
                        className={`rounded-2xl bg-blue-500 p-2.5 gap-0 flex justify-center items-center ${ currentStep === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200"
                        }`}
                        disabled={currentStep === 1}
                     >
                        <ChevronLeft className="flex justify-center items-center" style={{ width: '18px', height: '18px' }}/>
                        <span className="m-0 p-0 font-semibold">Previous</span>
                    </Button>
                    <Button onClick={handleNextStep} type="button" 
                        className={`rounded-2xl bg-blue-500 p-2.5 gap-0 flex justify-center items-center ${ (validationStatus.stepOne && validationStatus.stepTwo && validationStatus.stepThree) === false && currentStep === totalSteps
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200"
                        }`}
                        disabled={(validationStatus.stepOne && validationStatus.stepTwo && validationStatus.stepThree) === false && currentStep === totalSteps}
                     >
                        <span className="font-semibold">{currentStep !== totalSteps ? "Next" : "Create Course"}</span>
                        <ChevronRight className="flex justify-center items-center" style={{ width: '18px', height: '18px' }}/>
                    </Button>
                </div>
            </form>
        </div>
    );
}
