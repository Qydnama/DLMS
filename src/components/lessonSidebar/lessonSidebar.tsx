import { SidebarMain } from "@/components/lessonSidebar/sidebarMain"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator";


interface LessonSidebarProps extends React.ComponentProps<typeof Sidebar> {
    data: {
        course: { courseTitle: string };
        lessons: { id: string; title: string; videoId: string }[];
    };
}

export function LessonSidebar({ data, ...props }: LessonSidebarProps) {
    const { isMobile } = useSidebar();


    return (
        <div className="bg-white m-0 rounded-2xl">
            {isMobile}
            <Sidebar collapsible={isMobile ? "icon" : "none"} {...props} className="bg-white rounded-2xl">
                <SidebarHeader className="flex px-4 pt-6 pb-0">
                    <div>
                        <p className="line-clamp-5 text-md font-semibold break-words">{data.course.courseTitle}</p>
                    </div>
                    <Separator className="" />

                </SidebarHeader>
                <SidebarContent>
                    <SidebarMain lessons={data.lessons} />
                </SidebarContent>
                {/* <SidebarFooter>
                <NavUser user={data.user} />
                </SidebarFooter> */}
            </Sidebar>
      </div>
    )
  }
