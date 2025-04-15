import React, { useEffect, useState } from "react";
import { z } from "zod";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, CirclePlus } from "lucide-react";

// ============= 1) Zod-схема для вопросов квиза ============
const singleQuizSchema = z.object({
  // Убрали title, так как «Module Test i»
  questions: z.array(
    z.object({
      questionText: z.string().min(5, "Question text must be at least 5 characters"),
      options: z
        .array(z.string().min(1, "Option cannot be empty"))
        .min(2, "Each question must have at least 2 options"),
      correctAnswer: z.number().gte(0, "A correct answer must be selected"),
    })
  ).min(1, "At least one question is required"),
});

// ============= 2) StepThreeSchema = проверка только тех модулей, где hasQuiz = true ============
const stepThreeSchema = z.object({
  modules: z.array(
    z.object({
      hasQuiz: z.boolean(),
      // quiz будет optional, но если hasQuiz=true — надо проверить
      quiz: singleQuizSchema.optional(),
    })
  ),
});


// Тип для одного вопроса
interface QuizQuestion {
  questionText: string;
  options: string[];
  correctAnswer: number;
}

// Тип для quiz (без title)
interface ModuleQuiz {
  questions: QuizQuestion[];
}

interface ModuleData {
  moduleTitle: string;
  quiz: ModuleQuiz; 
  lessons: { title: string; videoUrl: string }[];
}

interface CourseDataType {
    logo: string;
    title: string;
    summary: string;
    recommendedWorkload: string;
    whatYouWillLearn: string;
    about: string;
    whatYouWillGain: string;
    initialRequirements: string;
    level: string;
    language: string;

    price: number;
    modules: ModuleData[];
    certificate: {
        image: string;       
};
}

interface StepThreeProps {
  courseData: CourseDataType;
  setCourseData: React.Dispatch<React.SetStateAction<CourseDataType>>;
  setValidationStatus: React.Dispatch<
    React.SetStateAction<{ stepOne: boolean; stepTwo: boolean; stepThree: boolean, stepFour: boolean }>
  >;
  showErrors: boolean;
  // Управление вкладками среди hasQuiz-модулей
  activeQuizIndex: number;
  setActiveQuizIndex: (idx: number) => void;
}

