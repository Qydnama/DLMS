import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Check, ListOrdered } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Quizzes = () => {
  const quizzes = [
    {
      id: "1",
      title: "Introduction to Web Development",
      completed: true,
      score: 8,
      totalQuestions: 10,
    },
    {
      id: "2",
      title: "HTML Basics",
      completed: false,
      score: null,
      totalQuestions: 8,
    },
    {
      id: "3",
      title: "CSS for Styling",
      completed: true,
      score: 6,
      totalQuestions: 7,
    },
    {
      id: "4",
      title: "JavaScript Fundamentals",
      completed: false,
      score: null,
      totalQuestions: 12,
    },
    {
        id: "5",
        title: "Advanced JavaScript",
        completed: true,
        score: 10,
        totalQuestions: 10,
      },
      {
        id: "6",
        title: "React Basics",
        completed: false,
        score: null,
        totalQuestions: 9,
      },
      {
        id: "7",
        title: "State Management in React",
        completed: true,
        score: 7,
        totalQuestions: 10,
      },
      {
        id: "8",
        title: "Next.js Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals FundamentalsFundamentals Fundamentals Fundamentals Fundamentals",
        completed: false,
        score: null,
        totalQuestions: 11,
      },
    ];
  
    const navigate = useNavigate();
  
    const handleQuizClick = (quizId: string) => {
      navigate(`/quiz/${quizId}`);
    };
  
    return (
      <div className="max-w-4xl mx-auto p-0 pt-6 pr-6 md:p-6 bg-white">
        {/* Sidebar Trigger + Title */}
        <div className="flex items-center gap-2 mb-4">
          <SidebarTrigger className="block min-[1000px]:hidden pl-3" />
          <h2 className="text-xl sm:text-2xl font-bold">Quizzes</h2>
        </div>
  
        <Separator className="mb-4" />
  
        <div className="w-full">
          {quizzes.map((quiz, index) => {
            // Apply responsive border-radius styles
            const borderRadiusClass =
              index === 0
                ? "rounded-none sm:rounded-t-lg"
                : index === quizzes.length - 1
                ? "rounded-none sm:rounded-b-lg"
                : "rounded-none";
  
            return (
              <Card
                key={quiz.id}
                onClick={() => handleQuizClick(quiz.id)}
                className={`flex items-center p-2 sm:p-3 md:p-4 border cursor-pointer hover:bg-gray-100 transition ${borderRadiusClass}`}
              >
  
                {/* Quiz Details */}
                <div className="ml-2 sm:ml-4 flex-1">
                  <Label className="text-xs cursor-pointer md:text-sm lg:text-base line-clamp-3 font-semibold break-words">
                    {index + 1}. {quiz.title}
                  </Label>
                </div>
  
                {/* Completion Status / Score */}
                <div className="pl-2 flex flex-col items-end">
                  {quiz.completed ? (
                    <span className="flex space-x-1 text-green-600 font-semibold text-xs sm:text-sm">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Score: {quiz.score}/{quiz.totalQuestions}</span>
                    </span>
                  ) : (
                    <span className="text-gray-400 text-xs sm:text-sm">Not completed</span>
                  )}
                  {/* Question Count */}
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mt-1">
                    <ListOrdered className="w-4 h-4 mr-1" />
                    {quiz.totalQuestions} Questions
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };
  