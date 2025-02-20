import React, { useEffect, useState } from "react";
import { LearnCard } from "@/components/learnCard/learnCard";
import { LearnCardSkeleton } from "@/components/learnCard/learnCardSkeleton";


interface Course {
  courseId: string;
  title: string;
  image: string;
}

export const Learn: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
  const mockCourses: Course[] = [
    {
      courseId: "1",
      title: "Основы программирования на Python",
      image: "/images/cards/1.png",
    },
    {
      courseId: "2",
      title: "Введение в веб-разработку с HTML и CSS  ReactReactReact ReactReactReact ReactReactReact ReactReactReact ReactReactReact ReactReactReact ReactReactReact ReactReactReact ReactReactReact ReactReactReact ",
      image: "/images/cards/1.png",
    },
    {
      courseId: "3",
      title: "Разработка приложений с React React React React React React React React React React React React React",
      image: "/images/cards/1.png",
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500); // Simulate data loading
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex flex-col items-center mx-auto max-w-4xl w-full bg-white rounded-3xl shadow-md p-4 pt-6 pb-10">
        <div className="w-full max-w-3xl">
            <div className="mb-6">
                <h2 className="md:text-2xl sm:text-xl font-bold">Мое обучение</h2>
            </div>
            <div className="w-full space-y-4 flex flex-col items-center">
                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <LearnCardSkeleton key={index} />
                        ))
                    : mockCourses.map((course) => (
                        <LearnCard key={course.courseId} {...course} />
                        ))}
            </div>
        </div>
    </main>
  );
};
