import React, { useEffect, useState } from "react";
import { TeachCard } from "@/components/teachCard/teachCard"; // Импорт TeachCard
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TeachCardSkeleton } from "@/components/teachCard/teachCardSkeleton";


interface Course {
  courseId: string;
  title: string;
  image: string;
}

export const Teach: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
  const mockCourses: Course[] = [
    {
      courseId: "1",
      title: "Основы программирования на Python",
      image: "/images/cards/1.png",
    },
    {
      courseId: "2",
      title: "Введение в веб-разработку с HTML и CSS",
      image: "/images/cards/1.png",
    },
    {
      courseId: "3",
      title: "Разработка приложений с React React React React React React React React React React React React React",
      image: "/images/cards/1.png",
    },
  ];
    const navigate = useNavigate();

    const handleAddCourse = () => {
        navigate(`./new`);
    };
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // Simulate data loading
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen bg-white p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="md:text-2xl sm:text-xl  font-bold">Ваши курсы</h2>
        <Button
            onClick={handleAddCourse}
            variant="outline"
            className="flex items-center border-blue-500 text-blue-500 
            hover:border-blue-700 hover:text-blue-700 transition-colors duration-200"
            >
            <Plus className="w-5 h-5" />
            <span>New course</span>
        </Button>
      </div>
      <div className="space-y-4">
        {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <TeachCardSkeleton key={index} />
                ))
            : mockCourses.map((course) => (
                <TeachCard key={course.courseId} {...course} />
                ))}
      </div>
    </main>
  );
};
