export interface QuestionInterface {
    id: number;
    text: string;
    options: string[];
    correctIndex: number;
}

export interface QuizInterface {
    questions: QuestionInterface[];
}

export interface LessonInterface {
    id: string;
    title: string;
    videoId: string;
    thumbnail: string;
}

/* Helpful enums */
export enum CourseLevel {
    Beginner = "beginner",
    Intermediate = "intermediate",
    Advanced = "advanced",
}

export enum CourseLanguage {
    En = "en",
    Ru = "ru",
    Kz = "kz",
}

export interface ModuleInterface {
    id: string;
    title: string;
    completed: boolean;
    score?: number; // optional
    lessons: LessonInterface[];
    quiz: QuizInterface;
}

export interface CertificateInterface {
    image: string;
}

export interface CourseDescriptionInterface {
    summary: string;
    workload: string; // e.g. “4–5h / week”
    learn: string; // “What you’ll learn” bullet points
    about: string; // long text
    gains: string; // long text
    requirements: string; // multi‑line text
}

/* ────────────────────────────────
     3. Course root
     ──────────────────────────────── */

export interface CourseDataInterface {
    id: string;

    /* Presentation */
    title: string;
    logo: string;
    certificate: CertificateInterface;

    /* Meta */
    priceTon: number;
    level: CourseLevel;
    language: CourseLanguage;

    description: CourseDescriptionInterface;

    modules: ModuleInterface[];
}

/* ────────────────────────────────
     4. “Database‑ish” shape
     ──────────────────────────────── */

/**
 * One course payload ‑ everything flattened into look‑up maps.
 * Much easier to PATCH a single entity, memoise selectors, share
 * between React Query / SWR cache & global state, etc.
 */
// export interface CourseDataBundle {
//     course: Course;

//     modules: Record<string, Module>;
//     lessons: Record<string, Lesson>;
//     quizzes: Record<string, Quiz>;
//     questions: Record<string, Question>;
// }

export interface CourseDataInterface2 {
    id: string;
    logo: string;
    title: string;
    summary: string;
    recommendedWorkload: string;
    whatYouWillLearn: string;
    about: string;
    whatYouWillGain: string;
    initialRequirements: string;
    price: number;
    level: string;
    language: string;
    certificate: {
        image: string;
    };
    modules: {
        title: string;
        completed: boolean;
        score: number | undefined;
        id: string;
        quiz: {
            questions: {
                text: string;
                options: string[];
                correctIndex: number;
            }[];
        };
        lessons: {
            id: string;
            title: string;
            videoId: string;
            thumbnail: string;
        }[];
    }[];
}

