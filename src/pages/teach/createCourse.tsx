import React, { useState } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import { StepSlider } from "@/components/createCourse/stepSlider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StepOne } from "./createCourse/stepOne";
import { StepTwo } from "./createCourse/stepTwo";
import { StepThree } from "@/pages/teach/createCourse/stepThree";

export function CreateCourse({ children }: { children: React.ReactNode }) {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const [courseData, setCourseData] = useState({
        logo: "",
        title: "",
        summary: "",
        recommendedWorkload: "",
        whatYouWillLearn: "",
        about: "",
        whatYouWillGain: "",
        initialRequirements: "",
        lessons: [{title: "", videoUrl: ""}] as { title: string; videoUrl: string }[],
    });

    const handleNextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

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

    const handleAddLesson = () => {
        setCourseData((prev) => ({
            ...prev,
            lessons: [...prev.lessons, { title: "", videoUrl: "" }],
        }));
    };

    const handleLessonChange = (index: number, field: string, value: string) => {
        setCourseData((prev) => {
            const updatedLessons = [...prev.lessons];
            updatedLessons[index] = { ...updatedLessons[index], [field]: value };
            return { ...prev, lessons: updatedLessons };
        });
    };

    const handleRemoveLesson = (index: number) => {
        setCourseData((prev) => ({
            ...prev,
            lessons: prev.lessons.filter((_, i) => i !== index), // Removes the lesson
        }));
    };

    // Quiz Handlers
    const [quizzes, setQuizzes] = useState([
        {
            title: "Quiz 1",
            questions: [
                {
                    questionText: "",
                    options: ["", "", ""],
                    correctAnswer: 0, // index of the correct answer
                },
            ],
        },
    ]);
    const [activeQuizIndex, setActiveQuizIndex] = useState(0);

    const handleAddQuiz = () => {
        setQuizzes([
            ...quizzes,
            {
                title: `Quiz ${quizzes.length + 1}`,
                questions: [
                    {
                        questionText: "",
                        options: ["", "", ""],
                        correctAnswer: 0,
                    },
                ],
            },
        ]);
        setActiveQuizIndex(quizzes.length); // Activate the new quiz tab
    };

    const handleRemoveQuiz = (index: number) => {
        const updatedQuizzes = quizzes.filter((_, i) => i !== index);
        setQuizzes(updatedQuizzes);
        setActiveQuizIndex(Math.max(0, index - 1)); // Shift to a valid tab
    };

    const handleAddQuestion = () => {
        const updatedQuizzes = [...quizzes];
        updatedQuizzes[activeQuizIndex].questions.push({
            questionText: "",
            options: ["", "", ""],
            correctAnswer: 0,
        });
        setQuizzes(updatedQuizzes);
    };

    const handleRemoveQuestion = (questionIndex: number) => {
        const updatedQuizzes = [...quizzes];
        updatedQuizzes[activeQuizIndex].questions = updatedQuizzes[activeQuizIndex].questions.filter(
            (_, i) => i !== questionIndex
        );
        setQuizzes(updatedQuizzes);
    };

    const handleQuizInputChange = (
        type: "title" | "questionText" | "option",
        questionIndex: number,
        value: string,
        optionIndex?: number
    ) => {
        const updatedQuizzes = [...quizzes];
        if (type === "title") {
            updatedQuizzes[activeQuizIndex].title = value;
        } else if (type === "questionText") {
            updatedQuizzes[activeQuizIndex].questions[questionIndex].questionText = value;
        } else if (type === "option" && optionIndex !== undefined) {
            updatedQuizzes[activeQuizIndex].questions[questionIndex].options[optionIndex] = value;
        }
        setQuizzes(updatedQuizzes);
    };

    const handleCorrectAnswerChange = (questionIndex: number, optionIndex: number) => {
        const updatedQuizzes = [...quizzes];
        updatedQuizzes[activeQuizIndex].questions[questionIndex].correctAnswer = optionIndex;
        setQuizzes(updatedQuizzes);
    };

    const handleRemoveOption = (questionIndex: number, optionIndex: number) => {
        const updatedQuizzes = [...quizzes];
        const question = updatedQuizzes[activeQuizIndex].questions[questionIndex];

        // Remove the selected option
        question.options = question.options.filter((_, i) => i !== optionIndex);

        // Adjust the correctAnswer index if necessary
        if (question.correctAnswer === optionIndex) {
            question.correctAnswer = -1; // Reset if the correct answer was deleted
        } else if (question.correctAnswer > optionIndex) {
            question.correctAnswer -= 1; // Decrement correctAnswer if an earlier option was deleted
        }

        setQuizzes(updatedQuizzes);
    };

    

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
            {children}
            <StepSlider currentStep={currentStep} totalSteps={totalSteps} />
            <Separator className="mt-3 mb-6" />
            <form className="space-y-5 w-full">
                {currentStep === 1 && (
                    <StepOne
                        courseData={courseData}
                        handleInputChange={handleInputChange}
                        handleLogoUpload={handleLogoUpload} />
                )}

                {currentStep === 2 && (
                    <StepTwo
                        courseData={courseData}
                        handleAddLesson={handleAddLesson}
                        handleRemoveLesson={handleRemoveLesson}
                        handleLessonChange={handleLessonChange} />
                )}

                {currentStep === 3 && (
                    <StepThree
                        quizzes={quizzes}
                        activeQuizIndex={activeQuizIndex}
                        handleAddQuiz={handleAddQuiz}
                        handleRemoveQuiz={handleRemoveQuiz}
                        handleAddQuestion={handleAddQuestion}
                        handleRemoveQuestion={handleRemoveQuestion}
                        handleQuizInputChange={handleQuizInputChange}
                        handleCorrectAnswerChange={handleCorrectAnswerChange}
                        handleRemoveOption={handleRemoveOption}
                        setActiveQuizIndex={setActiveQuizIndex}
                        setQuizzes={setQuizzes}
                    />
                )}
                {currentStep === 4 && <div>Step 4 content...</div>}

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
                        <span className="m-0 p-0">Back</span>
                    </Button>
                    <Button onClick={handleNextStep} type="button" 
                        className={`rounded-2xl bg-blue-500 p-2.5 gap-0 flex justify-center items-center ${ currentStep === totalSteps
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200"
                        }`}
                        disabled={currentStep === totalSteps}
                     >
                        <span>Next</span>
                        <ChevronRight className="flex justify-center items-center" style={{ width: '18px', height: '18px' }}/>
                    </Button>

                </div>
            </form>
        </div>
    );
}
