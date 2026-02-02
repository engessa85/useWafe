"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export function CTA({ dict }: { dict: any }) {
    // PDF content mapping:
    // "حوّل واتساب إلى أقوى قناة مبيعات لديك."
    // "ابدأ بأتمتة واتساب"

    return (
        <section className="py-24">
            <Container>
                <div className="relative rounded-[40px] bg-action p-16 md:p-24 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-12 tracking-tight leading-tight">
                            {dict.Hero.title.includes("حوّل") ? dict.Hero.title : "حوّل واتساب إلى أقوى قناة مبيعات لديك."}
                        </h2>
                        <Button size="lg" className="rounded-2xl px-12 h-16 bg-white text-action hover:bg-neutral-50 transition-all text-xl font-bold shadow-2xl shadow-black/10">
                            ابدأ بأتمتة واتساب
                        </Button>
                    </motion.div>

                    {/* Aesthetic bubbles */}
                    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
                </div>
            </Container>
        </section>
    );
}
