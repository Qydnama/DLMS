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
import { Link, useNavigate } from "react-router-dom";



const formSchema = z.object({
  title: z
    .string()
    .min(5, "Название курса должно быть не менее 5 символов")
    .max(64, "Название не может быть длиннее 64 символов"),
});

export const PinataCreateCourse: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      jwt: "",
      gateway: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(`/teach/courses/create`);
  };

  return (
    <div className="pt-2 md:p-6">
        <div className="flex justify-center">
            <div className="w-full max-w-screen-md rounded-lg lg:p-6 pt-2 bg-white rounded-xl shadow-md">
                <h1 className="text-xl mb-5 md:text-2xl font-bold">Создание нового курса</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Поле для ввода названия курса */}
                        <div className="space-y-2">
                            <FormField
                            control={form.control}
                            name="jwt"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Введите ваши данные с Pinata</FormLabel>
                                <FormControl>
                                    <Input placeholder="Введите ваш JWT" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />

                            <FormField 
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                {/* <FormLabel>Введите ваш GATEWAY</FormLabel> */}
                                <FormControl>
                                    <Input placeholder="Введите ваш GATEWAY" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        {/* Кнопка отправки */}
                        <Button type="submit" className="bg-blue-500 flex items-center border-blue-500
                        hover:border-blue-700 hover:bg-blue-700 transition-colors duration-200">
                        Создать курс
                        </Button>

                        <div className="flex justify-between text-gray-500 text-xs mt-1">
                            <span>More about creating a course in our <Link to="/cources/tutorial"><span className="text-blue-500">Help Center</span></Link>
                            </span>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    </div>
  );
};
