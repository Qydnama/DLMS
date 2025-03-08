import React from "react";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"

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
import { Quiz } from "@/pages/quiz/quiz";
import { QuizAttempt } from "@/pages/quiz/quizAttempt";
import { QuizReview } from "@/pages/quiz/quizReview";
import { CoursePromo } from "@/pages/coursePromo/coursePromo";
import { UserProfile } from "@/pages/users/profile";
import { PageNotFound } from "@/pages/error/pageNotFound";


function AnimatedRoute({ children }: { children: React.ReactNode }) {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.38 }}
        style={{ position: "absolute", width: "100%", top: 0, left: 0 }}
      >
        {children}
      </motion.div>
    );
}

const App: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/Qydnama/first_contract_front_end/refs/heads/main/public/tonconnect-manifest.json">
                <CourseBuilderProvider>
                    <Routes location={location} key={location.pathname}>
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
                            <Route path="promo" element={<MainLayout><CoursePromo /></MainLayout>} />
                            <Route path="syllabus" element={ <MainLayout><CourseSidebarLayout children={<Syllabus />} /></MainLayout> } />
                            <Route path="quizzes" element={ <MainLayout><CourseSidebarLayout children={<Quizzes />} /></MainLayout> } />
                            <Route path="lesson/:lessonId" element={<MainLayout><Lesson /></MainLayout>} />
                            <Route path="quiz/:quizId">
                                <Route index element={<MainLayout><Quiz /></MainLayout>} />
                                <Route path="attempt" element={<AnimatedRoute><QuizAttempt /></AnimatedRoute>} />
                                <Route path="review" element={<AnimatedRoute><QuizReview /></AnimatedRoute>} />
                            </Route>
                        </Route>

                        <Route path="users/:userAddress">
                            <Route index element={<MainLayout><UserProfile /></MainLayout>} />
                            <Route path="certificate" element={<MainLayout>undefined</MainLayout>} />
                        </Route>

                        <Route path="*" element={<MainLayout><PageNotFound /></MainLayout>} />
                        
                    </Routes>
                </CourseBuilderProvider>
            </TonConnectUIProvider>
        </AnimatePresence>
    );
  };
  
  export default App;


