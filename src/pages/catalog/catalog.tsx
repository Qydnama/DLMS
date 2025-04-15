import { useState, useEffect, useRef } from "react";
import { CourseCard } from "@/components/catalogCard/courseCard";
import { CourseCardSkeleton } from "@/components/catalogCard/courseCardSkeleton";
import useSWR from "swr";
import { CourseInterface, fetchCatalogCourses } from "@/lib/catalogService";

const ITEMS_PER_PAGE = 12;

export function Catalog() {
    const {
        data: courses,
        error,
        isLoading,
    } = useSWR<CourseInterface[]>("catalog-courses", fetchCatalogCourses, {
        shouldRetryOnError: false,
    });

    const [visibleCourses, setVisibleCourses] = useState<CourseInterface[]>([]);
    const [loadingMore, setLoadingMore] = useState(false);

    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (courses) {
            setVisibleCourses(courses.slice(0, ITEMS_PER_PAGE));
        }
    }, [courses]);

    const loadMoreCourses = () => {
        if (!courses) return;
        if (loadingMore) return;

        setLoadingMore(true);

        // Next chunk
        const start = visibleCourses.length;
        const end = start + ITEMS_PER_PAGE;
        const nextChunk = courses.slice(start, end);

        // If no more data, stop
        if (nextChunk.length === 0) {
            setLoadingMore(false);
            return;
        }

        setTimeout(() => {
            setVisibleCourses((prev) => [...prev, ...nextChunk]);
            setLoadingMore(false);
        }, 1500);
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
    }, [observerRef, visibleCourses, courses, loadingMore]);

    if (error) {
        return (
            <main className="min-h-screen bg-white rounded-[2vw] shadow-md p-4">
                <p className="text-center text-red-500 mt-8">
                    Failed to load courses: {String(error)}
                </p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white rounded-[2vw] shadow-md p-4">
            <div className="mx-auto p-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Online Courses
                </h2>

                {/* 8) The grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                    {/* If we are still loading initial data (courses == undefined) */}
                    {isLoading &&
                        !courses &&
                        Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
                            <CourseCardSkeleton key={idx} />
                        ))}

                    {/* Otherwise, show the visible courses */}
                    {visibleCourses.map((course) => (
                        <CourseCard
                            key={course.courseId + course.authorId}
                            {...course}
                        />
                    ))}

                    {/* If we have loaded some data, but we're actively loading more, show some skeleton placeholders */}
                    {loadingMore &&
                        Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
                            <CourseCardSkeleton key={"loadMore-" + idx} />
                        ))}
                </div>

                {/* 9) Intersection observer sentinel */}
                <div ref={observerRef} className="h-10" />
            </div>
        </main>
    );
}
