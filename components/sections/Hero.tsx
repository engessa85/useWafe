"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function Hero({ lang, dict }: { lang: "en" | "ar", dict: any }) {
    const isRtl = lang === 'ar';

    return (
        <section className="relative pt-32 pb-16 md:pt-48 overflow-hidden bg-white">
            {/* Ambient Background Polish */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-action/5 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px] opacity-40" />
            </div>

            <Container className="relative">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Tagline / Brand Anchor */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-black/5 text-secondary text-[11px] font-bold tracking-widest uppercase">
                            {dict.Hero.badge}
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-8xl font-semibold tracking-tighter text-foreground leading-[1] mb-10"
                    >
                        {dict.Hero.title}
                    </motion.h1>

                    {/* Styled Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-secondary font-medium leading-relaxed max-w-2xl mb-12 opacity-80"
                    >
                        {dict.Hero.subtitle}
                    </motion.p>

                    {/* Centered CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-6 mb-24"
                    >
                        <Link href={`/${lang}#contact`}>
                            <Button size="lg" className="rounded-full px-10 py-7 h-auto bg-action text-white hover:bg-action/90 shadow-2xl shadow-action/25 border-none transition-all hover:scale-105 active:scale-95 text-lg font-bold">
                                {dict.Hero.ctaPrimary}
                            </Button>
                        </Link>
                        <Link href={`/${lang}#pricing`} className="group flex items-center gap-2 text-action font-semibold hover:underline text-lg">
                            {dict.Hero.ctaSecondary}
                            <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                        </Link>
                    </motion.div>
                </div>

                {/* Main Visual Component */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative max-w-6xl mx-auto"
                >
                    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-apple-lg overflow-hidden bg-white shadow-[0_40px_120px_rgba(0,0,0,0.08)] border border-black/5 group">
                        <Image
                            src="/hero-visual.png"
                            alt="Turn Chats Into Sales Visual"
                            fill
                            priority
                            className="object-cover transition-transform duration-1000 group-hover:scale-[1.01]"
                        />

                        {/* Interactive Depth Layers */}
                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/20 pointer-events-none" />

                        {/* Floating Sales Toast - Centered Context */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 right-[10%] hidden md:block"
                        >
                            <div className="bg-white/90 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-2xl flex items-center gap-4 transition-transform hover:scale-105">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_#25D366]" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.2em] font-black text-secondary opacity-40">Live Sales</div>
                                    <div className="text-lg font-bold text-foreground">$1,240.00</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
