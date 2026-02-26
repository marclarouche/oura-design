"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const headline = "We Design Experiences That Command Attention.";
    const words = headline.split(" ");

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background ambient gradient */}
            <div className="absolute inset-0 bg-radial-gradient from-[var(--color-linen)] to-[var(--color-linen)]/80 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">

                {/* Logo reveal first */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-8 font-mono text-sm tracking-[0.2em] uppercase text-[var(--color-gold)]"
                >
                    Oura Design Agency
                </motion.div>

                {/* Headline Word-by-Word Reveal */}
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] max-w-5xl mx-auto flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
                    {words.map((word, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.2 + idx * 0.06, // 60ms stagger per word
                            }}
                            className={word.includes("Experiences") || word.includes("Attention") ? "italic text-[var(--color-gold)]" : ""}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                {/* Subtext - Fades in 400ms after the headline finishes */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={mounted ? { opacity: 1 } : {}}
                    transition={{
                        duration: 1,
                        delay: 0.2 + (words.length * 0.06) + 0.4, // 400ms offset
                        ease: "easeOut",
                    }}
                    className="mt-10 font-sans text-lg md:text-xl text-[var(--color-ink)]/70 max-w-2xl mx-auto font-light leading-relaxed text-balance"
                >
                    Crafting bespoke digital presences for brands that refuse to be overlooked.
                    A quiet luxury approach to modern web experiences.
                </motion.p>
            </div>
        </section>
    );
}
