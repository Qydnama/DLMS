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
  lessons,
}: {
  lessons: {
    id: string
    title: string
    videoId: string
  }[]
}) {
  return (
    <SidebarGroup>
        <SidebarGroupLabel className="text-base text-black hover:underline"><Link to="../quizzes">Quizzes</Link></SidebarGroupLabel>
        <SidebarGroupLabel>Syllabus</SidebarGroupLabel>
        <SidebarMenu>
            <ScrollArea className="h-[700px]">
              {lessons.map((lesson) => (
                <SidebarMenuItem key={lesson.title}>
                  <SidebarMenuButton asChild>
                    <a href={lesson.id}>
                      <p className="line-clamp-1 break-words">{lesson.id}. {lesson.title}</p>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </ScrollArea>
        </SidebarMenu>
    </SidebarGroup>
  )
}
