import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LevelIndicator } from "@/components/coursePromo/levelIndicator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";


// Example course object with the required fields
// const course = {
//     title: `Workshop "Web Development in C#: CQRS, Clean Architecture"`,
//     logo: "/images/cards/1.png",
//     authorName: "Andrey Kuzmin",
//     summary:
//         `Этот воркшоп научит вас создавать поддерживаемые веб-приложения, используя передовые
//         практики и архитектурные подходы. Вы освоите принципы CQRS и чистой архитектуры,
//         работу с ASP.NET Core, EF Core и MediatR. Воркшоп охватывает аутентификацию,
//         авторизацию, обработку исключений и внедрение зависимостей. Вы научитесь структурировать код,
//         применять паттерны проектирования и работать с современными инструментами разработки.`,

//     recommendedWorkload: "4-5 hours per week",
//     level: "Beginner",
//     language: "English",
//     students: 243,
//     rating: 4.8,
//     whatYouWillLearn: [
//         "Learn CQRS principles and clean architecture",
//         "Build scalable web applications with ASP.NET Core",
//         "Use Entity Framework Core for database management",
//         "Implement authentication & authorization",
//         "Create middleware and policies",
//         "Use MediatR for handling application logic",
//         "Manage exceptions with robust error handling",
//         "Simplify object mapping using AutoMapper",
//         "Apply dependency injection principles",
//         "Build APIs with controllers and routing",
//     ],
//     about: `This workshop will teach you how to build maintainable web applications using cutting-edge technologies and architectural approaches. You will master CQRS, ASP.NET Core, EF Core, and MediatR. The course covers authentication, authorization, error handling, and dependency injection. Ideal for developers looking to level up in C#.`,
//     whomThisCourseIsFor: `This workshop is intended for C# developers looking to deepen their knowledge of modern web app architecture. It's also perfect for those who already have API experience and want to take their skills to the next level in building professional-grade solutions.`,
//     initialRequirements: `1. Confident in C# (OOP, LINQ, async/await)
// 2. Basic understanding of ASP.NET Core and REST APIs
// 3. Familiarity with Entity Framework Core
// 4. Experience with dependency injection
// 5. Basic idea of layered architecture

// Not suitable if:
// - You have zero practice creating APIs
// - You have no knowledge of application design principles
// - You have no experience with web services
// - Very poor understanding of OOP`,
//     howWillYouLearn: [
//     "Воркшоп состоит из предзаписанных скринкастов, демонстрирующих пошаговую разработку веб-сервиса на C# с применением CQRS и чистой архитектуры",
//     "После каждого ключевого раздела вас ждет техническое задание. Эти задания являются обязательными этапами, без выполнения которых невозможно продолжить воркшоп",
//     "Автор лично проверяет выполненные задания и предоставляет подробный фидбек, указывая на сильные стороны и области для улучшения.",
//     "На протяжении всего пути вы будете разрабатывать реальный проект, применяя полученные знания на практике."
//     ],
//     price: "6.5 TON",
//     lessonsCount: 77,
//     videoLength: "5 hours 35 minutes",
//     quizzesCount: 10,
//     modules: [
//         {
//             moduleTitle: "Making Project: Tic-Tac-Toe",
//             lessons: [
//                 { id: "m1-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m1-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m1-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m1-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m1-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//                 { id: "m1-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m1-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m1-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m1-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m1-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//             ]
//         },
//         {
//             moduleTitle: "Working with FastApi",
//             lessons: [
//                 { id: "m2-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m2-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m2-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m2-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m2-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//                 { id: "m2-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m2-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m2-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m2-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m2-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//             ]
//         },
//         {
//             moduleTitle: "CSS Fundamentals",
//             lessons: [
//                 { id: "m3-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m3-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m3-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m3-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m3-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//                 { id: "m3-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m3-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m3-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m3-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m3-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//             ]
//         },
//         {
//             moduleTitle: "React for Beginners",
//             lessons: [
//                 { id: "m4-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m4-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m4-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m4-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m4-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//                 { id: "m4-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m4-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m4-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m4-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m4-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//             ]
//         },
//         {
//             moduleTitle: "JavaScript Basics",
//             lessons: [
//                 { id: "m5-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m5-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m5-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m5-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m5-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//                 { id: "m5-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m5-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m5-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m5-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m5-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//             ]
//         },
//         {
//             moduleTitle: "JavaScript Basics awdawd wad awda wd adw awd awd awd aw",
//             lessons: [
//                 { id: "m6-l1", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m6-l2", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m6-l3", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m6-l4", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m6-l5", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//                 { id: "m6-l6", title: "Introduction to Web Development", videoId: "v2A-aM-qICA" },
//                 { id: "m6-l7", title: "HTML Basics", videoId: "dQw4w9WgXcQ" },
//                 { id: "m6-l8", title: "CSS Fundamentals", videoId: "tgbNymZ7vqY" },
//                 { id: "m6-l9", title: "JavaScript Basics", videoId: "3JluqTojuME" },
//                 { id: "m6-l10", title: "React for Beginners", videoId: "Ke90Tje7VS0" },
//             ]
//         },
//     ],
    
