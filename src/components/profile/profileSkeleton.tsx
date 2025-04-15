// ProfileSkeleton.tsx
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ProfileSkeleton: React.FC = () => {
  return (
    <div className="mt-8 mx-auto space-y-3">
      {/* Card 1 */}
      <div className="rounded-3xl py-4 px-8 bg-white shadow-sm">
        <div className="space-y-4 pt-3 pb-4">
          {/* Name row */}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-2/3 rounded-md" />
          </div>
          {/* Address row */}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-3/4 rounded-md" />
          </div>
          {/* Balance row */}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-1/4 rounded-md" />
          </div>
        </div>
      </div>

      {/* Card 2 (Tabs skeleton) */}
      <div className="bg-white py-4 px-8 rounded-3xl shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <Skeleton className="h-6 w-20 rounded-md" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3 rounded-md" />
          <Skeleton className="h-4 w-2/3 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
        </div>
      </div>
    </div>
  );
};
