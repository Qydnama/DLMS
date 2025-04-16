export interface CourseDataInterface {
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
        moduleTitle: string;
        completed: boolean;
        score: number | undefined;
        id: string;
        quiz: {
            questions: {
                questionText: string;
                options: string[];
                correctAnswer: number;
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
    logo: "/images/cards/1.png",
    title: "Fundamentals of Full-stack Web Development",
    summary: `This course will teach you the basics of front-end and back-end 
      web development, covering HTML, CSS, JavaScript, Node.js and more.`,
    recommendedWorkload: "4-5 hours per week",
    whatYouWillLearn: `You'll gain the core skills needed to build and deploy 
      modern web applications from scratch.`,
    about: `In this course, we dive into the essential technologies used in 
      full-stack web development. From structuring your project to deploying on a 
      cloud platform, each step is covered in a practical manner.`,
    whatYouWillGain: `Strong foundational knowledge in building dynamic web 
      applications, an understanding of code organization, best practices, 
      and real-world experience with toolchains.`,
    initialRequirements: `1. Basic understanding of programming concepts
  2. Familiarity with JavaScript recommended
  3. No prior web development experience required
  4. Desire to build real projects from scratch
  `,
    price: 79,
    level: "Intermediate",
    language: "English",
    certificate: {
        image: "/images/sampleCertificate.png",
    },
    modules: [
        {
            moduleTitle: "Making Project: Tic-Tac-Toe",
            completed: true,
            score: 8,
            id: "1",
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
                        questionText:
                            "Node.js uses which engine for JavaScript?",
                        options: [
                            "Chakra",
                            "SpiderMonkey",
                            "V8",
                            "Java Virtual Machine",
                        ],
                        correctAnswer: 2,
                    },
                ],
            },
        },
        {
            moduleTitle: "Working with FastApi",
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
                        questionText:
                            "Node.js uses which engine for JavaScript?",
                        options: [
                            "Chakra",
                            "SpiderMonkey",
                            "V8",
                            "Java Virtual Machine",
                        ],
                        correctAnswer: 2,
                    },
                ],
            },
        },
        {
            moduleTitle: "CSS Fundamentals",
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
                        questionText:
                            "Node.js uses which engine for JavaScript?",
                        options: [
                            "Chakra",
                            "SpiderMonkey",
                            "V8",
                            "Java Virtual Machine",
                        ],
                        correctAnswer: 2,
                    },
                ],
            },
        },
        {
            moduleTitle: "React for Beginners",
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
                        questionText:
                            "Node.js uses which engine for JavaScript?",
                        options: [
                            "Chakra",
                            "SpiderMonkey",
                            "V8",
                            "Java Virtual Machine",
                        ],
                        correctAnswer: 2,
                    },
                ],
            },
        },
        {
            moduleTitle: "JavaScript Basics",
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
                        questionText:
                            "Node.js uses which engine for JavaScript?",
                        options: [
                            "Chakra",
                            "SpiderMonkey",
                            "V8",
                            "Java Virtual Machine",
                        ],
                        correctAnswer: 2,
                    },
                ],
            },
        },
        {
            moduleTitle:
                "JavaScript Basics awdawd wad awda wd adw awd awd awd aw",
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
                        questionText:
                            "Node.js uses which engine for JavaScript?",
                        options: [
                            "Chakra",
                            "SpiderMonkey",
                            "V8",
                            "Java Virtual Machine",
                        ],
                        correctAnswer: 2,
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
