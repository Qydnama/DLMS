export interface CourseLesson {
    id: string;
    title: string;
    videoId: string;
}

export interface CourseModule {
    moduleTitle: string;
    lessons: CourseLesson[];
}

export interface CoursePromoInterface {
    title: string;
    logo: string;
    authorName: string;
    summary: string;
    recommendedWorkload: string;
    level: string;
    language: string;
    students: number;
    rating: number;
    whatYouWillLearn: string[];
    about: string;
    whomThisCourseIsFor: string;
    initialRequirements: string;
    howWillYouLearn: string[];
    price: string;
    lessonsCount: number;
    videoLength: string;
    quizzesCount: number;
    modules: CourseModule[];
}

const mockPromoData: CoursePromoInterface = {
    title: `Workshop "Web Development in C#: CQRS, Clean Architecture"`,
    logo: "/images/cards/1.png",
    authorName: "Andrey Kuzmin",
    summary: `Этот воркшоп научит вас создавать поддерживаемые веб-приложения, используя передовые
        практики и архитектурные подходы. Вы освоите принципы CQRS и чистой архитектуры,
        работу с ASP.NET Core, EF Core и MediatR. Воркшоп охватывает аутентификацию,
        авторизацию, обработку исключений и внедрение зависимостей. Вы научитесь структурировать код,
        применять паттерны проектирования и работать с современными инструментами разработки.`,

    recommendedWorkload: "4-5 hours per week",
    level: "Beginner",
    language: "English",
    students: 243,
    rating: 4.8,
    whatYouWillLearn: [
        "Learn CQRS principles and clean architecture",
        "Build scalable web applications with ASP.NET Core",
        "Use Entity Framework Core for database management",
        "Implement authentication & authorization",
        "Create middleware and policies",
        "Use MediatR for handling application logic",
        "Manage exceptions with robust error handling",
        "Simplify object mapping using AutoMapper",
        "Apply dependency injection principles",
        "Build APIs with controllers and routing",
    ],
    about: `This workshop will teach you how to build maintainable web applications using cutting-edge technologies and architectural approaches. You will master CQRS, ASP.NET Core, EF Core, and MediatR. The course covers authentication, authorization, error handling, and dependency injection. Ideal for developers looking to level up in C#.`,
    whomThisCourseIsFor: `This workshop is intended for C# developers looking to deepen their knowledge of modern web app architecture. It's also perfect for those who already have API experience and want to take their skills to the next level in building professional-grade solutions.`,
    initialRequirements: `1. Confident in C# (OOP, LINQ, async/await)
2. Basic understanding of ASP.NET Core and REST APIs
3. Familiarity with Entity Framework Core
4. Experience with dependency injection
5. Basic idea of layered architecture

Not suitable if:
- You have zero practice creating APIs
- You have no knowledge of application design principles
- You have no experience with web services
- Very poor understanding of OOP`,
    howWillYouLearn: [
        "Воркшоп состоит из предзаписанных скринкастов, демонстрирующих пошаговую разработку веб-сервиса на C# с применением CQRS и чистой архитектуры",
        "После каждого ключевого раздела вас ждет техническое задание. Эти задания являются обязательными этапами, без выполнения которых невозможно продолжить воркшоп",
        "Автор лично проверяет выполненные задания и предоставляет подробный фидбек, указывая на сильные стороны и области для улучшения.",
        "На протяжении всего пути вы будете разрабатывать реальный проект, применяя полученные знания на практике.",
    ],
    price: "6.5 TON",
    lessonsCount: 77,
    videoLength: "5 hours 35 minutes",
    quizzesCount: 10,
    modules: [
        {
            moduleTitle: "Making Project: Tic-Tac-Toe",
            lessons: [
                {
                    id: "m1-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m1-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m1-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m1-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m1-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
                {
                    id: "m1-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m1-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m1-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m1-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m1-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
            ],
        },
        {
            moduleTitle: "Working with FastApi",
            lessons: [
                {
                    id: "m2-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m2-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m2-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m2-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m2-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
                {
                    id: "m2-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m2-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m2-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m2-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m2-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
            ],
        },
        {
            moduleTitle: "CSS Fundamentals",
            lessons: [
                {
                    id: "m3-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m3-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m3-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m3-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m3-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
                {
                    id: "m3-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m3-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m3-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m3-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m3-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
            ],
        },
        {
            moduleTitle: "React for Beginners",
            lessons: [
                {
                    id: "m4-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m4-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m4-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m4-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m4-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
                {
                    id: "m4-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m4-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m4-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m4-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m4-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
            ],
        },
        {
            moduleTitle: "JavaScript Basics",
            lessons: [
                {
                    id: "m5-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m5-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m5-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m5-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m5-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
                {
                    id: "m5-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m5-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m5-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m5-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m5-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
            ],
        },
        {
            moduleTitle:
                "JavaScript Basics awdawd wad awda wd adw awd awd awd aw",
            lessons: [
                {
                    id: "m6-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m6-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m6-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m6-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m6-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
                {
                    id: "m6-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                },
                { id: "m6-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
                {
                    id: "m6-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                },
                {
                    id: "m6-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                },
                {
                    id: "m6-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                },
            ],
        },
    ],
};

export async function fetchCoursePromo(): Promise<CoursePromoInterface> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return mockPromoData;
  }