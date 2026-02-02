"use client";

import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { ShoppingBag, Instagram, Store } from "lucide-react";

const icons = [ShoppingBag, Instagram, Store];

export function TargetAudience({ lang, dict }: { lang: "en" | "ar", dict: any }) {
    return (
        <section className="py-24 bg-white border-y border-black/[0.03]">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-semibold text-center text-foreground mb-16 tracking-tight"
                >
                    {dict.TargetAudience.title}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {dict.TargetAudience.items.map((label: string, i: number) => {
                        const Icon = icons[i] || Store;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className="h-28 w-28 rounded-full bg-neutral-50 border border-black/[0.03] flex items-center justify-center mb-8 shadow-sm group-hover:shadow-xl transition-all duration-700 active:scale-95">
                                    <Icon className="w-10 h-10 text-foreground group-hover:text-action transition-colors duration-500" />
                                </div>
                                <span className="text-xl font-semibold text-foreground tracking-tight group-hover:text-action transition-colors">{label}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
