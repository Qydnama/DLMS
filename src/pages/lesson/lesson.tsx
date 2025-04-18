import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { LessonSidebar } from "@/components/lessonSidebar/lessonSidebar";
import { LessonVideo } from "@/components/lessonVideo/lessonVideo";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import {
    CourseDataInterface,
    fetchCourseData,
    ModuleInterface,
    LessonInterface,
} from "@/lib/courseService";
import { LessonSkeleton } from "@/components/lesson/lessonSkeleton";
import { ErrorPage } from "@/pages/error/error";

export function Lesson() {
    const { lessonId } = useParams<{ lessonId: string }>();
    const navigate = useNavigate();

    const {
        data: course,
        error,
        isLoading,
    } = useSWR<CourseDataInterface>("course-data", fetchCourseData, {
        shouldRetryOnError: false,
    });

    if (isLoading || !course) {
        return <LessonSkeleton />;
    }

    if (error) {
        return (
            <ErrorPage
                first={"Lesson Not Found"}
                second={"We couldn't find this lesson."}
                third={"Please try again later."}
            />
        );
    }

    const allModules = course.modules;
    const currentModule: ModuleInterface | undefined = allModules.find((m) =>
        m.lessons.some((l) => l.id === lessonId)
    );

    if (!currentModule) {
        return (
            <ErrorPage
                first={"Module Not Found"}
                second={"We couldn't find this Module."}
                third={"Please try again later."}
            />
        );
    }

    const lessons = currentModule.lessons;
    const currentLessonIndex = lessons.findIndex((l) => l.id === lessonId);
    const currentLesson: LessonInterface = lessons[currentLessonIndex];

    const isFirstLesson = currentLessonIndex === 0;
    const isLastLesson = currentLessonIndex === lessons.length - 1;

    const goToLesson = (index: number) =>
        navigate(`../lesson/${lessons[index].id}`);

    const handlePrevLesson = () =>
        !isFirstLesson && goToLesson(currentLessonIndex - 1);
    const handleNextLesson = () =>
        !isLastLesson && goToLesson(currentLessonIndex + 1);

    return (
        <SidebarProvider>
            <div className="flex w-full mx-auto bg-white rounded-[2vw] shadow-md">
                {/* Sidebar with a fixed width */}
                <div className="">
                    <LessonSidebar
                        data={{
                            course: {
                                courseId: course.id,
                                courseTitle: course.title,
                            },
                            modules: allModules.map((m) => ({
                                moduleTitle: m.title,
                                lessons: m.lessons,
                            })),
                        }}
                        activeLessonId={lessonId!}
                    />
                </div>

                <div className="hidden md:block w-[0.1px] bg-gray-200" />

                {/* Lesson Content - Takes remaining space */}
                <div className="py-6 flex-grow">
                    {/* Lesson Title */}
                    <div className="flex">
                        <SidebarTrigger className="block min-[1000px]:hidden px-3" />
                        <p className="pl-3 text-lg sm:text-2xl font-semibold text-gray-800">
                            {currentLessonIndex + 1}. {currentLesson.title}
                        </p>
                    </div>
                    <Separator className="mb-2" />

                    {/* Lesson Video */}
                    <div className="w-full p-2">
                        <LessonVideo video_id={currentLesson.videoId} />
                    </div>
                    <Separator className="mt-2" />
                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6 mx-6">
                        <Button
                            onClick={handlePrevLesson}
                            disabled={isFirstLesson}
                            className={`rounded-2xl bg-blue-500 p-2.5 flex items-center gap-2 ${
                                isFirstLesson
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "hover:bg-blue-700"
                            }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Back</span>
                        </Button>

                        <Button
                            onClick={handleNextLesson}
                            disabled={isLastLesson}
                            className={`rounded-2xl bg-blue-500 p-2.5 flex items-center gap-2 ${
                                isLastLesson
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "hover:bg-blue-700"
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
