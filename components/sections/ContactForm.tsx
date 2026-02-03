"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function ContactForm({ dict }: { dict: any }) {
    const { fields, title, subtitle, trustText } = dict.Contact;

    return (
        <section id="contact" className="py-32 bg-neutral-50/50">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-semibold text-foreground mb-6 tracking-tight">{title}</h2>
                        <p className="text-xl text-secondary font-medium">{subtitle}</p>
                    </motion.div>

                    <Card className="p-10 md:p-14">
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="block text-sm font-semibold text-foreground/70 uppercase tracking-widest ml-1">{fields.storeName}</label>
                                    <input type="text" className="w-full bg-neutral-50 border border-black/3 rounded-2xl px-6 py-4 text-foreground placeholder:text-secondary/40 focus:outline-none focus:border-action/50 focus:ring-4 focus:ring-action/5 transition-all outline-hidden" placeholder="..." />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-sm font-semibold text-foreground/70 uppercase tracking-widest ml-1">{fields.personName}</label>
                                    <input type="text" className="w-full bg-neutral-50 border border-black/3 rounded-2xl px-6 py-4 text-foreground placeholder:text-secondary/40 focus:outline-none focus:border-action/50 focus:ring-4 focus:ring-action/5 transition-all outline-hidden" placeholder="..." />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-sm font-semibold text-foreground/70 uppercase tracking-widest ml-1">{fields.whatsapp}</label>
                                <input type="tel" className="w-full bg-neutral-50 border border-black/[0.03] rounded-2xl px-6 py-4 text-foreground placeholder:text-secondary/40 focus:outline-none focus:border-action/50 focus:ring-4 focus:ring-action/5 transition-all outline-hidden" placeholder="+966 5..." />
                            </div>

                            <div className="space-y-3">
                                <label className="block text-sm font-semibold text-foreground/70 uppercase tracking-widest ml-1">{fields.orders}</label>
                                <div className="relative">
                                    <select className="w-full bg-neutral-50 border border-black/[0.03] rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-action/50 focus:ring-4 focus:ring-action/5 transition-all appearance-none outline-hidden">
                                        <option>0 - 100</option>
                                        <option>100 - 500</option>
                                        <option>500 - 1000</option>
                                        <option>1000+</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full h-16 rounded-2xl text-lg font-bold bg-action text-white hover:scale-[1.01] transition-transform shadow-xl shadow-action/20 border-none" size="lg">
                                {fields.submit}
                            </Button>
                        </form>
                    </Card>

                    <div className="mt-16 text-center space-y-6">
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-secondary text-sm font-semibold uppercase tracking-widest opacity-40">{dict.Contact.directContact}</p>
                            <a href="https://wa.me/201014161748" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="rounded-full px-8 h-14 border-accent/20 text-accent hover:bg-accent/5 transition-all gap-3 font-bold">
                                    <MessageCircle className="w-5 h-5" />
                                    {dict.Contact.whatsappButton}
                                </Button>
                            </a>
                        </div>
                        <p className="text-secondary text-sm font-medium italic opacity-60">{trustText}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
