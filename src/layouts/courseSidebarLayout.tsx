import { SidebarProvider } from "@/components/ui/sidebar"
import { CourseSidebar } from "@/components/courseSidebar/courseSidebar"




export function CourseSidebarLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex w-full max-w-screen-xl mx-auto">
                {/* Sidebar */}
                <CourseSidebar />
                {/* Divider */}
                <div className="w-[1px] bg-gray-300 min-h-screen" />
                {/* Main Content */}
                <main className="flex-grow p-4">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}
