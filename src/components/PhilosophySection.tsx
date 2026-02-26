"use client";

import { motion } from "framer-motion";

export function PhilosophySection() {
    return (
        <section id="philosophy" className="py-24 md:py-40 bg-[var(--color-ink)] text-[var(--color-linen)] overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left Column: Founder Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-[var(--color-linen)]/5 overflow-hidden group"
                    >
                        <motion.div
                            className="w-full h-full bg-cover bg-center origin-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2000&auto=format&fit=crop')" }} // Elegant founder placeholder
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 to-transparent" />

                        {/* Decor minimal text */}
                        <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-[var(--color-linen)]/70">
                            Oura Design / Founder
                        </div>
                    </motion.div>

                    {/* Right Column: Philosophy Quote */}
                    <div className="flex flex-col justify-center">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <span className="font-mono text-[var(--color-gold)] tracking-widest text-sm mb-8 block uppercase">
                                The Philosophy
                            </span>

                            {/* Founder Quote per requirements */}
                            <h2 className="font-serif italic text-3xl md:text-5xl leading-relaxed text-[var(--color-linen)] max-w-2xl text-balance">
                                "Design is the difference between being seen and being remembered."
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="mt-12 space-y-6 opacity-70 font-sans text-sm md:text-base leading-relaxed max-w-lg"
                        >
                            <p>
                                In a digital landscape saturated with noise, quiet confidence stands out. We don't believe in trends or templates; we believe in bespoke architecture that reflects the true echelon of your brand.
                            </p>
                            <p>
                                Every pixel, every interaction, and every word is meticulously crafted. The result is not just a website, but an undeniable presence.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
