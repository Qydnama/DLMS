import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CourseSidebar } from "@/components/courseSidebar/courseSidebar";
import useSWR from "swr";
import { fetchCourseData, CourseDataInterface } from "@/lib/courseService";
import { SyllabusSkeleton } from "@/components/syllabus/syllabusSkeleton";


export function Syllabus() {
    
    const navigate = useNavigate();

    const { data: course, error, isLoading } = useSWR<CourseDataInterface>(
    "course-data",
    fetchCourseData,
    { shouldRetryOnError: false }
    );

    // Функция перехода к конкретному уроку
    const handleLessonClick = (lessonId: string) => {
        navigate(`../lesson/${lessonId}`);
    };


 if (error) {
   return (
     <div className="p-4 text-center text-red-500">
       Failed to load course data: {String(error)}
     </div>
   );
 }

  // 3) If loading or no data => skeleton
 if (isLoading || !course) {
   return <SyllabusSkeleton />;
 }

    return (
        <SidebarProvider>
            <div className="flex w-full mx-auto bg-white rounded-[2vw] shadow-md">
                {/* Sidebar */}
                <CourseSidebar courseData={course}/>

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
                        {course.modules.map((mod, mIndex) => {
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
