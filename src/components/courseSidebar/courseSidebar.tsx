import { BookOpenText } from "lucide-react"
import { SidebarMain } from "@/components/courseSidebar/sidebarMain"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"


const data = [
      {
        title: "Content",
        url: "#",
        icon: BookOpenText,
        isActive: true,
        items: [
          {
            title: "Syllabus",
            url: "syllabus",
          },
          {
            title: "Quizzes",
            url: "quizzes",
          },
        ],
      },
    //   {
    //     title: "Settings",
    //     url: "#",
    //     icon: Settings,
    //     items: [
    //       {
    //         title: "Publication",
    //         url: "#",
    //       },
    //       {
    //         title: "Price",
    //         url: "#",
    //       },
    //       {
    //         title: "Certificates",
    //         url: "#",
    //       },
    //     ],
    // }
]


export function CourseSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const courseTitle = "Example Course Example eCourseCourseCourseCourseCours Course Example Example Course Example Course Example Course ";
    const courseImage = "/images/cards/1.png";
    const { isMobile } = useSidebar();


    return (
        <div className="bg-white rounded-l-2xl m-0 sm:mt-5 sm:ml-5">
            {isMobile}
            <Sidebar collapsible={isMobile ? "icon" : "none"} {...props} className="bg-white rounded-l-2xl h-[calc(100vh-64px)] sticky top-[64px] left-0">
                <SidebarHeader className="flex p-4">
                    <Avatar className="w-24 h-24 rounded-lg overflow-hidden">
                        <AvatarImage src={courseImage} alt={courseTitle} />
                        <AvatarFallback>EC</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="line-clamp-5 text-md font-semibold break-words">{courseTitle}</p>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMain items={data} />
                </SidebarContent>
                {/* <SidebarFooter>
                <NavUser user={data.user} />
                </SidebarFooter> */}
                
            </Sidebar>
      </div>
    )
  }
