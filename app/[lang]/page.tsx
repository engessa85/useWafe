import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { CTA } from "@/components/sections/CTA";
import { Pricing } from "@/components/sections/Pricing";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { getDictionary } from "@/lib/dictionary";

type Props = {
    params: Promise<{ lang: "en" | "ar" }>;
};

export default async function Home({ params }: Props) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero lang={lang} dict={dict} />
            <ProblemSolution lang={lang} dict={dict} />
            <Features lang={lang} dict={dict} />
            <TargetAudience lang={lang} dict={dict} />
            <HowItWorks lang={lang} dict={dict} />
            <Pricing lang={lang} dict={dict} />
            <FAQ dict={dict} />
            <CTA dict={dict} />
            <ContactForm dict={dict} />
        </main>
    );
}
