import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CourseDataInterface } from "@/lib/courseService";

interface BuyPanelProps {
    course: CourseDataInterface;
}

export function BuyPanel({ course }: BuyPanelProps) {
    return (
    <div
        className="w-full md:w-[35%] md:sticky md:top-20 h-fit bg-white p-2 md:p-6 
                fixed bottom-0 left-0 md:relative shadow-[0px_-4px_10px_rgba(0,0,0,0.12)] md:shadow-none"
        style={{ maxWidth: "100vw", zIndex: "50" }}
    >
        <div className="w-[90%] sm:w-[60%] md:w-full mx-auto">
            <div className="w-full">
                <h3 className="text-xl font-bold text-gray-800">
                    100 TON
                    {/* {course.price} */}
                </h3>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-2 md:mt-4 font-bold">
                    Buy
                </Button>

                <Separator className="my-2 md:my-4" />

                <div className="hidden md:block">
                    <h3 className="text-md font-semibold text-gray-800">
                        You can learn right away
                    </h3>
                    <p className="text-sm text-gray-600">
                        Buy from the company
                    </p>
                    <p className="text-sm text-gray-600">Buy as a gift</p>
                    <Separator className="my-4" />
                </div>

                {/* Course Includes */}
                <div className="bg-gray-50 px-2 md:p-4 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 hidden md:block">
                        This course includes
                    </h4>
                    <p className="text-sm text-gray-700 mt-1">
                        <strong>{course.attributes.lessons}</strong> lessons
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>{course.modules.length}</strong> modules and quizzes
                    </p>
                    <a
                        href="#course-content"
                        className="text-blue-600 hover:underline mt-2 block text-sm"
                    >
                        View course content
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}
