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
            courseId: "1",
            courseTitle: "Example Course Example eCourseCourseCourseCourseCours Course Example Example Course Example Course Example Course "
        },
        modules: [
            {
                moduleTitle: "Making Project: Tic-Tac-Toe",
                lessons: [
                    { id: "m1-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m1-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m1-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m1-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m1-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                    { id: "m1-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m1-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m1-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m1-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m1-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                ]
            },
            {
                moduleTitle: "Working with FastApi",
                lessons: [
                    { id: "m2-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m2-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m2-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m2-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m2-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                    { id: "m2-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m2-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m2-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m2-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m2-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                ]
            },
            {
                moduleTitle: "CSS Fundamentals",
                lessons: [
                    { id: "m3-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m3-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m3-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m3-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m3-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                    { id: "m3-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m3-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m3-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m3-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m3-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                ]
            },
            {
                moduleTitle: "React for Beginners",
                lessons: [
                    { id: "m4-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m4-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m4-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m4-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m4-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                    { id: "m4-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m4-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m4-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m4-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m4-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                ]
            },
            {
                moduleTitle: "JavaScript Basics",
                lessons: [
                    { id: "m5-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m5-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m5-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m5-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m5-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                    { id: "m5-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m5-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m5-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m5-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m5-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                ]
            },
            {
                moduleTitle: "JavaScript Basics awdawd wad awda wd adw awd awd awd aw",
                lessons: [
                    { id: "m6-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m6-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m6-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m6-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m6-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                    { id: "m6-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
                    { id: "m6-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                    { id: "m6-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
                    { id: "m6-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
                    { id: "m6-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
                ]
            },
        ],
    };

    const { lessonId } = useParams();
    const navigate = useNavigate();
    
    // Находим модуль, содержащий текущий урок
    const currentModule = data.modules.find((module) =>
      module.lessons.some((lesson) => lesson.id === lessonId)
    );
    
    // Получаем индекс урока внутри модуля
    const currentLessonIndex = currentModule
      ? currentModule.lessons.findIndex((lesson) => lesson.id === lessonId)
      : -1;
    
    const isFirstLesson = currentLessonIndex === 0;
    const isLastLesson =
      currentModule && currentLessonIndex === currentModule.lessons.length - 1;
    
    const handlePrevLesson = () => {
      if (!isFirstLesson && currentModule) {
        const prevLessonId = currentModule.lessons[currentLessonIndex - 1]?.id;
        if (prevLessonId) navigate(`../lesson/${prevLessonId}`);
      }
    };
    
    const handleNextLesson = () => {
      if (!isLastLesson && currentModule) {
        const nextLessonId = currentModule.lessons[currentLessonIndex + 1]?.id;
        if (nextLessonId) navigate(`../lesson/${nextLessonId}`);
      }
    };


    return (
        <SidebarProvider>
        <div className="flex w-full mx-auto bg-white rounded-[2vw] shadow-md">
            {/* Sidebar with a fixed width */}
                <div className="">
                    <LessonSidebar data={data} activeLessonId={lessonId} />
                </div>
            
            <div className="hidden md:block w-[0.1px] bg-gray-200" />

            {/* Lesson Content - Takes remaining space */}
            <div className="py-6 flex-grow">
                {/* Lesson Title */}
                <div className="flex">
                    <SidebarTrigger className="block min-[1000px]:hidden px-3" />
                    <p className="pl-3 text-lg sm:text-2xl font-semibold text-gray-800">{`${currentLessonIndex + 1}. ${currentModule?.lessons[currentLessonIndex]?.title}`}</p>

                </div>
                <Separator className="mb-2" />

                {/* Lesson Video */}
                <div className="w-full p-2">
                    <LessonVideo video_id={currentModule?.lessons[currentLessonIndex]?.videoId} />
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
