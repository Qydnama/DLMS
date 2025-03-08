import { useEffect, useState } from "react";
import { z } from "zod";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, CirclePlus } from "lucide-react";

// 1) Валидация урока
const lessonSchema = z.object({
    title: z.string().min(5, "Lesson title must be at least 5 characters"),
    videoUrl: z
        .string()
        .regex(
            /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/,
            "Enter a valid YouTube URL"
        ),
});

// 2) Валидация модуля
const moduleSchema = z.object({
    moduleTitle: z
        .string()
        .min(5, "Module title must be at least 5 characters"),
    hasQuiz: z.boolean(),
    lessons: z
        .array(lessonSchema)
        .min(1, "Must have at least 1 lesson")
        .max(10, "Max 10 lessons in one module"),
});

// 3) Валидация шагa Two
const stepTwoSchema = z.object({
    modules: z
        .array(moduleSchema)
        .min(1, "You must have at least 1 module")
        .max(10, "You cannot have more than 10 modules"),
});

// Типы пропсов
interface StepTwoProps {
    courseData: {
        logo: string;
        title: string;
        summary: string;
        recommendedWorkload: string;
        whatYouWillLearn: string;
        about: string;
        whatYouWillGain: string;
        initialRequirements: string;
        price: number;
        modules: {
            moduleTitle: string;
            lessons: {
                title: string;
                videoUrl: string;
            }[];
        }[];
    };
    setCourseData: React.Dispatch<
        React.SetStateAction<{
            logo: string;
            title: string;
            summary: string;
            recommendedWorkload: string;
            whatYouWillLearn: string;
            about: string;
            whatYouWillGain: string;
            initialRequirements: string;
            price: number;
            modules: {
                moduleTitle: string;
                quiz?: {
                    questions: {
                        questionText: string;
                        options: string[];
                        correctAnswer: number;
                    }[];
                };
                lessons: {
                    title: string;
                    videoUrl: string;
                }[];
            }[];
        }>
    >;
    setValidationStatus: React.Dispatch<
        React.SetStateAction<{
            stepOne: boolean;
            stepTwo: boolean;
            stepThree: boolean;
        }>
    >;
    showErrors: boolean;

    // Логика табов для модулей
    activeModuleIndex: number;
    setActiveModuleIndex: (index: number) => void;
}

