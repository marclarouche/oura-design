"use client";

import { motion } from "framer-motion";

export function MarqueeSection() {
    const clients = [
        "AURA BEAUTY", "LUXE ATELIER", "THE VANGUARD", "MAISON NOIR",
        "AURA BEAUTY", "LUXE ATELIER", "THE VANGUARD", "MAISON NOIR"
    ];

    return (
        <section className="bg-[var(--color-ink)] text-[var(--color-gold)] py-6 md:py-8 overflow-hidden relative">
            {/* Edge gradients for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--color-ink)] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--color-ink)] to-transparent z-10 pointer-events-none" />

            <div className="flex whitespace-nowrap overflow-hidden items-center group">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Slow scrolling
                    }}
                    className="flex whitespace-nowrap min-w-full"
                >
                    {clients.concat(clients).map((client, i) => (
                        <span
                            key={i}
                            className="mx-10 md:mx-16 font-mono text-xs md:text-sm tracking-[0.3em] uppercase opacity-70"
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
