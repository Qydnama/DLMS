import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, CirclePlus } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { z } from "zod";
import { useEffect, useState } from "react";


interface StepThreeProps {
    quizzes: {
        title: string;
        questions: {
            questionText: string;
            options: string[];
            correctAnswer: number;
        }[];
    }[];
    activeQuizIndex: number;
    setActiveQuizIndex: (index: number) => void;
    setQuizzes: (quizzes: { title: string; questions: { questionText: string; options: string[]; correctAnswer: number; }[]; }[]) => void;
    setValidationStatus: React.Dispatch<React.SetStateAction<{ stepOne: boolean; stepTwo: boolean; stepThree: boolean; }>>
    showErrors: boolean;
}

const quizSchema = z.object({
    title: z.string().min(5, "Quiz title must be at least 5 characters"),
    questions: z.array(
        z.object({
            questionText: z.string().min(5, "Question text must be at least 5 characters"),
            options: z.array(z.string().min(1, "Option cannot be empty")).min(2, "Each question must have at least 2 options"),
            correctAnswer: z.number().gte(0, "A correct answer must be selected"),
        })
    ).min(1, "At least one question is required"),
});

const stepThreeSchema = z.object({
    quizzes: z.array(quizSchema).min(1, "You must have at least 1 quiz"),
});