// };

interface courseDataInterface {
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

let courseData: courseDataInterface

      const dataString = sessionStorage.getItem("promoData");
      if (dataString) {
        try {
          courseData = JSON.parse(dataString);
        } catch (err) {
          console.error("Failed to parse courseData from sessionStorage", err);
        }
      }

export function CoursePromoSample() {
    

  return (
    <div className="w-full bg-white rounded-[2vw] sm:pt-4 md:pt-6 pb-10">
        {/* 1. Background Image */}
        <div className="relative mx-auto h-[120px] sm:h-[160px] md:h-[200px] w-full sm:w-[96%] rounded-[2vw] overflow-hidden">
            <img
              className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 scale-125 blur-[10px]"
              src={courseData.logo}
              alt="Course Background"
            />
        </div>

        {/* 2. Course Info */}
        <div className="w-[92%] sm:w-[94%] mx-auto break-words">
            <div className="flex -mt-[43px] sm:-mt-[52px] md:-mt-[58px] relative flex-col sm:flex-row items-start pl-[15px] sm:pl-[20px] md:pl-[25px] lg:pl-[35px]">
                {/* Course Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white-900 shadow-md rounded-xl overflow-hidden border border-[3px]">
                    <img
                    src={courseData.logo}
                    alt="Course"
                    className="w-full h-full object-cover"
                    />
                    
                </div>
            </div>

            {/* Course Description, Stats, etc. */}
            <div className="">
                <div className="bg-white mt-2">
                    {/* Course Text Info */}
                    <div className="mt-3 sm:mt-0">
                        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                            {courseData.title}
                        </h1>
                        <span className="text-xs sm:text-sm text-gray-500 mt-1 ">
                            Author:{" "}
                            <span className="hover:underline cursor-pointer">
                            {/* {courseData.authorName} */}
                            Anton Chigur
                            </span>
                        </span>
                    </div>
                    <p className=" mt-4 leading-relaxed">
                        {courseData.summary}
                    </p>

                    {/* stats area */}
                    <div className="flex flex-col sm:flex-row mt-4 space-y-2 sm:space-y-0 sm:space-x-10 text-sm">
                        <div>
                            {/* <LevelIndicator level={courseData.level} /> */}
                            <LevelIndicator level={courseData.level} />
                        </div>
                        {/* <div>
                            <span className="font-semibold">Students: </span><span>{courseData.students}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Language:</span> {courseData.language}
                        </div>
                        <div>
                            <span className="font-semibold">Rating:</span> {courseData.rating}
                        </div> */}
                        <div>
                            <span className="font-semibold">Students: </span><span>4566</span>
                        </div>
                        <div>
                            <span className="font-semibold">Language: </span>{courseData.language}
                        </div>
                        <div>
                            <span className="font-semibold">Rating: </span>4
                        </div>
                    </div>
                    <Separator className="mt-2 mb-3" />
                </div>
                <div className="flex justify-between mt-4">
                    <div className="md:pl-5 md:w-[60%] space-y-7">
                        {/* What You Will Learn */}
                        <div>
                            <h2 className="text-2xl font-normal">
                                What you will learn
                            </h2>
                            <p className="mt-2 space-y-2">
                                {courseData.whatYouWillLearn}
                            </p>
                        </div>


                        {/* About this course */}
                        <div>
                            <h2 className="text-2xl font-normal">
                                About this course
                            </h2>
                            <p className="mt-2 leading-relaxed whitespace-pre-wrap">
                                {courseData.about}
                            </p>
                        </div>


                        {/* Initial requirements */}
                        <div>
                            <h2 className="text-2xl font-normal">
                                Initial requirements
                            </h2>
                            <p className="mt-2 leading-relaxed whitespace-pre-wrap">
                                {courseData.initialRequirements}
                            </p>
                        </div>


                        {/* How you will learn */}
                        {/* <div>
                            <h2 className="text-2xl font-normal">
                                How you will learn
                            </h2>
                            <span className="mt-2 space-y-2">
                                <p>{courseData.whatYouWillLearn}</p>
                            </span>
                        </div> */}

                        {/* Course content */}
                        <div id="course-content">
                            <h2 className="text-2xl font-normal">Course content</h2>
                            <Accordion type="multiple" defaultValue={courseData.modules.map((_, i) => `module-${i}`)} className="mt-4 space-y-4">
                                {courseData.modules.map((module, moduleIndex) => (
                                    <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`} className="border-b">
                                        <AccordionTrigger className="text-lg pb-3 pt-0">{module.moduleTitle}</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="mt-1 space-y-2">
                                                {module.lessons.map((lesson, lessonIndex) => (
                                                    <li key={lessonIndex + 1} className="text-base flex space-x-2">
                                                        <p>{lessonIndex + 1}.</p> 
                                                        <p>{lesson.title}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full md:w-[35%] md:sticky md:top-20 h-fit bg-white p-2 md:p-6 
                fixed bottom-0 left-0 md:relative shadow-[0px_-4px_10px_rgba(0,0,0,0.12)] md:shadow-none"
     style={{ maxWidth: "100vw", zIndex: "50" }}>

                        <div className="w-[90%] sm:w-[60%] md:w-full mx-auto">
                            <div className="w-full">
                                <h3 className="text-xl font-bold text-gray-800">{courseData.price} TON</h3>

                                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-2 md:mt-4 font-bold">
                                    Buy
                                </Button>

                                <Separator className="my-2 md:my-4" />

                                <div className="hidden md:block">
                                    <h3 className="text-md font-semibold text-gray-800">
                                        You can learn right away
                                    </h3>
                                    <p className="text-sm text-gray-600">Buy from the company</p>
                                    <p className="text-sm text-gray-600">Buy as a gift</p>
                                    <Separator className="my-4" />
                                </div>


                                {/* Course Includes */}
                                <div className="bg-gray-50 px-2 md:p-4 rounded-lg">
                                    <h4 className="text-md font-semibold text-gray-800 hidden md:block">
                                    This course includes
                                    </h4>
                                    <p className="text-sm text-gray-700 mt-1">
                                    <strong>{courseData.modules.reduce((totalLessons, module) => totalLessons + module.lessons.length, 0)}</strong> lessons
                                    </p>
                                    {/* <p className="text-sm text-gray-700">
                                    <strong>50 mins</strong> of video
                                    </p> */}
                                    <p className="text-sm text-gray-700">
                                    <strong>{courseData.modules.length}</strong> quizzes
                                    </p>
                                    <a
                                    href="#course-content"
                                    className="text-blue-600 hover:underline mt-2 block text-sm"
                                    >
                                    View course content
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
