import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { getDictionary } from "@/lib/dictionary";
import { MessageCircle, Globe, ChevronRight, Mail } from "lucide-react";

export async function Footer({ lang }: { lang: "en" | "ar" }) {
    const dict = await getDictionary(lang);
    const isAr = lang === "ar";
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-black/[0.03] bg-white pt-24 pb-12 text-sm relative overflow-hidden">
            {/* Decorative background gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-action/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <Container className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 relative z-10">
                {/* Brand Section */}
                <div className="flex flex-col gap-8">
                    <Link href={`/${lang}`} className="flex items-center gap-3 group w-fit">
                        <div className="relative w-12 h-12 overflow-hidden rounded-2xl border border-black/5 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-action/10">
                            <Image src="/logo_tight.png" alt={`${dict.General.brandName} Logo`} fill className="object-contain p-1" />
                        </div>
                        <span className="text-2xl font-bold tracking-tighter text-foreground lowercase">
                            {dict.General.brandName}<span className="text-action">.</span>
                        </span>
                    </Link>
                    <p className="text-secondary font-medium leading-relaxed opacity-70 max-w-[240px]">
                        {dict.Footer.description}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-8 opacity-40">
                        {dict.Footer.linksTitle}
                    </h3>
                    <ul className="space-y-4">
                        {[
                            { label: dict.Navigation.home, href: `/${lang}` },
                            { label: dict.Navigation.features, href: `/${lang}#features` },
                            { label: dict.Navigation.pricing, href: `/${lang}#pricing` },
                            { label: dict.Navigation.contact, href: `/${lang}#contact` }
                        ].map((link, i) => (
                            <li key={i}>
                                <Link
                                    href={link.href}
                                    className="text-secondary font-medium hover:text-action transition-all flex items-center gap-2 group w-fit"
                                >
                                    <div className="w-1 h-1 rounded-full bg-action opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Vision */}
                <div>
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-8 opacity-40">
                        {dict.Footer.visionTitle}
                    </h3>
                    <div className="relative group">
                        <div className={`absolute ${isAr ? '-right-4' : '-left-4'} top-0 bottom-0 w-1 bg-action/20 rounded-full group-hover:bg-action transition-colors duration-500`} />
                        <p className={`text-secondary font-medium leading-relaxed opacity-80 ${isAr ? 'pr-4' : 'pl-4'} transition-colors duration-500`}>
                            {dict.Footer.vision}
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col">
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-8 opacity-40">
                        {dict.Footer.contactTitle}
                    </h3>
                    <div className="flex flex-col gap-6">
                        <a
                            href="https://wa.me/966550623623"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-action text-white rounded-2xl font-bold transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-action/30 active:scale-95 group w-fit"
                        >
                            <MessageCircle className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
                            <span>{dict.Contact.whatsappButton}</span>
                        </a>

                        <a
                            href="mailto:support@usewafe.com"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-black/5 text-secondary rounded-2xl font-bold transition-all hover:scale-[1.02] hover:bg-neutral-50 active:scale-95 group w-fit"
                        >
                            <Mail className="w-5 h-5 text-action group-hover:rotate-12 transition-transform" />
                            <span>{dict.Contact.email}</span>
                        </a>

                        <div className="flex items-center gap-3 text-secondary/40 font-bold tracking-widest text-[10px]">
                            <Globe className="w-3.5 h-3.5" />
                            <span>SAUDI ARABIA</span>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="mt-24 border-t border-black/[0.03] pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-secondary/40 font-medium text-[11px] tracking-tight">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <p>© {year} {dict.General.brandName}</p>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-black/10" />
                    <p className="opacity-60 italic">{dict.General.developedBy}</p>
                </div>

                <div className="flex items-center gap-8">
                    <Link href="#" className="hover:text-action transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-action transition-colors">Terms</Link>
                </div>
            </Container>
        </footer>
    );
}
