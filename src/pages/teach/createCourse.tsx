import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



const formSchema = z.object({
  title: z
    .string()
    .min(5, "Название курса должно быть не менее 5 символов")
    .max(64, "Название не может быть длиннее 64 символов"),
});

export const CreateCourse: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    const courseId = "123";
    navigate(`/course/${courseId}/info`);
  };

  return (
    <div className="min-h-screen pt-2 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold">Создание нового курса</h1>
        <div className="flex justify-center min-h-screen">
            <div className="w-full max-w-screen-md bg-white rounded-lg lg:p-6 pt-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Поле для ввода названия курса */}
                        <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Название курса</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите название курса" {...field} />
                            </FormControl>
                                {/* Счетчик символов */}
                                <div className="flex justify-between text-gray-500 text-xs mt-1">
                                    <span>Макс 64 символа</span>
                                    <span>{field.value.length}/64</span>
                                </div>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        {/* Кнопка отправки */}
                        <Button type="submit" className="bg-blue-500 flex items-center border-blue-500
                        hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200">
                        Создать курс
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    </div>
  );
};
