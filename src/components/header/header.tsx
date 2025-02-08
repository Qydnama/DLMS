import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSelector } from '@/components/header/languageSelector';
// import { ProfilePopover } from "@/components/header/profilePopover";
import { Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import { TonConnectButton } from '@tonconnect/ui-react';


interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [hideBorder, setHideBorder] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setHideBorder(true);
        } else {
          setHideBorder(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <header
        className={`bg-white fixed z-10 ${
            hideBorder ? "" : "border-b border-gray-300"
        } transition duration-300 ${className} `}
        >
            <div className="max-w-screen-xl flex justify-between items-center px-5 mx-auto">
                <div className="flex items-center space-x-3">
                    {/* Logo */}
                    <Link to="/catalog">
                        <div className="flex items-center space-x-2 py-2">
                            <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
                            {/* Hide DLMS Platform text when the width is less than 1024px */}
                            <span className="text-lg font-bold hidden sm:flex">{t("logo-name")}</span>
                        </div>
                    </Link>
                    {/* Menu Button (Visible only <= 1024px) */}
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                className="p-2 rounded-md hover:bg-gray-100"
                                aria-label="Open menu"
                                onClick={() => setMenuOpen(!isMenuOpen)}
                                >
                                <Menu className="w-6 h-6" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="p-0 w-auto bg-white shadow-md rounded-md">
                                {/* Navigation Links */}
                                <DropdownMenuItem className="p-0">
                                <Link to="/catalog" className="text-center text-base p-2 w-full text-gray-700 hover:text-blue-500">
                                    {t("catalog")}
                                </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-0">
                                <Link to="/learn" className="text-center text-base p-2 block w-full text-gray-700 hover:text-blue-500">
                                    {t("learning")}
                                </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-0">
                                <Link to="/teach" className="text-center text-base p-2 block w-full text-gray-700 hover:text-blue-500">
                                    {t("teaching")}
                                </Link>
                                </DropdownMenuItem>

                                {/* Language Selector */}
                                <DropdownMenuItem>
                                    <div className="flex items-center">
                                        <LanguageSelector  />
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Navigation */}
                    <NavigationMenu className="hidden md:flex text-base">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                            to="/catalog"
                            className="text-gray-700 hover:text-blue-500 transition duration-200 p-2 m-0"
                            >
                            {t("catalog")}
                            </Link>
                        </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                            to="/learn"
                            className="text-gray-700 hover:text-blue-500 transition duration-200 p-2 m-0"
                            >
                            {t("learning")}
                            </Link>
                        </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                            to="/teach"
                            className="text-gray-700 hover:text-blue-500 transition duration-200 p-2 m-0"
                            >
                            {t("teaching")}
                            </Link>
                        </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Block (Language Selector and Profile) */}
                <div className="flex items-center space-x-4">
                    {/* Language Selector */}
                    <div className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-md">
                        <LanguageSelector />
                    </div>

                    {/* Profile */}
                    {/* <ProfilePopover /> */}
                    <TonConnectButton />
                </div>
            </div>
        </header>
    );
};
