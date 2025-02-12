import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, CirclePlus } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


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
    handleAddQuiz: () => void;
    handleRemoveQuiz: (index: number) => void;
    handleAddQuestion: () => void;
    handleRemoveQuestion: (questionIndex: number) => void;
    handleQuizInputChange: (
        type: "title" | "questionText" | "option",
        questionIndex: number,
        value: string,
        optionIndex?: number
    ) => void;
    handleCorrectAnswerChange: (questionIndex: number, optionIndex: number) => void;
    handleRemoveOption: (questionIndex: number, optionIndex: number) => void;
    setActiveQuizIndex: (index: number) => void;
    setQuizzes: (quizzes: { title: string; questions: { questionText: string; options: string[]; correctAnswer: number; }[]; }[]) => void;
}

export function StepThree({
    quizzes,
    activeQuizIndex,
    handleAddQuiz,
    handleRemoveQuiz,
    handleAddQuestion,
    handleRemoveQuestion,
    handleQuizInputChange,
    handleCorrectAnswerChange,
    handleRemoveOption,
    setActiveQuizIndex,
    setQuizzes
}: StepThreeProps) {
    

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Quiz Builder</h2>
                <Button
                    onClick={handleAddQuiz}
                    type="button"
                    className="rounded-2xl gap-1.5 p-2.5 bg-blue-500 flex items-center border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200"
                >
                    <CirclePlus className="" style={{ width: '20px', height: '20px' }} />
                    Add Quiz
                </Button>
            </div>

            {/* Quiz Tabs */}
            <Tabs
                defaultValue="quiz-0"                value={`quiz-${activeQuizIndex}`}
                onValueChange={(value) => setActiveQuizIndex(parseInt(value.split("-")[1]))}
            >
                <TabsList className="py-6 rounded-t-2xl bg-white">
                    <ScrollArea className="w-full max-w-[844px]">
                        <div className="flex space-x-0">
                            {quizzes.map((quiz, index) => (
                                <div key={index} className="flex items-center border rounded-t-2xl">
                                    <TabsTrigger className="rounded-t-2xl" value={`quiz-${index}`}>
                                        <span className="ml-2 mr-1">{quiz.title}</span>
                                        <Button
                                            onClick={() => handleRemoveQuiz(index)}
                                            variant="ghost"
                                            className="w-5 h-5 p-0"
                                            type="button"
                                        >
                                            <X className="w-4 h-4 text-red-500" />
                                        </Button>
                                    </TabsTrigger>
                                </div>
                            ))}
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
                                    onChange={(e) => handleQuizInputChange("title", 0, e.target.value)}
                                    placeholder="Enter quiz title"
                                    className="rounded-2xl"
                                />
                            </div>

                            {/* Questions */}
                            {quiz.questions.map((question, questionIndex) => (
                                <div key={questionIndex} className="p-4 border rounded-xl bg-gray-50 space-y-3 relative">
                                    <div>
                                        <Label>Question {questionIndex + 1}</Label>
                                        <Button
                                            onClick={() => handleRemoveQuestion(questionIndex)}
                                            className="w-6 h-6 p-1 absolute top-3 right-3 bg-gray-50 white text-gray-500 hover:text-red-500 hover:bg-gray-50 transition"
                                            type="button"
                                        >
                                            <X className="w-5 h-5" />
                                        </Button>
                                    </div>

                                    <div className="space-y-1">
                                        <Textarea
                                            value={question.questionText}
                                            onChange={(e) => handleQuizInputChange("questionText", questionIndex, e.target.value)}
                                            placeholder="Enter question text"
                                            className="rounded-2xl"
                                        />
                                    </div>

                                    {/* Options */}
                                    {question.options.map((option, optionIndex) => (
                                        <div key={optionIndex} className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name={`correct-answer-${questionIndex}`}
                                                checked={question.correctAnswer === optionIndex}
                                                onChange={() => handleCorrectAnswerChange(questionIndex, optionIndex)}
                                                className="mr-1"
                                            />
                                            <Input
                                                value={option}
                                                onChange={(e) => handleQuizInputChange("option", questionIndex, e.target.value, optionIndex)}
                                                placeholder={`Option ${String.fromCharCode(65 + optionIndex)}`}
                                                maxLength={150}
                                                className="rounded-2xl"
                                            />
                                            <Button
                                                onClick={() => handleRemoveOption(questionIndex, optionIndex)}
                                                type="button"
                                                variant="ghost"
                                                className="p-1 text-gray-500 hover:text-red-500"
                                            >
                                                <X className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    ))}

                                    {/* Add Option */}
                                    {question.options.length < 7 && (
                                        <div>
                                            <input
                                            type="radio"
                                            name={`correct-answer-${questionIndex}`}
                                            checked={false}
                                            className="mr-1"
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
