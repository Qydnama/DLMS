import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Syllabus = () => {
  const lessons = [
    {
      id: "1",
      title: "Introduction to Web Development DevelopmentDevelopment Development Development Development",
      thumbnail: "/images/cards/1.png",
      completed: true,
    },
    {
      id: "2",
      title: "HTML Basics Development Development Development Development",
      thumbnail: "/images/cards/1.png",
      completed: false,
    },
    {
      id: "3",
      title: "CSS for Styling Development",
      thumbnail: "/images/cards/1.png",
      completed: false,
    },
    {
      id: "4",
      title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
      thumbnail: "/images/cards/1.png",
      completed: false,
    },
    {
        id: "5",
        title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
        thumbnail: "/images/cards/1.png",
        completed: false,
      
    },
    {
        id: "6",
        title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
        thumbnail: "/images/cards/1.png",
        completed: false,
      },
      {
        id: "7",
        title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
        thumbnail: "/images/cards/1.png",
        completed: false,
      },
      {
        id: "8",
        title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
        thumbnail: "/images/cards/1.png",
        completed: false,
      },
      {
        id: "9",
        title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
        thumbnail: "/images/cards/1.png",
        completed: false,
      },
  ];

  const navigate = useNavigate();

  const handleLessonClick = (lessonId: string) => {
    navigate(`../lesson/${lessonId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-0 pt-6 md:pr-6 md:p-6">
        <div className="flex items-center gap-2 mb-4">
            <SidebarTrigger className="block min-[1000px]:hidden pl-3" /> {/* Sidebar button before Syllabus text */}
            <h2 className="text-xl sm:text-2xl font-bold">Syllabus</h2>
        </div>
        <Separator className="mb-4" />

        <div className="w-full">
            {lessons.map((lesson, index) => {
                // Apply responsive border-radius styles
                const borderRadiusClass =
                index === 0
                    ? "rounded-none sm:rounded-t-lg"
                    : index === lessons.length - 1
                    ? "rounded-none sm:rounded-b-lg"
                    : "rounded-none";

                return (
                <Card
                    key={lesson.id}
                    onClick={() => handleLessonClick(lesson.id)}
                    className={`flex items-center p-2 sm:p-3 md:p-4 border cursor-pointer hover:bg-gray-100 transition ${borderRadiusClass}`}
                >
                    {/* Video Thumbnail */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Lesson Details */}
                    <div className="ml-2 sm:ml-4 flex-1">
                    <Label className="cursor-pointer text-xs md:text-sm lg:text-base line-clamp-3 font-semibold break-all sm:break-words">
                        {index + 1}. {lesson.title}
                    </Label>
                    </div>

                    {/* Completion Status */}
                    <div className="pl-2">
                    {lesson.completed ? (
                    <Check className="text-green-500 w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                    <span className="text-gray-400 text-xs sm:text-sm">Not completed</span>
                    )}
                    </div>
                </Card>
                );
            })}
        </div>
    </div>
  );
};
