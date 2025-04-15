import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface StepFourProps {
    courseData: {
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
            image: string; // base64 или URL
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
    };
    setCourseData: React.Dispatch<
        React.SetStateAction<{
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
            certificate: { image: string };
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
        }>
    >;
    setValidationStatus: React.Dispatch<
        React.SetStateAction<{
            stepOne: boolean;
            stepTwo: boolean;
            stepThree: boolean;
            stepFour: boolean;
        }>
    >;
}

// 1) Определяем Zod‐схему для цены и файла
const stepFourSchema = z.object({
    price: z
        .number()
        .min(1, "Price must be at least 1 TON")
        .max(999999, "Price is too high"),
    certificateFile: z
        .any()
        .refine(
            (file: File | undefined) =>
                file === undefined || file.size <= 4 * 1024 * 1024,
            {
                message: "File must be <= 4MB",
            }
        )
        .refine(
            (file: File | undefined) =>
                file === undefined ||
                ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
                    file.type
                ),
            {
                message: "Only JPG, PNG, GIF, WEBP images are allowed",
            }
        )
        .optional(),
});

type StepFourForm = z.infer<typeof stepFourSchema>;

export function StepFour({
    courseData,
    setCourseData,
    setValidationStatus,
}: StepFourProps) {
    // Локальный стейт для превью файла
    const [preview, setPreview] = useState(courseData.certificate.image || "");

    // 2) useForm c mode="onChange", чтобы ошибки/валидность обновлялись при вводе
    const {
        register,
        watch,
        formState: { errors, isValid },
        setValue,
    } = useForm<StepFourForm>({
        resolver: zodResolver(stepFourSchema),
        defaultValues: {
            price: courseData.price,
            certificateFile: undefined,
        },
        mode: "onChange", // проверяет валидность сразу при изменениях
    });

    // 3) Отслеживаем isValid, чтобы обновлять setValidationStatus
    useEffect(() => {
        if (isValid) {
            setValidationStatus((prev) => ({ ...prev, stepFour: true }));
        } else {
            setValidationStatus((prev) => ({ ...prev, stepFour: false }));
        }
    }, [isValid, setValidationStatus]);

    // 4) Следим за изменением поля price
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "price" && typeof value.price === "number") {
                handlePriceChange(value.price);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    // 5) Обработка цены → записываем в courseData
    const handlePriceChange = (newPrice: number) => {
        setCourseData((prev) => ({ ...prev, price: newPrice }));
    };

    // 6) Обработка загрузки файла
    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        setValue("certificateFile", file, { shouldValidate: true });

        if (file) {
            // Генерируем превью (Base64)
            const reader = new FileReader();
            reader.onload = (e) => {
                const base64 = e.target?.result as string;
                setPreview(base64);
                // Сохраняем Base64 в courseData
                setCourseData((prev) => ({
                    ...prev,
                    certificate: {
                        ...prev.certificate,
                        image: base64,
                    },
                }));
            };
            reader.readAsDataURL(file);
        } else {
            // Сбрасываем файл
            setPreview("");
            setCourseData((prev) => ({
                ...prev,
                certificate: {
                    ...prev.certificate,
                    image: "",
                },
            }));
        }
    };

    return (
        <div className="space-y-6">
            <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Pricing & Certificates
                </h2>

                {/* Course Price */}
                <div className="space-y-3">
                    <Label
                        htmlFor="price"
                        className="block text-sm font-medium"
                    >
                        Course Price (TON)
                    </Label>
                    <Input
                        id="price"
                        type="number"
                        min="1"
                        step="0.1"
                        className="w-full rounded-2xl"
                        placeholder="Enter price in TON"
                        {...register("price", { valueAsNumber: true })}
                    />
                    {errors.price && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.price.message}
                        </p>
                    )}
                </div>
            </div>


            {/* Certificate Section */}
            <div className="space-y-2">
                <Label
                    htmlFor="certificateFile"
                    className="block text-sm font-medium"
                >
                    Custom certificate image (optional)
                </Label>

                {/* File Input */}
                <Input
                    id="certificateFile"
                    type="file"
                    accept="image/*"
                    className="w-full rounded-2xl"
                    onChange={handleFileChange}
                />
                {errors.certificateFile?.message && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.certificateFile?.message as string}
                    </p>
                )}
                {/* Preview */}
                {preview ? (
                    <div className="mt-4 w-40 h-40 overflow-hidden rounded-md border">
                        <img
                            src={preview}
                            alt="Certificate Preview"
                            className="object-cover w-full h-full"
                        />
                    </div>
                ) : (
                    <p className="text-xs text-gray-400 mt-2">
                        No certificate image selected yet.
                    </p>
                )}
            </div>
        </div>
    );
}
