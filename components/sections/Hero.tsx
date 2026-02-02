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
        <section className="relative pt-32 pb-16 md:pt-48 overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    {/* Left Side: Big Title like "Store." */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-7xl md:text-[100px] font-semibold tracking-tighter text-foreground leading-[0.9] mb-6">
                            useWafe<span className="text-secondary opacity-40">.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-secondary font-medium leading-tight max-w-lg">
                            {dict.Hero.title}
                        </p>
                    </motion.div>

                    {/* Right Side: CTA/Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className={`max-w-xs ${isRtl ? 'md:text-left' : 'md:text-right'} pb-2`}
                    >
                        <p className="text-lg font-semibold text-foreground mb-6 leading-snug italic opacity-80">
                            {dict.Hero.subtitle}
                        </p>
                        <div className={`flex items-center gap-6 ${isRtl ? 'md:justify-start' : 'md:justify-end'}`}>
                            <Link href={`/${lang}#contact`}>
                                <Button size="lg" className="rounded-full px-8 bg-action text-white hover:bg-action/90 shadow-xl shadow-action/20 border-none transition-all hover:scale-105 active:scale-95">
                                    {dict.Hero.ctaPrimary}
                                </Button>
                            </Link>
                            <Link href={`/${lang}#pricing`} className="group flex items-center gap-1 text-action font-medium hover:underline">
                                {dict.Hero.ctaSecondary}
                                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Element - Premium Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="relative group mr-[-5%] ml-[-5%] md:mx-0"
                >
                    <div className="relative rounded-apple-lg bg-white shadow-[0_20px_80px_rgba(0,0,0,0.1)] overflow-hidden border border-black/3">
                        <div className="absolute inset-0 bg-linear-to-br from-white via-white/50 to-neutral-50/50" />

                        {/* Mock Browser Header */}
                        <div className="relative flex h-14 items-center border-b border-black/3 px-8 bg-neutral-50/30 backdrop-blur-md">
                            <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-[#FF5F56] opacity-80" />
                                <div className="h-3 w-3 rounded-full bg-[#FFBD2E] opacity-80" />
                                <div className="h-3 w-3 rounded-full bg-[#27C93F] opacity-80" />
                            </div>
                            <div className="mx-auto text-[11px] font-medium text-secondary tracking-widest uppercase opacity-40">useWafe Business Automation</div>
                        </div>

                        {/* Dashboard Mockup Content */}
                        <div className="relative grid grid-cols-1 md:grid-cols-4 h-[600px] overflow-hidden">
                            {/* Sidebar */}
                            <div className="hidden md:block border-r border-black/3 bg-neutral-50/20 p-8">
                                <div className="relative w-8 h-8 rounded-lg overflow-hidden mb-12 border border-black/5 opacity-80">
                                    <Image src="/logo.png" alt="Mini Logo" fill className="object-contain" />
                                </div>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`h-12 w-full rounded-2xl mb-4 transition-all ${i === 1 ? 'bg-white shadow-md' : 'bg-transparent opacity-30'}`} />
                                ))}
                            </div>

                            {/* Main Content Area */}
                            <div className="col-span-3 p-10 bg-white structure-grid flex flex-col gap-8">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="h-10 w-48 rounded-2xl bg-black/3" />
                                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="h-40 rounded-[28px] bg-neutral-50 border border-black/2 p-6 shadow-xs scale-100 transition-transform group-hover:scale-[1.02] duration-700">
                                        <div className="h-4 w-24 bg-black/5 rounded-full mb-4" />
                                        <div className="h-8 w-32 bg-black/8 rounded-full" />
                                    </div>
                                    <div className="h-40 rounded-[28px] bg-neutral-50 border border-black/2 p-6 shadow-xs scale-100 transition-transform group-hover:scale-[1.02] duration-700 delay-100">
                                        <div className="h-4 w-24 bg-black/5 rounded-full mb-4" />
                                        <div className="h-8 w-16 bg-black/8 rounded-full" />
                                    </div>
                                </div>

                                <div className="flex-1 rounded-[28px] border-2 border-dashed border-black/3 bg-neutral-50/50 flex flex-col items-center justify-center gap-4 group/inner">
                                    <div className="w-16 h-16 rounded-3xl bg-white shadow-lg flex items-center justify-center transition-transform group-hover/inner:rotate-12">
                                        <div className="w-6 h-6 border-2 border-action rounded-md" />
                                    </div>
                                    <p className="text-secondary text-sm font-medium opacity-40 uppercase tracking-widest">Connect your WhatsApp to start</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
