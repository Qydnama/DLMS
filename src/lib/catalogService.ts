export interface CourseInterface {
    courseAddress: string;
    authorAddress: string;
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
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a3",
        title: "Полный курс по UI/UX и веб-дизайну в Figma Полякова Алексея 2024",
        author: "Илья Перминов",
        price: 39,
        duration: 10,
        rating: 5,
        image: "/images/cards/1.png",
        users: 11467,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a1",
        title: 'Буткемп "Java: написание веб-сервисов для начинающих"',
        author: "Андрей Сумин",
        price: 27,
        duration: 40,
        rating: 5,
        image: "/images/cards/1.png",
        users: 41,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a2",
        title: "Лучший по Python. Для всех начинающих!",
        author: "Сергей Балакрев",
        price: 20,
        duration: 92,
        rating: 5,
        image: "/images/cards/1.png",
        users: 6328,
    },
    {
        courseAddress:
            "0:c4e8e20e802afd8b1fd347ad0c63662ab7dae4ef53ca7380a5ab5280b7464d98",
        authorAddress: "a3",
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
