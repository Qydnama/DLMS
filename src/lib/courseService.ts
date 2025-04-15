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
        quiz: {
            questions: {
                questionText: string;
                options: string[];
                correctAnswer: number;
            }[];
        };
        lessons: {
            title: string;
            videoUrl: string;
        }[];
    }[];
}

const mockCourseData: CourseDataInterface = {
    logo: "/images/courseLogo.png",
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
            moduleTitle: "Getting Started with Front-end",
            quiz: {
                questions: [
                    {
                        questionText:
                            "Which tag is used to include JavaScript in HTML?",
                        options: ["<js>", "<script>", "<javascript>", "<code>"],
                        correctAnswer: 1,
                    },
                    {
                        questionText: "CSS stands for?",
                        options: [
                            "Cascading Style Sheets",
                            "Colorful Style Rules",
                            "Computer Style System",
                            "Coding Syntax Sheets",
                        ],
                        correctAnswer: 0,
                    },
                ],
            },
            lessons: [
                {
                    title: "HTML Basics",
                    videoUrl: "https://youtube.com/abc123",
                },
                {
                    title: "CSS Fundamentals",
                    videoUrl: "https://youtube.com/def456",
                },
                {
                    title: "JavaScript Introduction",
                    videoUrl: "https://youtube.com/ghi789",
                },
            ],
        },
        {
            moduleTitle: "Back-end Essentials",
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
            lessons: [
                {
                    title: "Node.js Overview",
                    videoUrl: "https://youtube.com/nodejs01",
                },
                {
                    title: "Express.js Basics",
                    videoUrl: "https://youtube.com/nodejs02",
                },
            ],
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
