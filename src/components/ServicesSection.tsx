"use client";

import { motion } from "framer-motion";

export function ServicesSection() {
    const services = [
        { num: "01", title: "Digital Strategy", desc: "Aligning business objectives with high-end digital experiences." },
        { num: "02", title: "Brand Identity", desc: "Crafting visual languages that communicate quiet luxury." },
        { num: "03", title: "UI/UX Design", desc: "Intuitive, seamless interfaces designed to convert." },
        { num: "04", title: "Creative Development", desc: "Pixel-perfect execution with modern frameworks." },
        { num: "05", title: "Motion & Interaction", desc: "Subtle micro-animations that breathe life into the web." },
        { num: "06", title: "E-Commerce", desc: "Bespoke storefronts tailored for premium brands." },
    ];

    return (
        <section id="services" className="py-24 md:py-32 bg-[var(--color-ink)] text-[var(--color-linen)]">
            <div className="container mx-auto px-6">

                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
                    >
                        Capabilities <span className="italic text-[var(--color-gold)]">&</span> Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="font-sans text-sm md:text-base opacity-70 leading-relaxed text-balance mx-auto max-w-xl"
                    >
                        We don't just build websites. We architect digital presences that act as your most sophisticated ambassador.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="group border-t border-[var(--color-linen)]/10 pt-6 relative overflow-hidden flex flex-col items-start"
                        >
                            {/* Expanding Gold Line */}
                            <motion.div
                                className="absolute top-[-1px] left-0 h-[1px] bg-[var(--color-gold)] w-0 group-hover:w-full transition-all duration-700 ease-[0.25,0.46,0.45,0.94]"
                                whileInView={{ width: "30%" }} // trigger a base width on scroll, expand on hover
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, delay: 0.3 + (i * 0.1), ease: [0.25, 0.46, 0.45, 0.94] }}
                            />

                            <span className="font-mono text-[var(--color-gold)] tracking-widest text-sm mb-4 block">
                                {service.num}
                            </span>
                            <h3 className="font-serif text-2xl mb-3 tracking-wide group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="font-sans opacity-60 text-sm leading-relaxed pb-4">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
