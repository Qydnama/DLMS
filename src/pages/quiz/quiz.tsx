import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QuizSidebar } from "@/components/quizSidebar/quizSidebar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export function Quiz() {

    const data = {
        course: {
            courseId: "1",
            courseTitle: "Example Course Example eCourseCourseCourseCourseCours Course Example Example Course Example Course Example Course "
        },
        quizzes: [
            {
              id: "1",
              title: "Introduction to Web Development",
              completed: true,
              score: 8,
              totalQuestions: 10,
            },
            {
              id: "2",
              title: "HTML Basics",
              completed: false,
              score: null,
              totalQuestions: 8,
            },
            {
              id: "3",
              title: "CSS for Styling",
              completed: true,
              score: 6,
              totalQuestions: 7,
            },
            {
              id: "4",
              title: "JavaScript Fundamentals",
              completed: false,
              score: null,
              totalQuestions: 12,
            },
            {
                id: "5",
                title: "Advanced JavaScript",
                completed: true,
                score: 10,
                totalQuestions: 10,
            },
            {
                id: "6",
                title: "React Basics",
                completed: false,
                score: null,
                totalQuestions: 9,
            },
            {
                id: "7",
                title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
                completed: true,
                score: 7,
                totalQuestions: 10,
            },
            {
                id: "8",
                title: "Next.js Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals FundamentalsFundamentals Fundamentals Fundamentals Fundamentals",
                completed: false,
                score: null,
                totalQuestions: 11,
            },
            {
                id: "9",
                title: "Introduction to Web Development",
                completed: true,
                score: 8,
                totalQuestions: 10,
              },
              {
                id: "10",
                title: "HTML Basics",
                completed: false,
                score: null,
                totalQuestions: 8,
              },
              {
                id: "11",
                title: "CSS for Styling",
                completed: true,
                score: 6,
                totalQuestions: 7,
              },
              {
                id: "12",
                title: "JavaScript Fundamentals",
                completed: false,
                score: null,
                totalQuestions: 12,
              },
              {
                  id: "13",
                  title: "Advanced JavaScript",
                  completed: true,
                  score: 10,
                  totalQuestions: 10,
              },
              {
                  id: "14",
                  title: "React Basics",
                  completed: false,
                  score: null,
                  totalQuestions: 9,
              },
              {
                  id: "15",
                  title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
                  completed: true,
                  score: 7,
                  totalQuestions: 10,
              },
              {
                  id: "16",
                  title: "Next.js Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals FundamentalsFundamentals Fundamentals Fundamentals Fundamentals",
                  completed: false,
                  score: null,
                  totalQuestions: 11,
              },
              {
                id: "17",
                title: "Introduction to Web Development",
                completed: true,
                score: 8,
                totalQuestions: 10,
              },
              {
                id: "18",
                title: "HTML Basics",
                completed: false,
                score: null,
                totalQuestions: 8,
              },
              {
                id: "19",
                title: "CSS for Styling",
                completed: true,
                score: 6,
                totalQuestions: 7,
              },
              {
                id: "20",
                title: "JavaScript Fundamentals",
                completed: false,
                score: null,
                totalQuestions: 12,
              },
              {
                  id: "21",
                  title: "Advanced JavaScript",
                  completed: true,
                  score: 10,
                  totalQuestions: 10,
              },
              {
                  id: "22",
                  title: "React Basics",
                  completed: false,
                  score: null,
                  totalQuestions: 9,
              },
              {
                  id: "23",
                  title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
                  completed: true,
                  score: 7,
                  totalQuestions: 10,
              },
              {
                  id: "24",
                  title: "Next.js Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals FundamentalsFundamentals Fundamentals Fundamentals Fundamentals",
                  completed: false,
                  score: null,
                  totalQuestions: 11,
              },
              {
                id: "25",
                title: "Introduction to Web Development",
                completed: true,
                score: 8,
                totalQuestions: 10,
              },
              {
                id: "26",
                title: "HTML Basics",
                completed: false,
                score: null,
                totalQuestions: 8,
              },
              {
                id: "27",
                title: "CSS for Styling",
                completed: true,
                score: 6,
                totalQuestions: 7,
              },
              {
                id: "28",
                title: "JavaScript Fundamentals",
                completed: false,
                score: null,
                totalQuestions: 12,
              },
              {
                  id: "29",
                  title: "Advanced JavaScript",
                  completed: true,
                  score: 10,
                  totalQuestions: 10,
              },
              {
                  id: "30",
                  title: "React Basics",
                  completed: false,
                  score: null,
                  totalQuestions: 9,
              },
              {
                  id: "31",
                  title: "JavaScript Fundamental Development Development Development Development Development Development Development Development Development Development Development Development Development Development DevelopmentDevelopment Development Development DevelopmentDevelopmentDevelopmentDevelopment Development Developments",
                  completed: true,
                  score: 7,
                  totalQuestions: 10,
              },
              {
                  id: "32",
                  title: "Next.js Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals FundamentalsFundamentals Fundamentals Fundamentals Fundamentals",
                  completed: false,
                  score: null,
                  totalQuestions: 11,
              },
        ]
    };

    // Get quizId from the URL (e.g. /quiz/1)
    const { quizId } = useParams<{ quizId: string }>();
    const navigate = useNavigate();

    // Find the current quiz by ID
    const currentQuizIndex = data.quizzes.findIndex((q) => q.id === quizId);
    const currentQuiz = data.quizzes[currentQuizIndex];

    // Next/Prev quiz logic
    const isFirstQuiz = currentQuizIndex <= 0;
    const isLastQuiz = currentQuizIndex >= data.quizzes.length - 1;

    const handlePrevQuiz = () => {
        if (!isFirstQuiz) {
        const prevQuizId = data.quizzes[currentQuizIndex - 1].id;
        navigate(`../quiz/${prevQuizId}`);
        }
    };

    const handleNextQuiz = () => {
        if (!isLastQuiz) {
        const nextQuizId = data.quizzes[currentQuizIndex + 1].id;
        navigate(`../quiz/${nextQuizId}`);
        }
    };

    const handleQuizButtonClick = () => {
        if (currentQuiz.completed) {
            navigate(`review`);
        } else {
            navigate(`attempt`);
        }
    };

    // If for some reason quizId not found, you might handle an error or redirect
    if (!currentQuiz) {
        return <div className="p-6">Quiz not found</div>;
    }

    return (
        <SidebarProvider>
        <div className="flex w-full mx-auto bg-white rounded-2xl shadow-md">
            {/* Quiz Sidebar */}
            <div>
                <QuizSidebar data={data} />
            </div>

            <div className="hidden md:block w-[0.1px] bg-gray-200" />

            {/* Main Content */}
            <div className="py-6 flex-grow space-y-20">
                {/* Top row: sidebar trigger + quiz title */}
                <div className="flex items-center mx-4">
                    <SidebarTrigger className="block min-[1000px]:hidden px-3" />
                    <h1 className="pl-3 text-lg sm:text-2xl font-semibold text-gray-800 break-all sm:break-words">
                    {currentQuiz.id}. {currentQuiz.title}
                    </h1>
                </div>
                {/* <Separator className="my-2" /> */}

                <div className="w-[95%] md:w-[80%] mx-auto">
                    {/* "Assignment details" area */}
                    <div className="bg-blue-50 p-4 rounded-lg flex flex-col justify-between mb-4 ">
                        <div className="">
                            <h2 className="font-semibold mb-1">Assignment details</h2>
                        </div>

                        {/* Wrap the Attempts and Button inside a flex div */}
                        <div className="flex justify-between items-center w-full space-x-20">
                            <div className="text-xs sm:text-sm text-gray-600">
                                <div>Due: Feb 18, 12:59 AM +06</div>
                                <div>Attempts: Unlimited</div>
                            </div>

                            <Button onClick={handleQuizButtonClick}
                                variant="default"
                                className="bg-blue-500 hover:bg-blue-600 text-white ml-4 rounded-sm"
                            >
                                {currentQuiz.completed ? "Review" : "Start"}
                            </Button>
                        </div>
                    </div>

                    {/* "Your grade" area */}
                    <div className="border p-4 rounded-lg flex mb-4 ">
                        <div className="flex flex-col items-left">
                            <h3 className="font-semibold mb-1 text-gray-800">Your grade</h3>
                            {currentQuiz.completed ? (
                            <div className="text-sm text-gray-800">
                                Highest score: {currentQuiz.score ?? "--"}/
                                {currentQuiz.totalQuestions}
                            </div>
                            ) : (
                            <div className="text-sm text-gray-600">
                                You haven’t submitted this yet. We keep your highest score.
                            </div>
                            )}
                            <div className="mt-2 font-bold text-xl">
                            {currentQuiz.completed
                                ? `${currentQuiz.score ?? "--"}/${currentQuiz.totalQuestions}`
                                : "--"}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6 mx-6">
                        <Button
                        onClick={handlePrevQuiz}
                        disabled={isFirstQuiz}
                        className={`rounded-2xl bg-blue-500 p-2.5 flex items-center gap-2 ${
                            isFirstQuiz ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "hover:bg-blue-700"
                        }`}
                        >
                        <ChevronLeft className="w-5 h-5" />
                        <span>Previous</span>
                        </Button>

                        <Button
                        onClick={handleNextQuiz}
                        disabled={isLastQuiz}
                        className={`rounded-2xl bg-blue-500 p-2.5 flex items-center gap-2 ${
                            isLastQuiz ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "hover:bg-blue-700"
                        }`}
                        >
                        <span>Next</span>
                        <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                
            </div>
        </div>
        </SidebarProvider>
  );
}