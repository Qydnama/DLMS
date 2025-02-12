import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CirclePlus, X } from "lucide-react";

interface StepTwoProps {
    courseData: {
        lessons: {
            title: string;
            videoUrl: string;
        }[];
    };
    handleAddLesson: () => void;
    handleRemoveLesson: (index: number) => void;
    handleLessonChange: (index: number, field: string, value: string) => void;
}

export function StepTwo({ courseData, handleAddLesson, handleRemoveLesson, handleLessonChange }: StepTwoProps) {
    return (
        <div>
            <div className="space-y-4">
                <div className="mt-5 items-center flex justify-between">
                    <p className="text-xl font-semibold text-gray-800">Course Lessons</p>
                    <Button
                        onClick={handleAddLesson}
                        type="button"
                        className="rounded-2xl gap-1.5 p-2.5 bg-blue-500 flex items-center border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200"
                    >
                        <CirclePlus className="" style={{ width: '20px', height: '20px' }} />
                        Add Lesson
                    </Button>
                </div>

                {/* Display Lessons */}
                {courseData.lessons.map((lesson, index) => (
                    <div key={index} className="relative p-4 border rounded-xl space-y-4 bg-gray-50">
                        <div className="flex justify-between">
                            {/* X Button (Delete Lesson) */}
                            <Button
                                onClick={() => handleRemoveLesson(index)}
                                type="button"
                                className="p-1 absolute top-3 right-3 bg-gray-50 white text-gray-500 hover:text-red-500 hover:bg-gray-50 transition"
                                
                            >
                                <X className="w-5 h-5" />
                            </Button>

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
                            <div className="text-gray-500 text-xs mt-1 text-right">
                                <span>{lesson.title.length}/120</span>
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}