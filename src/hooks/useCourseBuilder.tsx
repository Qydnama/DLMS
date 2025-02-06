// useCourseBuilder.ts
import { useContext } from "react";
import { CourseBuilderContext } from "@/context/courseBuilderContext";

export const useCourseBuilder = () => {
  const context = useContext(CourseBuilderContext);
  if (!context) {
    throw new Error("useCourseBuilder must be used within a CourseBuilderProvider");
  }
  return context;
};
