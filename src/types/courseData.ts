export interface QuestionInterface {
    id: string;
    text: string;
    options: string[];
}

export interface QuizInterface {
    correct_answers: string;
    questions: QuestionInterface[];
}

export interface LessonInterface {
    id: string;
    title: string;
    videoId: string;
}

export interface ModuleInterface {
    id: string;
    title: string;
    lessons: LessonInterface[];
    quiz: QuizInterface;
}

export interface CertificateByGrade {
    gradeHighThan: string;
    certificate: string;
}

export interface CourseAttributesInterface {
    category: Array<string>;
    duration: string;
    level: string;
    lessons: number;
    language: string;
    summary: string;
    workload: string;
    learn: string;
    about: string;
    gains: string;
    requirements: string;
}

/* ────────────────────────────────
     3. Course root
     ──────────────────────────────── */

export interface CourseDataInterface {
    name: string;
    description: string;
    image: string;
    cover_image: string;
    video?: string;
    social_links: string[];

    attributes: CourseAttributesInterface;
    modules: ModuleInterface[];
    courseCompletion: CertificateByGrade[];
}

export interface EnrolledCoursePreview {
    courseAddress: string;
    title: string;
    image: string;
}

export interface CertificateInterface {
    certificateAddress: string;
    title: string;
    image: string;
}