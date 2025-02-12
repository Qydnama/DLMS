import  { useState, useEffect, useRef } from "react";
import { CourseCard } from "@/components/catalogCard/courseCard";
import { CourseCardSkeleton } from "@/components/catalogCard/courseCardSkeleton";

const mockData = [
  {
    courseId: "1",
    authorId: "a1",
    title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
    author: 'Андрей Сумин',
    price: 27,
    duration: 40,
    rating: 5,
    image: '/images/cards/1.png',
    users: 41
  },
  {
    courseId: "2",
    authorId: "a2",
    title: 'Лучший по Python. Для всех начинающих!',
    author: 'Сергей Балакрев',
    price: 20,
    duration: 92,
    rating: 5,
    image: '/images/cards/1.png',
    users: 6328
  },
  {
    courseId: "3",
    authorId: "a3",
    title: 'Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024',
    author: 'Илья Перминов',
    price: 39,
    duration: 10,
    rating: 5,
    image: '/images/cards/1.png',
    users: 11467
  },
  {
    courseId: "1",
    authorId: "a1",
    title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
    author: 'Андрей Сумин',
    price: 27,
    duration: 40,
    rating: 5,
    image: '/images/cards/1.png',
    users: 41
  },
  {
    courseId: "2",
    authorId: "a2",
    title: 'Лучший по Python. Для всех начинающих!',
    author: 'Сергей Балакрев',
    price: 20,
    duration: 92,
    rating: 5,
    image: '/images/cards/1.png',
    users: 6328
  },
  {
    courseId: "3",
    authorId: "a3",
    title: 'Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024',
    author: 'Илья Перминов',
    price: 39,
    duration: 10,
    rating: 5,
    image: '/images/cards/1.png',
    users: 11467
  },
  {
    courseId: "1",
    authorId: "a1",
    title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
    author: 'Андрей Сумин',
    price: 27,
    duration: 40,
    rating: 5,
    image: '/images/cards/1.png',
    users: 41
  },
  {
    courseId: "2",
    authorId: "a2",
    title: 'Лучший по Python. Для всех начинающих!',
    author: 'Сергей Балакрев',
    price: 20,
    duration: 92,
    rating: 5,
    image: '/images/cards/1.png',
    users: 6328
  },
  {
    courseId: "3",
    authorId: "a3",
    title: 'Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024',
    author: 'Илья Перминов',
    price: 39,
    duration: 10,
    rating: 5,
    image: '/images/cards/1.png',
    users: 11467
  },
  {
    courseId: "1",
    authorId: "a1",
    title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
    author: 'Андрей Сумин',
    price: 27,
    duration: 40,
    rating: 5,
    image: '/images/cards/1.png',
    users: 41
  },
  {
    courseId: "2",
    authorId: "a2",
    title: 'Лучший по Python. Для всех начинающих!',
    author: 'Сергей Балакрев',
    price: 20,
    duration: 92,
    rating: 5,
    image: '/images/cards/1.png',
    users: 6328
  },
  {
    courseId: "3",
    authorId: "a3",
    title: 'Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024',
    author: 'Илья Перминов',
    price: 39,
    duration: 10,
    rating: 5,
    image: '/images/cards/1.png',
    users: 11467
  },
  {
    courseId: "1",
    authorId: "a1",
    title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
    author: 'Андрей Сумин',
    price: 27,
    duration: 40,
    rating: 5,
    image: '/images/cards/1.png',
    users: 41
  },
  {
    courseId: "2",
    authorId: "a2",
    title: 'Лучший по Python. Для всех начинающих!',
    author: 'Сергей Балакрев',
    price: 20,
    duration: 92,
    rating: 5,
    image: '/images/cards/1.png',
    users: 6328
  },
  {
    courseId: "3",
    authorId: "a3",
    title: 'Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024',
    author: 'Илья Перминов',
    price: 39,
    duration: 10,
    rating: 5,
    image: '/images/cards/1.png',
    users: 11467
  },
  {
    courseId: "1",
    authorId: "a1",
    title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
    author: 'Андрей Сумин',
    price: 27,
    duration: 40,
    rating: 5,
    image: '/images/cards/1.png',
    users: 41
  },
  {
    courseId: "2",
    authorId: "a2",
    title: 'Лучший по Python. Для всех начинающих!',
    author: 'Сергей Балакрев',
    price: 20,
    duration: 92,
    rating: 5,
    image: '/images/cards/1.png',
    users: 6328
  },
  {
    courseId: "3",
    authorId: "a3",
    title: 'Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024',
    author: 'Илья Перминов',
    price: 39,
    duration: 10,
    rating: 5,
    image: '/images/cards/1.png',
    users: 11467
  },
  {
    courseId: "1",
    authorId: "a1",
    title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
    author: 'Андрей Сумин',
    price: 27,
    duration: 40,
    rating: 5,
    image: '/images/cards/1.png',
    users: 41
  },
  {
    courseId: "2",
    authorId: "a2",
    title: 'Лучший по Python. Для всех начинающих!',
    author: 'Сергей Балакрев',
    price: 20,
    duration: 92,
    rating: 5,
    image: '/images/cards/1.png',
    users: 6328
  },
  {
    courseId: "3",
    authorId: "a3",
    title: 'Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024',
    author: 'Илья Перминов',
    price: 39,
    duration: 10,
    rating: 5,
    image: '/images/cards/1.png',
    users: 11467
  },

];

