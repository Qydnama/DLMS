import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "@/layouts/mainLayout";
import { Catalog } from "@/pages/catalog/catalog";
import { Teach } from "@/pages/teach/courses";
import { CreateCourse } from "./pages/teach/createCourse";
import { CourseSidebarLayout } from "@/layouts/courseSidebarLayout";
import { Information } from "@/pages/courseAdmin/info";
import { CourseRedirect } from "@/components/courseRedirect";
import { CourseBuilderProvider } from "@/context/courseBuilderProvider";


const App: React.FC = () => {
    return (
        <CourseBuilderProvider>
            <Routes>
                <Route index element={<Navigate to="catalog" replace />} />
                <Route path="catalog" element={ <MainLayout children={<Catalog />} />} />
                
                <Route path="learn" element={ <MainLayout children={undefined}></MainLayout>} />

                <Route path="teach" element={ <Navigate to="/teach/courses" replace /> } />
                <Route path="teach/courses" >
                    <Route index element={ <MainLayout><Teach /></MainLayout> } />
                    <Route path="new" element={ <MainLayout><CreateCourse /></MainLayout> } />
                </Route>

                <Route path="course/:courseId">
                    <Route index element={<CourseRedirect />} />
                    <Route path="syllabus" element={ <MainLayout><CourseSidebarLayout children={undefined} /></MainLayout> } />
                    <Route path="info" element={ <MainLayout><CourseSidebarLayout><Information children={undefined} /></CourseSidebarLayout></MainLayout> } />
                </Route>
                
            </Routes>
        </CourseBuilderProvider>
    );
  };
  
  export default App;