export function StepThree({
    quizzes,
    activeQuizIndex,
    setActiveQuizIndex,
    setQuizzes,
    setValidationStatus,
    showErrors
}: StepThreeProps) {
    const [errors, setErrors] = useState<Record<number, { title?: string; questions?: Record<number, { questionText?: string; options?: string[]; correctAnswer?: string }> }>>({});


    useEffect(() => {
        const validate = () => {
            const result = stepThreeSchema.safeParse({ quizzes });
            if (!result.success) {
                const errorMessages: Record<number, { 
                    title?: string; 
                    questions?: Record<number, { 
                        questionText?: string; 
                        options?: string[]; 
                        correctAnswer?: string 
                    }> 
                }> = {};

                result.error.issues.forEach((issue) => {
                    // quizIndex is at path[1]
                    const quizIndex = parseInt(issue.path[1] as string, 10);
                    if (!errorMessages[quizIndex]) {
                      errorMessages[quizIndex] = { questions: {} };
                    }
                  
                    // Now check if we're dealing with quiz-level errors:
                    // Path could be ["quizzes", quizIndex, "title"] or ["quizzes", quizIndex, "questions", ...]
                    if (issue.path[2] === "title") {
                      errorMessages[quizIndex].title = issue.message;
                      return;
                    }
                  
                    // If it's questions, we dig deeper
                    if (issue.path[2] === "questions") {
                      const questionIndex = parseInt(issue.path[3] as string, 10);
                      if (!errorMessages[quizIndex].questions![questionIndex]) {
                        errorMessages[quizIndex].questions![questionIndex] = {};
                      }
                  
                      // Possible fields at path[4]: "questionText", "options", "correctAnswer"
                      if (issue.path[4] === "questionText") {
                        errorMessages[quizIndex].questions![questionIndex].questionText = issue.message;
                      } else if (issue.path[4] === "options") {
                        // Then path[5] is the option index
                        const optionIndex = parseInt(issue.path[5] as string, 10);
                        if (!errorMessages[quizIndex].questions![questionIndex].options) {
                          errorMessages[quizIndex].questions![questionIndex].options = [];
                        }
                        errorMessages[quizIndex].questions![questionIndex].options![optionIndex] = issue.message;
                      } else if (issue.path[4] === "correctAnswer") {
                        errorMessages[quizIndex].questions![questionIndex].correctAnswer = issue.message;
                      }
                    }
                });

                setErrors(errorMessages);
                setValidationStatus((prev) => ({ ...prev, stepThree: false }));
            } else {
                setErrors({});
                setValidationStatus((prev) => ({ ...prev, stepThree: true }));
            }
        };

        validate();
    }, [quizzes, setValidationStatus]);

    const handleAddQuiz = () => {
        setQuizzes([
            ...quizzes,
            {
                title: `Quiz ${quizzes.length + 1}`,
                questions: Array(5).fill(null).map(() => ({
                    questionText: "",
                    options: ["", ""],
                    correctAnswer: 0
                })),
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
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Quiz Builder</h2>
                <Button
                    onClick={handleAddQuiz}
                    type="button"
                    className="rounded-2xl gap-1.5 p-2.5 bg-blue-500 flex items-center border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200"
                    disabled={quizzes.length >= 10}
                >
                    <CirclePlus className="" style={{ width: '20px', height: '20px' }} />
                    Add Quiz
                </Button>
            </div>

            {/* Quiz Tabs */}
            <Tabs
                defaultValue="quiz-0" value={`quiz-${activeQuizIndex}`}
                onValueChange={(value) => setActiveQuizIndex(parseInt(value.split("-")[1]))}
            >
                <TabsList className="py-6 rounded-t-2xl bg-white">
                    <ScrollArea className="w-full max-w-[844px]">
                        <div className="flex space-x-0">
                            {quizzes.map((quiz, index) => {
                                const hasError = !!errors[index];

                                return (
                                    <div key={index} className="flex items-center border rounded-t-2xl">
                                        <TabsTrigger className={`rounded-t-2xl transition-colors duration-200 ${
                                            hasError && showErrors ? "text-red-500 border-red-500" : "text-gray-900 border-gray-300"
                                            }`} value={`quiz-${index}`}>
                                            <span className="ml-2 mr-1">{quiz.title}</span>
                                            {quizzes.length > 1 && (
                                            <Button
                                                onClick={() => handleRemoveQuiz(index)}
                                                variant="ghost"
                                                className="w-5 h-5 p-0"
                                                type="button"
                                            >
                                                <X className="w-4 h-4 text-red-500" />
                                            </Button>
                                            )}
                                        </TabsTrigger>
                                    </div>
                                );
                            })}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </TabsList>

                {/* Quiz Content */}
                {quizzes.map((quiz, quizIndex) => (
                    <TabsContent key={quizIndex} value={`quiz-${quizIndex}`}>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <Label className="">Quiz Title</Label>
                                <Input
                                    value={quiz.title}
                                    onChange={(e) => {
                                        const updatedQuizzes = [...quizzes];
                                        updatedQuizzes[quizIndex].title = e.target.value;
                                        setQuizzes(updatedQuizzes);
                                    }}
                                    placeholder="Enter quiz title"
                                    className="rounded-2xl"
                                    maxLength={64}
                                />
                                <div className="flex justify-between">
                                    <div>
                                        {showErrors && errors[quizIndex]?.title && (
                                            <p className="text-red-500 text-xs">{errors[quizIndex].title}</p>
                                        )}
                                    </div>
                                    <div className="text-gray-500 text-xs mt-1 text-right">
                                        <span>{quiz.title.length}/64</span>
                                    </div>
                                </div>
                            </div>

                            {/* Questions */}
                            {quiz.questions.map((question, questionIndex) => (
                                <div key={questionIndex} className="p-4 border rounded-xl bg-gray-50 space-y-3 relative">
                                    <div>
                                        <Label>Question {questionIndex + 1}</Label>
                                        {quiz.questions.length > 5 && (
                                        <Button
                                            onClick={() => handleRemoveQuestion(questionIndex)}
                                            className="w-6 h-6 p-1 absolute top-3 right-3 bg-gray-50 white text-gray-500 hover:text-red-500 hover:bg-gray-50 transition"
                                            type="button"
                                        >
                                            <X className="w-5 h-5" />
                                        </Button>
                                        )}
                                    </div>

                                    <div className="space-y-1">
                                        <Textarea
                                            value={question.questionText}
                                            onChange={(e) => handleQuizInputChange("questionText", questionIndex, e.target.value)}
                                            placeholder="Enter question text"
                                            className="rounded-2xl"
                                            maxLength={512}
                                        />
                                        <div className="flex justify-between">
                                            <div>
                                            {showErrors && errors[quizIndex]?.questions?.[questionIndex]?.questionText && (
                                                <p className="text-red-500 text-xs">{errors[quizIndex]?.questions?.[questionIndex]?.questionText}</p>
                                            )}
                                            </div>
                                            <div className="text-gray-500 text-xs mt-1 text-right">
                                                <span>{question.questionText.length}/512</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Options */}
                                    {question.options.map((option, optionIndex) => (
                                        <div>
                                            <div key={optionIndex} className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name={`correct-answer-${questionIndex}`}
                                                    checked={question.correctAnswer === optionIndex}
                                                    onChange={() => handleCorrectAnswerChange(questionIndex, optionIndex)}
                                                    className="mr-1"
                                                />
                                                <Label className="block text-sm font-medium">{String.fromCharCode(97 + optionIndex)}.</Label>
                                                <Input
                                                    value={option}
                                                    onChange={(e) => handleQuizInputChange("option", questionIndex, e.target.value, optionIndex)}
                                                    placeholder={`Option ${String.fromCharCode(65 + optionIndex)}`}
                                                    maxLength={256}
                                                    className="rounded-2xl"
                                                />
                                                {question.options.length > 2 && (
                                                <Button
                                                    onClick={() => handleRemoveOption(questionIndex, optionIndex)}
                                                    type="button"
                                                    variant="ghost"
                                                    className="p-1 text-gray-500 hover:text-red-500"
                                                >
                                                    <X className="w-4 h-4" />
                                                </Button>
                                                )}
                                            </div>
                                            <div className="flex">
                                                {showErrors && errors[quizIndex]?.questions?.[questionIndex]?.options?.[optionIndex] && (
                                                    <p className="text-red-500 text-xs">{errors[quizIndex]?.questions?.[questionIndex]?.options?.[optionIndex]}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Add Option */}
                                    {question.options.length < 7 && (
                                        <div>
                                            <input
                                            type="radio"
                                            name={`correct-answer-${questionIndex}`}
                                            checked={false}
                                            className="mr-1 ml-[0.1rem]"
                                            />
                                            <Button
                                                type="button"
                                                variant="link"
                                                onClick={() => {
                                                    const updatedQuizzes = [...quizzes];
                                                    updatedQuizzes[activeQuizIndex].questions[questionIndex].options.push("");
                                                    setQuizzes(updatedQuizzes);
                                                }}
                                                className="pt-0 pb-2 mt-2 text-gray-500"
                                            >
                                                Add Option
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Add Question */}
                            <Button
                                type="button"
                                onClick={handleAddQuestion}
                                className="rounded-2xl p-2.5 bg-blue-500 hover:bg-blue-600 mt-4"
                                disabled={quizzes[activeQuizIndex].questions.length >= 20}
                            >
                                Add Question
                            </Button>

                            <div className="ml-2 flex justify-between text-gray-500 text-xs mt-1">
                                <span>Don't forget to choose the right answers for questions!</span>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
