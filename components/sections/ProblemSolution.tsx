"use client";

import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function ProblemSolution({ lang, dict }: { lang: "en" | "ar", dict: any }) {
    const isRtl = lang === 'ar';

    return (
        <section className="py-32 bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-12 leading-tight">
                            {dict.ProblemSolution.title}
                        </h2>
                        <div className="space-y-6">
                            {dict.ProblemSolution.painPoints.map((point: string, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <XCircle className="w-6 h-6 text-red-500/60 shrink-0 mt-1" />
                                    <span className="text-xl text-secondary font-medium">{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full" />
                        <div className="relative bg-neutral-50/50 border border-black/[0.03] rounded-[32px] p-12 shadow-sm">
                            <div className="flex items-center gap-5 mb-8 text-accent">
                                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-semibold text-foreground tracking-tight">{dict.ProblemSolution.solutionTitle}</h3>
                            </div>
                            <p className="text-2xl text-secondary font-medium leading-relaxed">
                                {dict.ProblemSolution.solution}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
