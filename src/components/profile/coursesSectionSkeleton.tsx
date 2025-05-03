import { Skeleton } from "@/components/ui/skeleton";

export function CoursesSectionSkeleton() {
    return (
        <div className="flex items-center space-x-3 mb-4">
            <Skeleton className="h-6 w-20 rounded-md" />
            <Skeleton className="h-6 w-20 rounded-md" />
        </div>
    );
}
