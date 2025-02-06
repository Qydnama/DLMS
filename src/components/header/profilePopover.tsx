import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

export const ProfilePopover: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Popover>
        <PopoverTrigger>
            {/* Profile Avatar */}
            <div className="cursor-pointer">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="/images/profile.png" alt="Profile" />
                </Avatar>
            </div>
        </PopoverTrigger>
        <PopoverContent className="bg-white p-2 rounded-md shadow-lg w-40">
            {/* Popover Menu */}
            <div className="flex flex-col space-y-2">
            <button className="text-right text-base text-gray-800 hover:bg-gray-100 px-3 py-2 hover:text-blue-500 transition duration-200">
                {t("profile")}
            </button>
            <button className="text-right text-base text-gray-800 hover:bg-gray-100 px-3 py-2 hover:text-blue-500 transition duration-200">
                {t("settings")}
            </button>
            <button className="text-right text-base text-gray-800 hover:bg-gray-100 px-3 py-2 hover:text-red-500 transition duration-200">
                {t("logout")}
            </button>
            </div>
        </PopoverContent>
        </Popover>
    );
};

