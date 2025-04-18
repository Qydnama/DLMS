export interface CourseInterface {
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

const mockData: CourseInterface[] = [
    {
        courseId: "1",
        authorId: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseId: "2",
        authorId: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseId: "3",
        authorId: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseId: "1",
        authorId: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseId: "2",
        authorId: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseId: "3",
        authorId: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseId: "1",
        authorId: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseId: "2",
        authorId: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseId: "3",
        authorId: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseId: "1",
        authorId: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseId: "2",
        authorId: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseId: "3",
        authorId: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseId: "1",
        authorId: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseId: "2",
        authorId: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseId: "3",
        authorId: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseId: "1",
        authorId: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseId: "2",
        authorId: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseId: "3",
        authorId: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseId: "1",
        authorId: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseId: "2",
        authorId: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseId: "3",
        authorId: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
];

export async function fetchCatalogCourses(): Promise<CourseInterface[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return mockData;
}