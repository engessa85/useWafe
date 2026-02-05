import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "useWafe - WhatsApp Business Automation & Marketing",
    description: "Automate your WhatsApp sales, support, and marketing with useWafe. Smart replies, cart recovery, and more.",
    icons: {
        icon: "/logo_tight.png",
        apple: "/logo_tight.png",
    },
};

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ar' }]
}

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={lang} dir={dir} className="scroll-smooth">
            <body className="bg-background text-foreground antialiased overflow-x-hidden">
                <Navbar lang={lang as "en" | "ar"} />
                <div className="pt-16">
                    {children}
                </div>
                <Footer lang={lang as "en" | "ar"} />
            </body>
        </html>
    );
}
