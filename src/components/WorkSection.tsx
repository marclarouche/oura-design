"use client";

import { motion } from "framer-motion";

export function WorkSection() {
    const projects = [
        {
            title: "Maison Noir",
            category: "E-Commerce",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2800&auto=format&fit=crop", // luxury interior
            width: "col-span-12 md:col-span-7",
        },
        {
            title: "Luxe Atelier",
            category: "Brand Identity",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2800&auto=format&fit=crop", // minimalist brutalist architecture
            width: "col-span-12 md:col-span-5",
            offset: "md:mt-32",
        },
        {
            title: "Aura Beauty",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2800&auto=format&fit=crop", // minimalist luxury room
            width: "col-span-12 md:col-span-6 md:col-start-4",
        },
    ];

    return (
        <section id="work" className="py-20 md:py-32 bg-[var(--color-linen)]">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
                        Selected <span className="italic text-[var(--color-gold)]">Work</span>
                    </h2>
                    <p className="max-w-xs font-sans text-sm md:text-base opacity-70 leading-relaxed text-balance">
                        A curated collection of digital experiences designed for those who value luxury over excess.
                    </p>
                </motion.div>

                {/* Portfolio Cards Grid */}
                <div className="grid grid-cols-12 gap-8 md:gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className={`group flex flex-col gap-4 cursor-pointer relative ${project.width} ${project.offset || ""}`}
                        >
                            {/* Image Container with hover state */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[var(--color-ink)]/5 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500 ease-out">
                                {/* Scale 1.02 effect on image */}
                                <motion.div
                                    className="w-full h-full bg-cover bg-center origin-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                            </div>

                            {/* Details + Bottom Gold Line */}
                            <div className="flex items-center justify-between pb-4 relative overflow-hidden">
                                <div>
                                    <h3 className="font-serif font-medium text-2xl group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="font-mono text-xs uppercase tracking-widest mt-1 opacity-50">
                                        {project.category}
                                    </p>
                                </div>
                                {/* Animated Gold Line underneath */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-ink)]/10" />
                                <div className="absolute bottom-0 left-0 h-[1px] bg-[var(--color-gold)] w-0 group-hover:w-full transition-all duration-700 ease-[0.25,0.46,0.45,0.94]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
