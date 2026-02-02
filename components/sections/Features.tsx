"use client";

import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { motion, Variants } from "framer-motion";
import { MessageCircle, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";

const icons = [MessageCircle, Zap, ShieldCheck];

export function Features({ lang, dict }: { lang: "en" | "ar", dict: any }) {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="features" className="py-32 bg-neutral-50/50">
            <Container>
                <div className="max-w-3xl mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-action font-semibold tracking-widest uppercase text-xs mb-4"
                    >
                        Capabilities
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground"
                    >
                        {dict.Features.title}<span className="text-secondary opacity-30">.</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {dict.Features.items.map((feature: any, i: number) => {
                        const Icon = icons[i];
                        const isLarge = i === 0;

                        return (
                            <motion.div
                                key={i}
                                variants={item}
                                className={isLarge ? "md:col-span-2" : "col-span-1"}
                            >
                                <Card className="h-full group relative overflow-hidden transition-all duration-700 hover:border-black/10">
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-12">
                                            <div className="h-16 w-16 rounded-3xl bg-neutral-50 flex items-center justify-center shadow-xs border border-black/3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                                <Icon className="w-8 h-8 text-foreground" />
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <ArrowUpRight className="w-6 h-6 text-secondary" />
                                            </div>
                                        </div>

                                        <h3 className={`font-semibold tracking-tight text-foreground mb-4 ${isLarge ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`text-secondary font-medium leading-relaxed max-w-md ${isLarge ? 'text-lg' : 'text-base'}`}>
                                            {feature.desc}
                                        </p>
                                    </div>

                                    {/* Aesthetic backgrounds */}
                                    {isLarge && (
                                        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,var(--color-action)_0%,transparent_70%)] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700" />
                                    )}
                                    {!isLarge && (
                                        <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                            <Icon className="w-32 h-32" />
                                        </div>
                                    )}
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}
