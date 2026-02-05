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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                    {dict.TargetAudience.items.map((item: { title: string, desc: string }, i: number) => {
                        const Icon = icons[i] || Store;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="h-20 w-20 rounded-2xl bg-neutral-50 border border-black/[0.03] flex items-center justify-center mb-8 shadow-sm group-hover:shadow-xl group-hover:bg-action/5 group-hover:border-action/10 transition-all duration-500">
                                    <Icon className="w-8 h-8 text-foreground group-hover:text-action transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground tracking-tight mb-4 group-hover:text-action transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-secondary font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