const mockCourseData: CourseDataInterface = {
    id: "1",
    title: "Fundamentals of Full-stack Web Development",
    logo: "/images/cards/1.png",
    certificate: {
        image: "/images/sampleCertificate.png",
    },
    priceTon: 79,
    level: CourseLevel.Advanced,
    language: CourseLanguage.En,
    description: {
        summary: `This course will teach you the basics of front-end and back-end 
      web development, covering HTML, CSS, JavaScript, Node.js and more.`,
        workload: "4-5 hours per week",
        learn: `You'll gain the core skills needed to build and deploy 
      modern web applications from scratch.`,
        about: `In this course, we dive into the essential technologies used in 
      full-stack web development. From structuring your project to deploying on a 
      cloud platform, each step is covered in a practical manner.`,
        gains: `Strong foundational knowledge in building dynamic web 
      applications, an understanding of code organization, best practices, 
      and real-world experience with toolchains.`,
        requirements: `1. Basic understanding of programming concepts
  2. Familiarity with JavaScript recommended
  3. No prior web development experience required
  4. Desire to build real projects from scratch
  `,
    },
    modules: [
        {
            id: "1",
            title: "Making Project: Tic-Tac-Toe",
            completed: true,
            score: 8,
            lessons: [
                {
                    id: "m1-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m1-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "They is students.",
                            "We is students.",
                            "They are students.",
                            "Are they students?"
                        ],
                        correctIndex: 2
                    },
                    {
                        id: 2,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "She are happy.",
                            "She is happy.",
                            "She am happy.",
                            "Are she happy?"
                        ],
                        correctIndex: 1
                    },
                    {
                        id: 3,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "She are happy.",
                            "She is happy.",
                            "She am happy.",
                            "Are she happy?"
                        ],
                        correctIndex: 1
                    },
                    {
                        id: 4,
                        text: "Next.js Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals",
                        options: [
                            "She are happy. Next.js Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals",
                            "She is happy. Next.js Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals Fundamentals",
                            "She am happy.",
                            "Are she happy?"
                        ],
                        correctIndex: 1
                    },
                    {
                        id: 5,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "She are happy.",
                            "She is happy.",
                            "She am happy.",
                            "Are she happy?"
                        ],
                        correctIndex: 1
                    },
                    {
                        id: 6,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "She are happy.",
                            "She is happy.",
                            "She am happy.",
                            "Are she happy?"
                        ],
                        correctIndex: 1
                    },
                    {
                        id: 7,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "She are happy.",
                            "She is happy.",
                            "She am happy.",
                            "Are she happy?"
                        ],
                        correctIndex: 1
                    },
                    {
                        id: 8,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "She are happy.",
                            "She is happy.",
                            "She am happy.",
                            "Are she happy?"
                        ],
                        correctIndex: 1
                    },
                    {
                        id: 9,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "She are happy.",
                            "She is happy.",
                            "She am happy.",
                            "Are she happy?"
                        ],
                        correctIndex: 1
                    },
                    {
                        id: 10,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "She are happy.",
                            "She is happy.",
                            "She am happy.",
                            "Are she happy?"
                        ],
                        correctIndex: 1
                    }
                ],
            },
        },
        {
            title: "Working with FastApi",
            id: "2",
            completed: true,
            score: 5,
            lessons: [
                {
                    id: "m2-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m2-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "They is students.",
                            "We is students.",
                            "They are students.",
                            "Are they students?"
                        ],
                        correctIndex: 2
                    },
                ],
            },
        },
        {
            title: "CSS Fundamentals",
            id: "3",
            completed: false,
            score: undefined,
            lessons: [
                {
                    id: "m3-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m3-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "They is students.",
                            "We is students.",
                            "They are students.",
                            "Are they students?"
                        ],
                        correctIndex: 2
                    },
                ],
            },
        },
        {
            title: "React for Beginners",
            id: "4",
            completed: false,
            score: undefined,
            lessons: [
                {
                    id: "m4-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m4-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "They is students.",
                            "We is students.",
                            "They are students.",
                            "Are they students?"
                        ],
                        correctIndex: 2
                    },
                ],
            },
        },
        {
            title: "JavaScript Basics",
            id: "5",
            completed: false,
            score: undefined,
            lessons: [
                {
                    id: "m5-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m5-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "They is students.",
                            "We is students.",
                            "They are students.",
                            "Are they students?"
                        ],
                        correctIndex: 2
                    },
                ],
            },
        },
        {
            title: "JavaScript Basics awdawd wad awda wd adw awd awd awd aw",
            completed: false,
            score: undefined,
            id: "5",
            lessons: [
                {
                    id: "m6-l1",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l2",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l3",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l4",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l5",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l6",
                    title: "Introduction to Web Development",
                    videoId: "v2A-aM-qICA",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l7",
                    title: "HTML Basics",
                    videoId: "dQw4w9WgXcQ",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l8",
                    title: "CSS Fundamentals",
                    videoId: "tgbNymZ7vqY",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l9",
                    title: "JavaScript Basics",
                    videoId: "3JluqTojuME",
                    thumbnail: "/images/cards/1.png",
                },
                {
                    id: "m6-l10",
                    title: "React for Beginners",
                    videoId: "Ke90Tje7VS0",
                    thumbnail: "/images/cards/1.png",
                },
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "Which sentence is correct? Select the correct option.",
                        options: [
                            "They is students.",
                            "We is students.",
                            "They are students.",
                            "Are they students?"
                        ],
                        correctIndex: 2
                    },
                ],
            },
        },
    ],
};

/**
 * Simulates an API call to retrieve course data.
 * You can replace this with a real fetch(...) if needed.
 */
export async function fetchCourseData(): Promise<CourseDataInterface> {
    // Introduce an artificial delay of 1 second for demonstration
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockCourseData;
}
