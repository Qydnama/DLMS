import { createContext } from "react";
import { CourseData, CourseAction } from "@/context/courseBuilderProvider"; // Импортируйте ваши типы, если они используются

export const CourseBuilderContext = createContext<{
  state: CourseData;
  dispatch: React.Dispatch<CourseAction>;
} | null>(null);
