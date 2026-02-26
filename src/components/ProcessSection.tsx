"use client";

import { motion } from "framer-motion";

export function ProcessSection() {
    const steps = [
        { title: "Discovery", desc: "Understanding your brand DNA, market positioning, and core objectives to establish a robust foundation." },
        { title: "Strategy", desc: "Architecting the user journey, wireframing, and aligning creative direction with business goals." },
        { title: "Design", desc: "Crafting the visual language. Typography, motion, and interaction design that speaks volumes." },
        { title: "Launch", desc: "Meticulous development, rigorous QA, and a deployment strategy built for scale." }
    ];

    return (
        <section className="py-24 md:py-32 bg-[var(--color-linen)] overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl flex-shrink-0"
                    >
                        The <span className="italic text-[var(--color-gold)]">Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="font-sans text-sm md:text-base opacity-70 leading-relaxed max-w-lg mt-2 md:mt-4"
                    >
                        A methodical approach to digital excellence. We refine complexity into elegant, high-performing experiences.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Main timeline axis */}
                    <motion.div
                        className="hidden md:block absolute top-[28px] left-0 h-[1px] bg-[var(--color-ink)]/10 w-full z-0"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="flex flex-col relative group"
                            >
                                {/* Visual node */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full border border-[var(--color-ink)]/10 bg-[var(--color-linen)] flex items-center justify-center font-mono text-sm tracking-widest text-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-colors duration-500">
                                        0{i + 1}
                                    </div>
                                </div>

                                <h3 className="font-serif text-2xl mb-3 tracking-wide">{step.title}</h3>
                                <p className="font-sans opacity-60 text-sm leading-relaxed pr-6">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