export function StepThree({
  courseData,
  setCourseData,
  setValidationStatus,
  showErrors,
  activeQuizIndex,
  setActiveQuizIndex,
}: StepThreeProps) {
  // Храним ошибки в виде errorMessages[moduleIndex] -> { questions: ... }
  const [errorMessages, setErrorMessages] = useState<
    Record<number, { questions?: Record<number, { questionText?: string; options?: string[]; correctAnswer?: string }> }>
  >({});

  // Выбираем модули, где hasQuiz=true
  const quizModules = courseData.modules;

  // Валидация
  useEffect(() => {
    if (quizModules.length === 0) {
      // Нет ни одного модуля с hasQuiz => считаем stepThree пройденным
      setValidationStatus((prev) => ({ ...prev, stepThree: true }));
      setErrorMessages({});
      return;
    }

    const validate = () => {
      // Подготовим объект для Zod, где для hasQuiz=false замещаем quiz на dummy
      const partial = {
        modules: courseData.modules.map((mod) => {
          return {
            hasQuiz: true,
            quiz: mod.quiz, 
          };
        }),
      };

      const result = stepThreeSchema.safeParse(partial);

      if (!result.success) {
        // Собираем ошибки
        const tempErrors: Record<number, { questions?: Record<number, { questionText?: string; options?: string[]; correctAnswer?: string }> }> = {};

        for (const issue of result.error.issues) {
          // path может быть ["modules", moduleIndex, "quiz", "questions", qIndex, ...]
          if (issue.path[0] === "modules") {
            const moduleIndex = Number(issue.path[1]);
            if (Number.isNaN(moduleIndex)) continue;

            // quiz-level errors
            if (!tempErrors[moduleIndex]) {
              tempErrors[moduleIndex] = {};
            }
            if (issue.path[2] === "quiz") {
              // ["modules", mIdx, "quiz", "questions", qIdx, ...]
              if (issue.path[3] === "questions") {
                const qIdx = Number(issue.path[4]);
                if (!tempErrors[moduleIndex].questions) {
                  tempErrors[moduleIndex].questions = {};
                }
                if (!tempErrors[moduleIndex].questions![qIdx]) {
                  tempErrors[moduleIndex].questions![qIdx] = {};
                }

                // field = issue.path[5] => "questionText", "options", "correctAnswer"
                if (issue.path[5] === "questionText") {
                  tempErrors[moduleIndex].questions![qIdx].questionText = issue.message;
                } else if (issue.path[5] === "options") {
                  const optIndex = Number(issue.path[6]);
                  if (!tempErrors[moduleIndex].questions![qIdx].options) {
                    tempErrors[moduleIndex].questions![qIdx].options = [];
                  }
                  tempErrors[moduleIndex].questions![qIdx].options![optIndex] = issue.message;
                } else if (issue.path[5] === "correctAnswer") {
                  tempErrors[moduleIndex].questions![qIdx].correctAnswer = issue.message;
                }
              }
            }
          }
        }

        setErrorMessages(tempErrors);
        setValidationStatus((prev) => ({ ...prev, stepThree: false }));
      } else {
        setErrorMessages({});
        setValidationStatus((prev) => ({ ...prev, stepThree: true }));
      }
    };

    validate();
  }, [courseData, quizModules, setValidationStatus]);

  // Если нет hasQuiz-модулей
  if (quizModules.length === 0) {
    return (
      <div className="bg-gray-50 p-4 rounded">
        <p className="text-sm text-gray-500">No quizzes available. Enable quizzes in Step 2.</p>
      </div>
    );
  }

// Получаем «список» индексов всех модулей, так как hasQuiz убран
const moduleIndexesWithQuiz = courseData.modules.map((_, i) => i);

  // Текущий «настоящий» moduleIndex
  const currentModuleIndex = moduleIndexesWithQuiz[activeQuizIndex];
  // Мог бы быть undefined, если что-то не так, но по логике — не должен
  const mod = courseData.modules[currentModuleIndex];
  
  // quiz может быть undefined, если мы не создали
  // => создаём на лету, чтобы не упасть
  if (!mod.quiz) {
    // Создаём пустое quiz
    mod.quiz = { questions: [] };
  }



  // Методы редактирования
  const handleAddQuestion = () => {
    const updated = { ...courseData };
    const quiz = updated.modules[currentModuleIndex].quiz;
    if (!quiz) {
      // Создаём пустой
      updated.modules[currentModuleIndex].quiz = { questions: [] };
    }
    updated.modules[currentModuleIndex].quiz!.questions.push({
      questionText: "",
      options: ["", "", ""],
      correctAnswer: 0,
    });
    setCourseData(updated);
  };

  const handleRemoveQuestion = (qIndex: number) => {
    const updated = { ...courseData };
    const quiz = updated.modules[currentModuleIndex].quiz!;
    quiz.questions = quiz.questions.filter((_, i) => i !== qIndex);
    setCourseData(updated);
  };

  const handleQuestionTextChange = (qIndex: number, text: string) => {
    const updated = { ...courseData };
    const quiz = updated.modules[currentModuleIndex].quiz!;
    quiz.questions[qIndex].questionText = text;
    setCourseData(updated);
  };

  const handleCorrectAnswerChange = (qIndex: number, optIndex: number) => {
    const updated = { ...courseData };
    updated.modules[currentModuleIndex].quiz!.questions[qIndex].correctAnswer = optIndex;
    setCourseData(updated);
  };

  const handleOptionChange = (qIndex: number, optIndex: number, value: string) => {
    const updated = { ...courseData };
    updated.modules[currentModuleIndex].quiz!.questions[qIndex].options[optIndex] = value;
    setCourseData(updated);
  };

  const handleRemoveOption = (qIndex: number, optIndex: number) => {
    const updated = { ...courseData };
    const question = updated.modules[currentModuleIndex].quiz!.questions[qIndex];
    question.options.splice(optIndex, 1);
    if (question.correctAnswer === optIndex) {
      question.correctAnswer = -1;
    } else if (question.correctAnswer > optIndex) {
      question.correctAnswer -= 1;
    }
    setCourseData(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Quiz Builder</h2>
      </div>

      {/* Табы = модули, у которых hasQuiz */}
      <Tabs
        defaultValue="quiz-0"
        value={`quiz-${activeQuizIndex}`}
        onValueChange={(val) => {
          setActiveQuizIndex(parseInt(val.split("-")[1], 10));
        }}
      >
        <TabsList className="py-6 rounded-t-2xl bg-white w-full flex justify-start">
          <ScrollArea className="">
            <div className="flex space-x-0">
              {moduleIndexesWithQuiz.map((mIndex, tabIndex) => {
            
                const hasErr = !!errorMessages[mIndex];
                // Вместо quiz title => "Module Test {tabIndex+1}"
                return (
                  <div key={mIndex} className="flex items-center border rounded-t-2xl">
                    <TabsTrigger
                      className={`rounded-t-2xl transition-colors duration-200 px-3 py-1 ${
                        hasErr && showErrors ? "text-red-500 border-red-500" : "text-gray-900 border-gray-300"
                      }`}
                      value={`quiz-${tabIndex}`}
                    >
                      Module Test {tabIndex + 1}
                    </TabsTrigger>
                  </div>
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsList>

        {moduleIndexesWithQuiz.map((mIndex, tabIndex) => {
          const moduleErr = errorMessages[mIndex] || {};
          const quiz = courseData.modules[mIndex].quiz;
          if (!quiz) {
            // если quiz всё ещё undefined, создаём пустой
            courseData.modules[mIndex].quiz = { questions: [] };
          }
          const qz = courseData.modules[mIndex].quiz!;
          
          return (
            <TabsContent key={mIndex} value={`quiz-${tabIndex}`}>
              <div className="space-y-4">
                {/* Нет отдельного поля "quiz title", 
                    используем "Module Test N" */}
                <h3 className="text-lg font-medium">Module Test {tabIndex + 1}</h3>

                {/* QUESTIONS */}
                {qz.questions.map((question, qIndex) => {
                  const qErr = moduleErr.questions?.[qIndex] || {};
                  return (
                    <div key={qIndex} className="p-4 border rounded-xl bg-gray-50 space-y-3 relative">
                      {/* Удалить вопрос */}
                      {qz.questions.length > 5 && (
                        <Button
                          onClick={() => handleRemoveQuestion(qIndex)}
                          className="w-6 h-6 p-1 absolute top-3 right-3 bg-gray-50 text-gray-500 hover:text-red-500 hover:bg-gray-50 transition"
                          type="button"
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      )}

                      <div>
                        <Label>Question {qIndex + 1}</Label>
                      </div>

                      {/* questionText */}
                      <div className="space-y-1">
                        <Textarea
                          value={question.questionText}
                          onChange={(e) => handleQuestionTextChange(qIndex, e.target.value)}
                          placeholder="Enter question text"
                          className="rounded-2xl"
                          maxLength={512}
                        />
                        <div className="flex justify-between">
                          <div>
                            {showErrors && qErr.questionText && (
                              <p className="text-red-500 text-xs">{qErr.questionText}</p>
                            )}
                          </div>
                          <div className="text-gray-500 text-xs mt-1 text-right">
                            <span>{question.questionText.length}/512</span>
                          </div>
                        </div>
                      </div>

                      {/* Options */}
                      {question.options.map((optVal, optIndex) => {
                        const optErr = qErr.options?.[optIndex];
                        return (
                          <div key={optIndex}>
                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name={`correct-answer-${qIndex}`}
                                checked={question.correctAnswer === optIndex}
                                onChange={() => handleCorrectAnswerChange(qIndex, optIndex)}
                                className="mr-1"
                              />
                              <Label className="block text-sm font-medium">
                                {String.fromCharCode(97 + optIndex)}.
                              </Label>
                              <Input
                                value={optVal}
                                onChange={(e) => handleOptionChange(qIndex, optIndex, e.target.value)}
                                placeholder={`Option ${String.fromCharCode(65 + optIndex)}`}
                                maxLength={256}
                                className="rounded-2xl"
                              />
                              {question.options.length > 2 && (
                                <Button
                                  onClick={() => handleRemoveOption(qIndex, optIndex)}
                                  type="button"
                                  variant="ghost"
                                  className="p-1 text-gray-500 hover:text-red-500"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                            <div>
                              {showErrors && optErr && (
                                <p className="text-red-500 text-xs">{optErr}</p>
                              )}
                            </div>
                          </div>
                        );
                      })}

                      {/* Add Option */}
                      {question.options.length < 7 && (
                        <div>
                          <input
                            type="radio"
                            name={`correct-answer-${qIndex}`}
                            checked={false}
                            className="mr-1 ml-[0.1rem]"
                          />
                          <Button
                            type="button"
                            variant="link"
                            onClick={() => {
                              const updated = { ...courseData };
                              updated.modules[mIndex].quiz!.questions[qIndex].options.push("");
                              setCourseData(updated);
                            }}
                            className="pt-0 pb-2 mt-2 text-gray-500"
                          >
                            Add Option
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Add Question */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddQuestion}
                  className="p-2.5 mt-4 gap-1.5 flex items-center border-blue-500 text-blue-500 
                    hover:border-blue-700 hover:text-blue-700 transition-colors duration-200 rounded-2xl"
                  disabled={qz.questions.length >= 20}
                >
                  <CirclePlus style={{ width: "20px", height: "20px" }} />
                  <span className="font-semibold">Add Question</span>
                </Button>

                <div className="ml-2 flex justify-between text-gray-500 text-xs mt-1">
                  <span>Don't forget to choose the right answers!</span>
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
