import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { getDictionary } from "@/lib/dictionary";

export async function Footer({ lang }: { lang: "en" | "ar" }) {
    const dict = await getDictionary(lang);
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-black/3 bg-white py-24 text-sm">
            <Container className="grid gap-16 md:grid-cols-4 lg:grid-cols-5">
                <div className="col-span-2 lg:col-span-2">
                    <Link href={`/${lang}`} className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-black/5 transition-transform group-hover:scale-105">
                            <Image src="/logo_tight.png" alt={`${dict.General.brandName} Logo`} fill className="object-contain" />
                        </div>
                        <span className="text-2xl font-semibold tracking-tight text-foreground">
                            {dict.General.brandName}<span className="text-secondary opacity-40">.</span>
                        </span>
                    </Link>
                    <p className="mt-6 max-w-xs text-secondary font-medium leading-relaxed">
                        {dict.Footer.description}
                    </p>
                </div>

                <div>
                    <h3 className="mb-6 font-semibold text-foreground uppercase text-[10px] opacity-40 tracking-widest">{dict.Footer.visionTitle}</h3>
                    <p className="text-secondary font-medium leading-relaxed opacity-80">
                        {dict.Footer.vision}
                    </p>
                </div>

                <div>
                    <h3 className="mb-6 font-semibold text-foreground uppercase text-[10px] opacity-40 tracking-widest">{dict.Navigation.features}</h3>
                    <ul className="space-y-4 text-secondary font-medium">
                        <li><Link href={`/${lang}#features`} className="hover:text-action transition-colors">{dict.Navigation.features}</Link></li>
                        <li><Link href={`/${lang}#pricing`} className="hover:text-action transition-colors">{dict.Navigation.pricing}</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-6 font-semibold text-foreground uppercase text-[10px] opacity-40 tracking-widest">{dict.Navigation.contact}</h3>
                    <ul className="space-y-4 text-secondary font-medium">
                        <li><Link href={`/${lang}#contact`} className="hover:text-action transition-colors">{dict.Navigation.contact}</Link></li>
                    </ul>
                </div>
            </Container>
            <Container className="mt-24 border-t border-black/3 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-secondary/60 font-medium text-[12px]">
                <p>© {year} {dict.General.brandName}. {dict.General.developedBy}</p>
                <div className="flex gap-8">
                    <span className="hover:text-action cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-action cursor-pointer">Terms of Service</span>
                </div>
            </Container>
        </footer>
    );
}
