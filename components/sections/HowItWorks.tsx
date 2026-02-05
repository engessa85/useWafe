"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Settings, TrendingUp } from "lucide-react";

export function HowItWorks({ lang, dict }: { lang: "en" | "ar", dict: any }) {

    return (
        <section id="how-it-works" className="py-32 bg-neutral-50/30">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-semibold text-foreground mb-6 tracking-tight"
                        >
                            {dict.HowItWorks.title}<span className="text-secondary opacity-30">.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl text-secondary mb-12 font-medium opacity-60"
                        >
                            {dict.HowItWorks.description}
                        </motion.p>

                        <div className="space-y-12">
                            {dict.HowItWorks.steps.map((step: { title: string, desc: string }, i: number) => {
                                const Icons = [MessageCircle, Settings, TrendingUp];
                                const Icon = Icons[i];
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 }}
                                        className="flex gap-8 group"
                                    >
                                        <div className="h-14 w-14 rounded-2xl bg-white border border-black/[0.03] shadow-sm flex items-center justify-center shrink-0 text-action transition-all group-hover:scale-110 group-hover:bg-action group-hover:text-white duration-500">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-action transition-colors">{step.title}</h3>
                                            <p className="text-secondary font-medium opacity-60 leading-relaxed max-w-sm">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-16"
                        >
                            <Button size="lg" className="rounded-2xl px-10 h-14 bg-foreground text-white hover:bg-foreground/90 transition-all font-semibold">
                                {dict.HowItWorks.cta}
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="aspect-square bg-white rounded-[40px] border border-black/[0.03] p-12 shadow-2xl shadow-black/[0.02] relative overflow-hidden group">
                            <div className="absolute inset-0 structure-grid opacity-[0.4]" />

                            <div className="relative h-full w-full flex flex-col justify-between items-center py-12">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="bg-white border border-black/[0.03] p-6 rounded-3xl w-56 shadow-xl relative z-10"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/20">
                                            <MessageCircle className="text-white w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-2 w-full bg-black/[0.05] rounded-full mb-2" />
                                            <div className="h-2 w-2/3 bg-black/[0.03] rounded-full" />
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-1/2 bg-linear-to-b from-accent/20 via-action/20 to-transparent" />

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="bg-white border-l-4 border-action p-6 rounded-3xl w-56 shadow-xl relative z-10"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-action flex items-center justify-center shadow-lg shadow-blue-500/20">
                                            <TrendingUp className="text-white w-6 h-6" />
                                        </div>
                                        <div className="flex-1 text-sm font-bold text-foreground">{dict.HowItWorks.roiText}</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
