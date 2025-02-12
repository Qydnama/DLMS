import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { LessonSidebar } from "@/components/lessonSidebar/lessonSidebar";
import { LessonVideo } from "@/components/lessonVideo/lessonVideo";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export function Lesson() {

    const data = {
        course: {
            courseTitle: "Example Course Example eCourseCourseCourseCourseCours Course Example Example Course Example Course Example Course "
        },
        lessons: [
            { id: "1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
            { id: "2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
            { id: "3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
            { id: "4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
            { id: "5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
            { id: "6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
            { id: "7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
            { id: "8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
            { id: "9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
            { id: "10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
            { id: "11", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
            { id: "12", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
            { id: "13", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
            { id: "14", title: "JavaScript Basics", videoId: "3JluqTojuME" },
            { id: "15", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
            { id: "16", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
            { id: "17", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
            { id: "18", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
            { id: "19", title: "JavaScript Basics", videoId: "3JluqTojuME" },
            { id: "20", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
            { id: "22", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
            { id: "23", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
            { id: "24", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
            { id: "25", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
            { id: "26", title: "JavaScript Basics", videoId: "3JluqTojuME" },
            { id: "27", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
            { id: "28", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
            { id: "29", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
            { id: "30", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
            { id: "31", title: "JavaScript Basics", videoId: "3JluqTojuME" },
            { id: "32", title: "React for Beginners", videoId: "Ke90Tje7VS0" }

        ]
    };

    const { lessonId } = useParams(); // Get current lesson ID from URL
    const navigate = useNavigate(); // For navigation

    // Convert lessonId to index
    const currentLessonIndex = data.lessons.findIndex((lesson) => lesson.id === lessonId);
    const isFirstLesson = currentLessonIndex === 0;
    const isLastLesson = currentLessonIndex === data.lessons.length - 1;

    const handlePrevLesson = () => {
        if (!isFirstLesson) {
            const prevLessonId = data.lessons[currentLessonIndex - 1].id;
            navigate(`../lesson/${prevLessonId}`);
        }
    };

    const handleNextLesson = () => {
        if (!isLastLesson) {
            const nextLessonId = data.lessons[currentLessonIndex + 1].id;
            navigate(`../lesson/${nextLessonId}`);
        }
    };

    return (
        <SidebarProvider>
        <div className="flex w-full mx-auto bg-white rounded-2xl shadow-md">
            {/* Sidebar with a fixed width */}
                <div className="">
                    <LessonSidebar data={data} />
                </div>
            
            <div className="hidden md:block w-[0.1px] bg-gray-200" />

            {/* Lesson Content - Takes remaining space */}
            <div className="py-6 flex-grow">
                {/* Lesson Title */}
                <div className="flex">
                    <SidebarTrigger className="block min-[1000px]:hidden px-3" />
                    <p className="pl-3 text-lg sm:text-2xl font-semibold text-gray-800">{`${data.lessons[currentLessonIndex]?.id}. ${data.lessons[currentLessonIndex]?.title}`}</p>

                </div>
                <Separator className="mb-2" />

                {/* Lesson Video */}
                <div className="w-full">
                    <LessonVideo video_id={data.lessons[currentLessonIndex]?.videoId} />
                </div>
                <Separator className="mt-2" />
                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6 mx-6">
                        <Button
                            onClick={handlePrevLesson}
                            disabled={isFirstLesson}
                            className={`rounded-2xl bg-blue-500 p-2.5 flex items-center gap-2 ${
                                isFirstLesson ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "hover:bg-blue-700"
                            }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Back</span>
                        </Button>

                        <Button
                            onClick={handleNextLesson}
                            disabled={isLastLesson}
                            className={`rounded-2xl bg-blue-500 p-2.5 flex items-center gap-2 ${
                                isLastLesson ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "hover:bg-blue-700"
                            }`}
                        >
                            <span>Next</span>
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}
