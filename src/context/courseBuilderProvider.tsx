import React, { useReducer, useEffect } from "react";
import { CourseBuilderContext } from "@/context/courseBuilderContext";

// Типы для данных курса
export interface CourseData {
  title: string;
  summary: string;
  initialRequirements: string,
  whatYouWillGain: string,
  about: string,
  whatYouWillLearn: string,
  recommendedWorkload: string,
  logo: string; // Base64 или URL изображения
  lessons: { title: string; videoUrl: string }[];
  tests: { name: string; questions: { questionText: string; answers: string[]; correctIndex: number }[] }[];
  certificateInfo: { name: string; type: string };
}

// Начальные данные
const initialCourseData: CourseData = {
  title: "",
  summary: "",
  initialRequirements: "",
  whatYouWillGain: "",
  about: "",
  whatYouWillLearn: "",
  recommendedWorkload: "",
  logo: "",
  lessons: [],
  tests: [],
  certificateInfo: { name: "", type: "" },
};

// Действия для управления состоянием
export type CourseAction =
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_SUMMARY"; payload: string }
  | { type: "SET_LOGO"; payload: string }
  | { type: "SET_RECOMMENDED_WORKLOAD"; payload: string }
  | { type: "SET_WHAT_YOU_WILL_LEARN"; payload: string }
  | { type: "SET_ABOUT"; payload: string }
  | { type: "SET_WHAT_YOU_WILL_GAIN"; payload: string }
  | { type: "SET_INITIAL_REQUIREMENTS"; payload: string }
  | { type: "ADD_LESSON"; payload: { title: string; videoUrl: string } }
  | { type: "ADD_TEST"; payload: { name: string; questions: { questionText: string; answers: string[]; correctIndex: number }[] } }
  | { type: "SET_CERTIFICATE_INFO"; payload: { name: string; type: string } }
  | { type: "LOAD_DATA"; payload: CourseData };

// Редьюсер для управления состоянием
function courseReducer(state: CourseData, action: CourseAction): CourseData {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_SUMMARY":
      return { ...state, summary: action.payload };
    case "SET_LOGO":
      return { ...state, logo: action.payload };
    case "SET_RECOMMENDED_WORKLOAD":
    return { ...state, recommendedWorkload: action.payload };
    case "SET_WHAT_YOU_WILL_LEARN":
    return { ...state, whatYouWillLearn: action.payload };
    case "SET_ABOUT":
    return { ...state, about: action.payload };
    case "SET_WHAT_YOU_WILL_GAIN":
    return { ...state, whatYouWillGain: action.payload };
    case "SET_INITIAL_REQUIREMENTS":
    return { ...state, initialRequirements: action.payload };
    case "ADD_LESSON":
      return { ...state, lessons: [...state.lessons, action.payload] };
    case "ADD_TEST":
      return { ...state, tests: [...state.tests, action.payload] };
    case "SET_CERTIFICATE_INFO":
    case "LOAD_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

// Провайдер
export const CourseBuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, initialCourseData);

  // Загружаем данные из localStorage при первой загрузке
  useEffect(() => {
    const storedData = localStorage.getItem("courseData");
    if (storedData) {
      dispatch({ type: "LOAD_DATA", payload: JSON.parse(storedData) });
    }
  }, []);

  // Сохраняем данные в localStorage при каждом их изменении
  useEffect(() => {
    localStorage.setItem("courseData", JSON.stringify(state));
  }, [state]);

  return (
    <CourseBuilderContext.Provider value={{ state, dispatch }}>
      {children}
    </CourseBuilderContext.Provider>
  );
};


