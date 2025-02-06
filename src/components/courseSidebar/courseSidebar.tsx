import { BookOpenText, Settings } from "lucide-react"
import { SidebarMain } from "@/components/courseSidebar/sidebarMain"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";

const data = [
      {
        title: "Content",
        url: "#",
        icon: BookOpenText,
        isActive: true,
        items: [
          {
            title: "Information",
            url: "#",
          },
          {
            title: "Syllabus",
            url: "#",
          },
          {
            title: "Checklist",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
        items: [
          {
            title: "Publication",
            url: "#",
          },
          {
            title: "Price",
            url: "#",
          },
          {
            title: "Certificates",
            url: "#",
          },
        ],
    }
]


export function CourseSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const courseTitle = "Example Course Example Course Example Example Course Example Course Example Course";
    const courseImage = "/images/cards/1.png";
    const { isMobile } = useSidebar();
  

    function handlePublishCourse(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();

    }

    return (
        <>
        {isMobile && <SidebarTrigger />}
        <Sidebar collapsible={isMobile ? "icon" : "none"} {...props} className="bg-white h-[calc(100vh-64px)] sticky top-[64px] left-0">
            <SidebarHeader className="flex p-4">
                <Avatar className="w-24 h-24 rounded-lg overflow-hidden">
                    <AvatarImage src={courseImage} alt={courseTitle} />
                    <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <div>
                    <p className="line-clamp-3 text-md font-semibold break-words">{courseTitle}</p>
                </div>
                <Button
                    onClick={handlePublishCourse}
                    variant="outline"
                    className="w-24 h-9 border-blue-500 text-blue-500 
                    hover:border-blue-700 hover:text-blue-700 transition-colors duration-200"
                    >
                    <span>Publish</span>
                </Button>
            </SidebarHeader>
        <SidebarContent>
            <SidebarMain items={data} />
        </SidebarContent>
        {/* <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter> */}
      </Sidebar>
      </>
    )
  }
