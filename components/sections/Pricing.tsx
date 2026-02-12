"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing({ lang, dict }: { lang: "en" | "ar", dict: any }) {
    const { plans, notes } = dict.Pricing;

    return (
        <section id="pricing" className="py-32 bg-white">
            <Container>
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-6"
                    >
                        {dict.Pricing.title}
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {notes.map((note: string, i: number) => (
                            <span key={i} className="text-secondary font-medium text-sm flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-action/40" />
                                {note}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {[
                        { plan: plans.starter, price: "49", popular: false },
                        { plan: plans.pro, price: "99", popular: true }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                        >
                            <Card className={`relative h-full flex flex-col ${item.popular ? 'border-action/20 ring-1 ring-action/10 scale-105 z-10' : ''}`}>
                                {item.popular && (
                                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-action text-white font-bold px-6 py-1.5 rounded-full text-xs tracking-widest uppercase shadow-xl shadow-action/20">
                                        {dict.Pricing.popularBadge}
                                    </div>
                                )}
                                <div className="mb-10">
                                    <h3 className="text-xl font-semibold text-secondary mb-4 uppercase tracking-widest  opacity-60">
                                        {item.plan.name}
                                    </h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-6xl font-semibold text-foreground tracking-tighter">${item.price}</span>
                                        <span className="text-secondary font-medium">/mo</span>
                                    </div>
                                </div>

                                <ul className="space-y-5 mb-12 flex-1">
                                    {item.plan.features.map((feature: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-4 text-secondary font-medium">
                                            <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${item.popular ? 'bg-action/10 text-action' : 'bg-neutral-100 text-secondary'}`}>
                                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                            </div>
                                            <span className="text-lg leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant="primary"
                                    className="w-full h-14 rounded-2xl text-lg font-semibold transition-all bg-action text-white hover:scale-[1.02]"
                                >
                                    {item.plan.name.includes("احجز") || item.plan.name.includes("Book") ? dict.Hero.ctaSecondary : dict.Hero.ctaPrimary}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
