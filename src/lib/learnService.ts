export interface LearnCourseInterface {
    courseId: string;
    title: string;
    image: string;
}

const mockCourses: LearnCourseInterface[] = [
    {
        courseId: "1",
        title: "Основы программирования на Python",
        image: "/images/cards/1.png",
    },
    {
        courseId: "2",
        title: "Введение в веб-разработку с HTML и CSS  ReactReactReact ...",
        image: "/images/cards/1.png",
    },
    {
        courseId: "3",
        title: "Разработка приложений с React React React ...",
        image: "/images/cards/1.png",
    },
];

export async function fetchLearnCourses(): Promise<LearnCourseInterface[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockCourses;
}
