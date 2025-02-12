import React from "react";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Routes, Route, Navigate } from "react-router-dom";

import { MainLayout } from "@/layouts/mainLayout";
import { Catalog } from "@/pages/catalog/catalog";
import { Teach } from "@/pages/teach/courses";
import { PinataCreateCourse } from "@/pages/teach/pinataCreateCourse";
import { CourseSidebarLayout } from "@/layouts/courseSidebarLayout";
import { CreateCourse } from "@/pages/teach/createCourse";

// import { CourseRedirect } from "@/components/courseRedirect";
import { CourseBuilderProvider } from "@/context/courseBuilderProvider";
import { Learn } from "@/pages/learn/learn";
import { Syllabus } from "@/pages/learn/syllabus";
import { Quizzes } from "@/pages/learn/quizzes";
import { Lesson } from "@/pages/lesson/lesson";


const App: React.FC = () => {
    return (
        <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/Qydnama/first_contract_front_end/refs/heads/main/public/tonconnect-manifest.json">
            <CourseBuilderProvider>
                <Routes>
                    <Route index element={<Navigate to="catalog" replace />} />
                    <Route path="catalog" element={ <MainLayout children={<Catalog />} />} />
                    
                    <Route path="learn" element={ <MainLayout children={<Learn />}></MainLayout>} />

                    <Route path="teach" element={ <Navigate to="/teach/courses" replace /> } />
                    <Route path="teach/courses" >
                        <Route index element={ <MainLayout><Teach /></MainLayout> } />
                        <Route path="new" element={ <MainLayout><PinataCreateCourse /></MainLayout> } />
                        <Route path="create" element={ <MainLayout><CreateCourse children={undefined} /></MainLayout> } />
                    </Route>

                    <Route path="course/:courseId">
                        <Route index element={<Navigate to="syllabus" replace />} />
                        <Route path="syllabus" element={ <MainLayout><CourseSidebarLayout children={<Syllabus />} /></MainLayout> } />
                        <Route path="quizzes" element={ <MainLayout><CourseSidebarLayout children={<Quizzes />} /></MainLayout> } />
                        <Route path="lesson/:lessonId" element={<MainLayout><Lesson /></MainLayout>} />
                    </Route>
                    
                </Routes>
            </CourseBuilderProvider>
        </TonConnectUIProvider>
    );
  };
  
  export default App;