export function StepTwo({
    courseData,
    setCourseData,
    setValidationStatus,
    showErrors,
    activeModuleIndex,
    setActiveModuleIndex,
}: StepTwoProps) {
    // Ошибки вида errors[moduleIndex][lessonIndex] = { title?: string; videoUrl?: string }
    const [errors, setErrors] = useState<
        Record<number, Record<number, { title?: string; videoUrl?: string }>>
    >({});

    useEffect(() => {
        const validate = () => {
            const result = stepTwoSchema.safeParse({
                modules: courseData.modules,
            });
            if (!result.success) {
                // Собираем ошибки в tempErrors
                const tempErrors: Record<
                    number,
                    Record<number, { title?: string; videoUrl?: string }>
                > = {};

                for (const issue of result.error.issues) {
                    // Например, issue.path = ["modules", 0, "lessons", 1, "title"]
                    if (issue.path[0] === "modules") {
                        const moduleIndex = Number(issue.path[1]);
                        if (Number.isNaN(moduleIndex)) continue;

                        // Проверяем, lessons ли это
                        if (issue.path[2] === "lessons") {
                            const lessonIndex = Number(issue.path[3]);
                            if (!tempErrors[moduleIndex]) {
                                tempErrors[moduleIndex] = {};
                            }
                            if (!tempErrors[moduleIndex][lessonIndex]) {
                                tempErrors[moduleIndex][lessonIndex] = {};
                            }
                            if (issue.path[4] === "title") {
                                tempErrors[moduleIndex][lessonIndex].title =
                                    issue.message;
                            } else if (issue.path[4] === "videoUrl") {
                                tempErrors[moduleIndex][lessonIndex].videoUrl =
                                    issue.message;
                            }
                        }
                    }
                }

                setErrors(tempErrors);
                setValidationStatus((prev) => ({ ...prev, stepTwo: false }));
            } else {
                setErrors({});
                setValidationStatus((prev) => ({ ...prev, stepTwo: true }));
            }
        };

        validate();
    }, [courseData, setValidationStatus]);

    // Добавить модуль
    const handleAddModule = () => {
        if (courseData.modules.length >= 10) return;
        setCourseData((prev) => ({
            ...prev,
            modules: [
                ...prev.modules,
                {
                    moduleTitle: `Module ${prev.modules.length + 1}`,
                    hasQuiz: true,
                    lessons: [{ title: "", videoUrl: "" }],
                    quiz: {
                        questions:
                            (Array(5)
                                .fill(null)
                                .map(() => ({
                                    questionText: "",
                                    options: ["", ""],
                                    correctAnswer: 0,
                                })) as Array<{
                                questionText: string;
                                options: string[];
                                correctAnswer: number;
                            }>) || undefined,
                    },
                },
            ],
        }));
        setActiveModuleIndex(courseData.modules.length); // переходим на новую вкладку
    };

    const handleRemoveModule = (index: number) => {
        const updated = [...courseData.modules];
        updated.splice(index, 1);
        setCourseData((prev) => ({
            ...prev,
            modules: updated,
        }));
        setActiveModuleIndex(Math.max(0, index - 1));
    };

    const handleModuleTitleChange = (index: number, value: string) => {
        const updated = [...courseData.modules];
        updated[index].moduleTitle = value;
        setCourseData((prev) => ({ ...prev, modules: updated }));
    };

    // Добавить/удалить урок
    const handleAddLesson = (moduleIndex: number) => {
        const updated = [...courseData.modules];
        if (updated[moduleIndex].lessons.length >= 10) return;
        updated[moduleIndex].lessons.push({ title: "", videoUrl: "" });
        setCourseData((prev) => ({ ...prev, modules: updated }));
    };

    const handleRemoveLesson = (moduleIndex: number, lessonIndex: number) => {
        const updated = [...courseData.modules];
        updated[moduleIndex].lessons = updated[moduleIndex].lessons.filter(
            (_, i) => i !== lessonIndex
        );
        setCourseData((prev) => ({ ...prev, modules: updated }));
    };

    const handleLessonFieldChange = (
        moduleIndex: number,
        lessonIndex: number,
        field: "title" | "videoUrl",
        value: string
    ) => {
        const updated = [...courseData.modules];
        updated[moduleIndex].lessons[lessonIndex] = {
            ...updated[moduleIndex].lessons[lessonIndex],
            [field]: value,
        };
        setCourseData((prev) => ({ ...prev, modules: updated }));
    };


    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Course Modules</h2>
                <Button
                    onClick={handleAddModule}
                    type="button"
                    variant="outline"
                    className="gap-1.5 p-2.5 flex items-center border-blue-500 text-blue-500 
          hover:border-blue-700 hover:text-blue-700 transition-colors duration-200 rounded-2xl"
                    disabled={courseData.modules.length >= 10}
                >
                    <CirclePlus style={{ width: "20px", height: "20px" }} />
                    <span className="font-semibold">Add Module</span>
                </Button>
            </div>

            {/* Tabs для переключения между модулями */}
            <Tabs
                defaultValue="module-0"
                value={`module-${activeModuleIndex}`}
                onValueChange={(val) => {
                    const i = parseInt(val.split("-")[1], 10);
                    setActiveModuleIndex(i);
                }}
            >
                <TabsList className="py-4 bg-white w-full flex justify-start">
                    <ScrollArea>
                        <div className="flex space-x-0">
                            {courseData.modules.map((mod, index) => {
                                const moduleHasError = !!errors[index];
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center border rounded-t-2xl"
                                    >
                                        <TabsTrigger
                                            className={`rounded-t-2xl transition-colors duration-200 px-3 py-1 ${
                                                moduleHasError && showErrors
                                                    ? "text-red-500 border-red-500"
                                                    : "text-gray-900 border-gray-300"
                                            }`}
                                            value={`module-${index}`}
                                        >
                                            <span className="mr-1">
                                                {`Module ${index + 1}`}
                                            </span>

                                            {courseData.modules.length > 1 && (
                                                <Button
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // чтобы не переключить вкладку при удалении
                                                        handleRemoveModule(
                                                            index
                                                        );
                                                    }}
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

                {courseData.modules.map((mod, modIndex) => (
                    <TabsContent key={modIndex} value={`module-${modIndex}`}>
                        <div className="space-y-4 p-4 rounded-xl relative">
                            {/* Название модуля */}
                            <div className="mb-2">
                                <Label>Module Title</Label>
                                <Input
                                    value={mod.moduleTitle}
                                    onChange={(e) =>
                                        handleModuleTitleChange(
                                            modIndex,
                                            e.target.value
                                        )
                                    }
                                    maxLength={64}
                                    className="rounded-2xl mt-1"
                                />
                                <div className="text-right text-gray-400 text-xs">
                                    {mod.moduleTitle.length}/64
                                </div>
                            </div>

                            {/* Уроки */}
                            <div className="mt-4 space-y-3">
                                <h3 className="font-medium">
                                    Lessons in this Module
                                </h3>
                                {mod.lessons.map((lesson, lessonIndex) => (
                                    <div
                                        key={lessonIndex}
                                        className="p-3 border rounded-xl bg-gray-50 relative"
                                    >
                                        {/* Кнопка удаления урока */}
                                        {mod.lessons.length > 1 && (
                                            <Button
                                                onClick={() =>
                                                    handleRemoveLesson(
                                                        modIndex,
                                                        lessonIndex
                                                    )
                                                }
                                                type="button"
                                                variant="ghost"
                                                className="w-6 h-6 p-1 absolute top-2 right-2 text-gray-500 hover:bg-white-500 hover:text-red-500 bg-white"
                                            >
                                                <X className="w-4 h-4" />
                                            </Button>
                                        )}

                                        {/* Lesson Title */}
                                        <div className="mb-2">
                                            <Label>
                                                Lesson Title {lessonIndex + 1}
                                            </Label>
                                            <Input
                                                value={lesson.title}
                                                onChange={(e) =>
                                                    handleLessonFieldChange(
                                                        modIndex,
                                                        lessonIndex,
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter lesson title"
                                                maxLength={120}
                                                className="rounded-2xl mt-1"
                                            />
                                            {showErrors &&
                                                errors[modIndex]?.[lessonIndex]
                                                    ?.title && (
                                                    <p className="text-red-500 text-xs">
                                                        {
                                                            errors[modIndex][
                                                                lessonIndex
                                                            ].title
                                                        }
                                                    </p>
                                                )}
                                            <div className="text-right text-gray-400 text-xs">
                                                {lesson.title.length}/120
                                            </div>
                                        </div>

                                        {/* Lesson Video URL */}
                                        <div>
                                            <Label>YouTube URL</Label>
                                            <Input
                                                value={lesson.videoUrl}
                                                onChange={(e) =>
                                                    handleLessonFieldChange(
                                                        modIndex,
                                                        lessonIndex,
                                                        "videoUrl",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="https://youtube.com/..."
                                                className="rounded-2xl mt-1"
                                            />
                                            {showErrors &&
                                                errors[modIndex]?.[lessonIndex]
                                                    ?.videoUrl && (
                                                    <p className="text-red-500 text-xs">
                                                        {
                                                            errors[modIndex][
                                                                lessonIndex
                                                            ].videoUrl
                                                        }
                                                    </p>
                                                )}
                                        </div>
                                    </div>
                                ))}

                                {/* Кнопка добавления урока */}
                                <Button
                                    onClick={() => handleAddLesson(modIndex)}
                                    variant="outline"
                                    type="button"
                                    className="gap-1.5 p-2.5 flex font-semibold items-center border-blue-500 text-blue-500 
                    hover:border-blue-700 hover:text-blue-700 transition-colors duration-200 rounded-2xl"
                                    disabled={mod.lessons.length >= 10}
                                >
                                    <CirclePlus
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                    <span>Add Lesson</span>
                                </Button>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
