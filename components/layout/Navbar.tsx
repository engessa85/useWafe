import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { getDictionary } from "@/lib/dictionary";

export async function Navbar({ lang }: { lang: "en" | "ar" }) {
    const dict = await getDictionary(lang);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-black/5">
            <Container className="flex h-16 items-center justify-between">
                <Link href={`/${lang}`} className="flex items-center gap-3 group">
                    {/* Logo Image */}
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm border border-black/5 transition-transform group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt={`${dict.General.brandName} Logo`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-semibold tracking-tight text-foreground">{dict.General.brandName}</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href={`/${lang}#features`} className="text-xs font-medium text-foreground/80 hover:text-foreground transition-colors">
                        {dict.Navigation.features}
                    </Link>
                    <Link href={`/${lang}#how-it-works`} className="text-xs font-medium text-foreground/80 hover:text-foreground transition-colors">
                        {dict.Navigation.howItWorks}
                    </Link>
                    <Link href={`/${lang}#pricing`} className="text-xs font-medium text-foreground/80 hover:text-foreground transition-colors">
                        {dict.Navigation.pricing}
                    </Link>
                    <Link href={`/${lang}#contact`} className="text-xs font-medium text-foreground/80 hover:text-foreground transition-colors">
                        {dict.Navigation.contact}
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <Button variant="primary" size="sm" className="hidden sm:flex">
                        {dict.Hero.ctaPrimary}
                    </Button>
                </div>
            </Container>
        </nav>
    );
}
