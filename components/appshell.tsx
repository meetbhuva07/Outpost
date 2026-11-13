"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "lucide-react";
import SiteHeader from "./SiteHeader";


const appshell = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isFullScreenRoute = pathname?.startsWith("/workspace/") || pathname?.startsWith("/Shared/");

    if (isFullScreenRoute) {
        return <>{children}</>;
    }
    return <>
        <SiteHeader />
        <div className="flex flex-1 tlex-col pt-18">{children}</div>
    </>
};

export default appshell;
