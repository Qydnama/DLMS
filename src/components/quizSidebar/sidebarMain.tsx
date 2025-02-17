import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
  
  import { ScrollArea } from "@/components/ui/scroll-area"
  import { Link } from "react-router-dom"
  
  
  export function SidebarMain({
    quizzes,
  }: {
    quizzes: {
      id: string
      title: string
      completed: boolean
      score: null | number
      totalQuestions: number
    }[]
  }) {
    return (
      <SidebarGroup>
          <SidebarGroupLabel className="text-base text-black hover:underline"><Link to="../syllabus">Syllabus</Link></SidebarGroupLabel>
          <SidebarGroupLabel>Quizzes</SidebarGroupLabel>
          <SidebarMenu>
              <ScrollArea className="h-[700px]">
                {quizzes.map((quiz) => (
                  <SidebarMenuItem key={quiz.title}>
                    <SidebarMenuButton asChild>
                      <a href={quiz.id}>
                        <p className="line-clamp-1 break-words">{quiz.id}. {quiz.title}</p>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </ScrollArea>
          </SidebarMenu>
      </SidebarGroup>
    )
  }
  