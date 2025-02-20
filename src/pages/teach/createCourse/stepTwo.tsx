import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CirclePlus, X } from "lucide-react";
import { z } from "zod";
import { useEffect, useState } from "react";

// **Zod Validation Schema**
const youtubeUrlRegex = new RegExp(
    /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
);

const lessonSchema = z.object({
    title: z.string().min(5, "Lesson title must be at least 5 characters"),
    videoUrl: z.string().regex(youtubeUrlRegex, "Enter a valid YouTube URL"),
});

const stepTwoSchema = z.object({
    lessons: z
        .array(lessonSchema)
        .min(1, "You must have at least 1 lesson")
        .max(20, "You cannot have more than 20 lessons"),
});

interface StepTwoProps {
    courseData: {
        lessons: {
            title: string;
            videoUrl: string;
        }[];
    };
    setCourseData: React.Dispatch<React.SetStateAction<{
            logo: string;
            title: string;
            summary: string;
            recommendedWorkload: string;
            whatYouWillLearn: string;
            about: string;
            whatYouWillGain: string;
            initialRequirements: string;
            price: number;
            lessons: { title: string; videoUrl: string }[];
    }>>;
    setValidationStatus: React.Dispatch<React.SetStateAction<{ stepOne: boolean; stepTwo: boolean; stepThree: boolean; }>>
    showErrors: boolean;
}

export function StepTwo({ courseData, setCourseData, setValidationStatus, showErrors}: StepTwoProps) {
    const [errors, setErrors] = useState<Record<number, { title?: string; videoUrl?: string }>>({});

    useEffect(() => {
        const validate = () => {
            const result = stepTwoSchema.safeParse({ lessons: courseData.lessons });
            if (!result.success) {
                const errorMessages: Record<number, { title?: string; videoUrl?: string }> = {};

                result.error.issues.forEach((issue) => {
                    const lessonIndex = parseInt(issue.path[1] as string, 10);
                    if (!errorMessages[lessonIndex]) errorMessages[lessonIndex] = {};
                    if (issue.path[2] === "title") errorMessages[lessonIndex].title = issue.message;
                    if (issue.path[2] === "videoUrl") errorMessages[lessonIndex].videoUrl = issue.message;
                });

                setErrors(errorMessages);
                setValidationStatus((prev) => ({ ...prev, stepTwo: false }));
            } else {
                setErrors({});
                setValidationStatus((prev) => ({ ...prev, stepTwo: true }));
            }
        };

        validate();
    }, [courseData, setValidationStatus]);

    const handleAddLesson = () => {
            setCourseData((prev) => ({
                ...prev,
                lessons: [...prev.lessons, { title: "", videoUrl: "" }],
            }));
        };
    
    const handleLessonChange = (index: number, field: string, value: string) => {
        setCourseData((prev) => {
            const updatedLessons = [...prev.lessons];
            updatedLessons[index] = { ...updatedLessons[index], [field]: value };
            return { ...prev, lessons: updatedLessons };
        });
    };

    const handleRemoveLesson = (index: number) => {
        setCourseData((prev) => ({
            ...prev,
            lessons: prev.lessons.filter((_, i) => i !== index), // Removes the lesson
        }));
    };


    return (
        <div>
            <div className="space-y-4">
                <div className="mt-5 items-center flex justify-between">
                    <p className="text-xl font-semibold text-gray-800">Course Modules</p>
                    <Button
                        onClick={handleAddLesson}
                        type="button"
                        variant="outline"
                        className="flex gap-1.5 p-2.5 items-center border-blue-500 text-blue-500 
                    hover:border-blue-700 hover:text-blue-700 transition-colors duration-200 rounded-2xl"
                        disabled={courseData.lessons.length >= 20}
                    >
                        <CirclePlus className="" style={{ width: '20px', height: '20px' }} />
                        <span className="font-semibold">Add Lesson</span>
                    </Button>
                </div>

                {/* Display Lessons */}
                {courseData.lessons.map((lesson, index) => (
                    <div key={index} className="relative p-4 border rounded-xl space-y-4 bg-gray-50">
                        <div className="flex justify-between">
                            {/* X Button (Delete Lesson) */}
                            {courseData.lessons.length > 1 && (
                            <Button
                                onClick={() => handleRemoveLesson(index)}
                                type="button"
                                className="p-1 absolute top-3 right-3 bg-gray-50 white text-gray-500 hover:text-red-500 hover:bg-gray-50 transition"
                                
                            >
                                <X className="w-5 h-5" />
                            </Button>
                            )}

                            {/* Lesson Number */}
                            <h3 className="text-lg font-medium text-gray-700">
                                Lesson {index + 1}
                            </h3>
                        </div>

                        {/* Lesson Title */}
                        <div>
                            <Label htmlFor={`lesson-title-${index}`} className="mb-2 block text-sm font-medium text-gray-700">
                                Video Title
                            </Label>
                            <Input
                                id={`lesson-title-${index}`}
                                type="text"
                                placeholder={`Lesson ${index + 1} Title`}
                                value={lesson.title}
                                onChange={(e) => handleLessonChange(index, "title", e.target.value)}
                                maxLength={120}
                                className="rounded-2xl"
                            />
                            <div className="flex justify-between">
                                <div>
                                {showErrors && errors[index]?.title && (
                                    <p className="text-red-500 text-xs">{errors[index].title}</p>
                                )}
                                </div>
                                <div className="text-gray-500 text-xs mt-1 text-right">
                                    <span>{lesson.title.length}/120</span>
                                </div>
                            </div>
                        </div>

                        {/* YouTube Link */}
                        <div>
                            <Label htmlFor={`lesson-url-${index}`} className="mb-2 block text-sm font-medium text-gray-700">
                                YouTube Link
                            </Label>
                            <Input
                                id={`lesson-url-${index}`}
                                type="url"
                                placeholder="Enter YouTube video URL"
                                value={lesson.videoUrl}
                                onChange={(e) => handleLessonChange(index, "videoUrl", e.target.value)}
                                className="rounded-2xl"
                            />
                            {showErrors && errors[index]?.videoUrl && (
                                <p className="text-red-500 text-xs">{errors[index].videoUrl}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}