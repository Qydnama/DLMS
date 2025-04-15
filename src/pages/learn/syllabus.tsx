import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CourseSidebar } from "@/components/courseSidebar/courseSidebar";

interface Lesson {
    id: string;
    title: string;
    videoId: string;
    thumbnail: string;
}

interface Module {
    moduleTitle: string;
    lessons: Lesson[];
    completed: boolean;
}

export function Syllabus() {
    const modules: Module[] = [
        {
            moduleTitle: "Making Project: Tic-Tac-Toe",
            completed: true,
            lessons: [
                {
                    id: "m1-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
        },
        {
            moduleTitle: "Working with FastApi",
            completed: true,
            lessons: [
                {
                    id: "m2-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
        },
        {
            moduleTitle: "CSS Fundamentals",
            completed: false,
            lessons: [
                {
                    id: "m3-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
        },
        {
            moduleTitle: "React for Beginners",
            completed: false,
            lessons: [
                {
                    id: "m4-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
        },
        {
            moduleTitle: "JavaScript Basics",
            completed: false,
            lessons: [
                {
                    id: "m5-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
        },
        {
            moduleTitle:
                "JavaScript Basics awdawd wad awda wd adw awd awd awd aw",
            completed: false,
            lessons: [
                {
                    id: "m6-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
        },
    ];
    const navigate = useNavigate();

    // Функция перехода к конкретному уроку
    const handleLessonClick = (lessonId: string) => {
        navigate(`../lesson/${lessonId}`);
    };

    return (
        <SidebarProvider>
            <div className="flex w-full mx-auto bg-white rounded-[2vw] shadow-md">
                {/* Sidebar */}
                <CourseSidebar />

                <div className="max-w-4xl flex-grow mx-auto p-0 pt-6 md:pr-6 md:p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <SidebarTrigger className="block min-[1000px]:hidden pl-3" />{" "}
                        {/* Sidebar button before Syllabus text */}
                        <h2 className="text-xl sm:text-2xl font-bold">
                            Syllabus
                        </h2>
                    </div>
                    <Separator className="mb-4" />

                    <div className="space-y-4">
                        {modules.map((mod, mIndex) => {
                            return (
                                <div
                                    key={mIndex}
                                    className="p-4 border rounded-lg bg-white"
                                >
                                    {/* Заголовок модуля с прогрессом */}
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium text-base sm:text-lg">
                                            {mIndex + 1}. {mod.moduleTitle}
                                        </h3>
                                        <div className="flex items-center text-sm">
                                            {mod.completed ? (
                                                <div className="flex items-center text-green-600">
                                                    <Check className="w-4 h-4 mr-1" />
                                                    <span>Done</span>
                                                </div>
                                            ) : (
                                                <span className="text-gray-500">
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Список уроков */}
                                    <div className="mt-3 space-y-2 ml-4 pl-4 border-l border-gray-200">
                                        {mod.lessons.map((lesson, lIndex) => (
                                            <div
                                                key={lesson.id}
                                                className="flex items-center gap-2 cursor-pointer"
                                                onClick={() =>
                                                    handleLessonClick(lesson.id)
                                                }
                                            >
                                                {/* Картинка урока */}
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                                                    <img
                                                        src={lesson.thumbnail}
                                                        alt={lesson.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* Название урока */}
                                                <span className="flex-1 text-sm font-semibold truncate">
                                                    {mIndex + 1}.{lIndex + 1}{" "}
                                                    {lesson.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}