interface Course {
    courseId: string;
    authorId: string;
    title: string;
    author: string;
    price: number;
    duration: number;
    rating: number;
    image: string;
    users: number;
  }

export function Catalog() {

  
    const [courses, setCourses] = useState<Course[]>([]);
    const [visibleCourses, setVisibleCourses] = useState<Course[]>([]);
    const [isLoading, setIsLoading] = useState(true); // Устанавливаем начальное значение true
    const observerRef = useRef<HTMLDivElement | null>(null);
  
    const ITEMS_PER_PAGE = 12;
  
    // Инициализация данных
    useEffect(() => {
      setTimeout(() => {
        setCourses(mockData);
        setVisibleCourses(mockData.slice(0, ITEMS_PER_PAGE));
        setIsLoading(false); // Завершаем начальную загрузку
      }, 2000); // Имитация задержки в 2 секунды
    }, []);
  
    const loadMoreCourses = () => {
      if (!isLoading) {
        setIsLoading(true);
  
        const nextPageCourses = courses.slice(
          visibleCourses.length,
          visibleCourses.length + ITEMS_PER_PAGE
        );
  
        if (nextPageCourses.length === 0) {
          setIsLoading(false);
          return;
        }
  
        setTimeout(() => {
          setVisibleCourses((prev) => [...prev, ...nextPageCourses]);
          setIsLoading(false);
        }, 2000); // Имитация задержки
      }
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMoreCourses();
          }
        },
        { threshold: 1.0 }
      );
  
      if (observerRef.current) {
        observer.observe(observerRef.current);
      }
  
      return () => {
        if (observerRef.current) {
          observer.unobserve(observerRef.current);
        }
      };
    }, [observerRef.current, visibleCourses, courses]);
  
    return (
      <main className="min-h-screen bg-white rounded-xl shadow-md">
            <div className="mx-auto p-4">
                <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Online Courses</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                     {isLoading && visibleCourses.length === 0
                        ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                            <CourseCardSkeleton key={index} />
                        ))
                        : visibleCourses.map((course) => (
                            <CourseCard key={course.courseId} {...course} />
                        ))}
                    {isLoading && visibleCourses.length > 0 &&
                        Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                        <CourseCardSkeleton key={index} />
                        ))}
                </div>
                <div ref={observerRef} className="h-10" />
            </div>
      </main>
    );
  }
  