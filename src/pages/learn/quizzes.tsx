import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Check, ListOrdered } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CourseSidebar } from "@/components/courseSidebar/courseSidebar";

import useSWR from "swr";
import { QuizzesSkeleton } from "@/components/quizzes/quizzesSkeleton";
import { fetchCourseData, CourseDataInterface } from "@/lib/courseService";
import { ErrorPage } from "@/pages/error/error";

export function Quizzes() {
    const navigate = useNavigate();

    const {
        data: course,
        error,
        isLoading,
    } = useSWR<CourseDataInterface>("course-data", fetchCourseData, {
        shouldRetryOnError: false,
    });

    const handleQuizClick = (quizId: string) => {
        navigate(`../quiz/${quizId}`);
    };

    if (error) {
        return (
            <ErrorPage
                first={"Courses Not Found"}
                second={"We couldn't find your courses."}
                third={"Please try again later."}
            />
        );
    }

    if (isLoading || !course) {
        return <QuizzesSkeleton />;
    }

    const allQuizzes = course.modules.map((mod, index) => {
        // For demonstration: a "title" from moduleTitle, or some quiz-specific fields
        return {
            id: `${index + 1}`,
            title: `${mod.title}`,
            completed: mod.completed,
            score: mod.completed ? mod.score : null, // example
            totalQuestions: mod.quiz.questions.length,
        };
    });

    return (
        <SidebarProvider>
            <div className="flex w-full mx-auto bg-white rounded-[2vw] shadow-md">
                {/* Sidebar */}
                <CourseSidebar courseData={course} />
                <div className="max-w-4xl flex-grow mx-auto p-0 pt-6 md:pr-6 md:p-6">
                    {/* Sidebar Trigger + Title */}
                    <div className="flex items-center gap-2 mb-4">
                        <SidebarTrigger className="block min-[1000px]:hidden pl-3" />
                        <h2 className="text-xl sm:text-2xl font-bold">
                            Quizzes
                        </h2>
                    </div>

                    <Separator className="mb-4" />

                    <div className="w-full">
                        {allQuizzes.map((quiz, index) => {
                            // Apply responsive border-radius styles
                            const borderRadiusClass =
                                index === 0
                                    ? "rounded-none sm:rounded-t-lg"
                                    : index === allQuizzes.length - 1
                                    ? "rounded-none sm:rounded-b-lg"
                                    : "rounded-none";

                            return (
                                <Card
                                    key={quiz.id}
                                    onClick={() => handleQuizClick(quiz.id)}
                                    className={`flex items-center p-2 sm:p-3 md:p-4 border cursor-pointer hover:bg-gray-100 transition ${borderRadiusClass}`}
                                >
                                    {/* Quiz Details */}
                                    <div className="ml-2 sm:ml-4 flex-1 min-w-0">
                                        <Label className="break-all sm:break-words text-xs cursor-pointer md:text-sm lg:text-base line-clamp-3 font-semibold">
                                            {index + 1}. {quiz.title}
                                        </Label>
                                    </div>

                                    {/* Completion Status / Score */}
                                    <div className="pl-2 flex flex-col items-end">
                                        {quiz.completed ? (
                                            <span className="flex space-x-1 text-green-600 font-semibold text-[10px] sm:text-sm">
                                                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span>
                                                    Score: {quiz.score}/
                                                    {quiz.totalQuestions}
                                                </span>
                                            </span>
                                        ) : (
                                            <span className="text-gray-400 text-xs sm:text-sm">
                                                Not completed
                                            </span>
                                        )}
                                        {/* Question Count */}
                                        <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm mt-1">
                                            <ListOrdered className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                            <span className="">
                                                {quiz.totalQuestions} Questions
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}
