"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";

export function ContactForm({ dict }: { dict: any }) {
    const { fields, title, subtitle, trustText } = dict.Contact;
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            storeName: formData.get('storeName'),
            personName: formData.get('personName'),
            whatsapp: formData.get('whatsapp'),
            orders: formData.get('orders'),
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || 'Failed to send email');
            }

            setStatus('success');
        } catch (error: any) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        }
    };

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

                    <Card className="p-10 md:p-14 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-action/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-action" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-foreground mb-4">Request Sent!</h3>
                                    <p className="text-lg text-secondary font-medium max-w-sm">
                                        Thank you for your interest. We'll reach out to you on WhatsApp very soon.
                                    </p>
                                    <Button
                                        onClick={() => setStatus('idle')}
                                        variant="outline"
                                        className="mt-8 rounded-xl px-8"
                                    >
                                        Send another request
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-8"
                                >
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="block text-sm font-semibold text-foreground/70 uppercase tracking-widest ml-1">{fields.storeName}</label>
                                            <input
                                                name="storeName"
                                                required
                                                type="text"
                                                className="w-full bg-neutral-50 border border-black/3 rounded-2xl px-6 py-4 text-foreground placeholder:text-secondary/40 focus:outline-none focus:border-action/50 focus:ring-4 focus:ring-action/5 transition-all outline-hidden"
                                                placeholder="..."
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="block text-sm font-semibold text-foreground/70 uppercase tracking-widest ml-1">{fields.personName}</label>
                                            <input
                                                name="personName"
                                                required
                                                type="text"
                                                className="w-full bg-neutral-50 border border-black/3 rounded-2xl px-6 py-4 text-foreground placeholder:text-secondary/40 focus:outline-none focus:border-action/50 focus:ring-4 focus:ring-action/5 transition-all outline-hidden"
                                                placeholder="..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="block text-sm font-semibold text-foreground/70 uppercase tracking-widest ml-1">{fields.whatsapp}</label>
                                        <input
                                            name="whatsapp"
                                            required
                                            type="tel"
                                            className="w-full bg-neutral-50 border border-black/[0.03] rounded-2xl px-6 py-4 text-foreground placeholder:text-secondary/40 focus:outline-none focus:border-action/50 focus:ring-4 focus:ring-action/5 transition-all outline-hidden"
                                            placeholder="+966 5..."
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="block text-sm font-semibold text-foreground/70 uppercase tracking-widest ml-1">{fields.orders}</label>
                                        <div className="relative">
                                            <select
                                                name="orders"
                                                className="w-full bg-neutral-50 border border-black/[0.03] rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-action/50 focus:ring-4 focus:ring-action/5 transition-all appearance-none outline-hidden"
                                            >
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

                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600"
                                        >
                                            <AlertCircle className="w-5 h-5 shrink-0" />
                                            <p className="text-sm font-medium">{errorMessage}</p>
                                        </motion.div>
                                    )}

                                    <Button
                                        disabled={status === 'loading'}
                                        type="submit"
                                        className="w-full h-16 rounded-2xl text-lg font-bold bg-action text-white hover:scale-[1.01] transition-transform shadow-xl shadow-action/20 border-none relative overflow-hidden"
                                        size="lg"
                                    >
                                        {status === 'loading' ? (
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                        ) : (
                                            fields.submit
                                        )}
                                    </Button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </Card>

                    <div className="mt-16 text-center space-y-6">
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-secondary text-sm font-semibold uppercase tracking-widest opacity-40">{dict.Contact.directContact}</p>
                            <a href="https://wa.me/966550623623" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="rounded-full px-8 h-14 border-accent/20 text-accent hover:bg-accent/5 transition-all gap-3 font-bold cursor-pointer">
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
