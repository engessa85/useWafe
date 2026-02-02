"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./Button";

export function LanguageSwitcher() {
    const pathname = usePathname();
    const segments = pathname?.split("/") || [];
    const currentLang = segments[1] || "en";

    const getDataPath = (locale: string) => {
        const newSegments = [...segments];
        newSegments[1] = locale;
        return newSegments.join("/");
    };

    return (
        <div className="flex bg-neutral-100 p-1 rounded-full border border-black/[0.03]">
            <Link href={getDataPath("en")}>
                <Button
                    variant="ghost"
                    size="sm"
                    className={`rounded-full px-4 h-8 text-[10px] font-bold tracking-widest transition-all ${currentLang === "en" ? "bg-white text-foreground shadow-sm" : "text-secondary opacity-40 hover:opacity-100"}`}
                >
                    EN
                </Button>
            </Link>
            <Link href={getDataPath("ar")}>
                <Button
                    variant="ghost"
                    size="sm"
                    className={`rounded-full px-4 h-8 text-[10px] font-bold tracking-widest transition-all ${currentLang === "ar" ? "bg-white text-foreground shadow-sm" : "text-secondary opacity-40 hover:opacity-100"}`}
                >
                    AR
                </Button>
            </Link>
        </div>
    );
}
