"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Our standard engagements run between 8 to 12 weeks, depending on the scope of digital architecture and custom WebGL requirements. We prioritize quality over speed, ensuring every interaction is flawless."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Absolutely. Our 'Partner' tier includes ongoing digital stewardship, and all projects include a 30-day post-launch warranty to ensure perfect performance and zero friction."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We build primarily on the modern React ecosystem (Next.js) coupled with Tailwind CSS for styling, Framer Motion for micro-interactions, and custom Three.js implementations for immersive 3D web experiences."
    },
    {
        question: "How does the Discovery phase work?",
        answer: "It begins with an exhaustive audit of your current digital presence, followed by strategic workshops to codify your brand DNA and align our creative direction with your long-term business objectives."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    return (
        <section className="py-24 md:py-32 bg-[var(--color-ink)] text-[var(--color-linen)]">
            <div className="container mx-auto px-6 max-w-4xl">

                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
                    >
                        Inquiries
                    </motion.h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="border-b border-[var(--color-linen)]/10 pb-6 group"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between text-left py-2 hover:text-[var(--color-gold)] transition-colors duration-300"
                                >
                                    <span className="font-serif text-xl md:text-2xl pr-8">{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="flex-shrink-0 text-[var(--color-gold)]"
                                    >
                                        <ChevronDown className="w-6 h-6 stroke-[1.5]" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="font-sans text-sm md:text-base opacity-70 leading-relaxed pt-6 pb-2 pr-12">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
