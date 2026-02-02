"use client";

import { Container } from "../ui/Container";
import { motion } from "framer-motion";

export function FAQ({ dict }: { dict: any }) {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-semibold text-center text-foreground mb-16 tracking-tight"
                    >
                        {dict.FAQ.title}
                    </motion.h2>
                    <div className="space-y-6">
                        {dict.FAQ.items.map((item: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-3xl bg-neutral-50/50 border border-black/[0.02] hover:bg-white hover:shadow-xl hover:shadow-black/[0.02] transition-all duration-500"
                            >
                                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-action transition-colors">{item.question}</h3>
                                <p className="text-secondary font-medium leading-relaxed opacity-80">{item.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
