"use client";

import { motion } from "framer-motion";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-40 bg-[var(--color-linen)] border-t border-[var(--color-ink)]/5">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    <div className="flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="font-serif text-5xl md:text-7xl leading-tight mb-8"
                        >
                            Let's craft <br className="hidden md:block" />
                            <span className="italic text-[var(--color-gold)]">something</span> iconic.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="space-y-6 opacity-80"
                        >
                            <p className="font-sans text-base">
                                Whether you're looking for a complete overhaul or a strategic digital expansion, our inbox is open.
                            </p>

                            <div className="pt-8 space-y-4 font-mono text-sm tracking-widest uppercase">
                                <a href="mailto:hello@ouradesign.com" className="block hover:text-[var(--color-gold)] transition-colors">
                                    hello@ouradesign.com
                                </a>
                                <p className="opacity-50">London — New York — Dubai</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex flex-col justify-center"
                    >
                        <form className="space-y-12" onSubmit={(e) => {
                            e.preventDefault();
                            const name = (document.getElementById('name') as HTMLInputElement).value;
                            const email = (document.getElementById('email') as HTMLInputElement).value;
                            const message = (document.getElementById('message') as HTMLTextAreaElement).value;

                            const mailtoLink = `mailto:hello@ouradesign.com?subject=New Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`)}`;
                            window.location.href = mailtoLink;
                        }}>

                            {/* Minimalist Input Field */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-transparent border-0 border-b border-[var(--color-ink)]/20 py-4 focus:ring-0 focus:border-[var(--color-gold)] transition-colors outline-none font-sans text-lg peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 top-4 font-mono text-sm uppercase tracking-widest text-[var(--color-ink)]/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-gold)] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[var(--color-ink)]/50"
                                >
                                    Your Name
                                </label>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-transparent border-0 border-b border-[var(--color-ink)]/20 py-4 focus:ring-0 focus:border-[var(--color-gold)] transition-colors outline-none font-sans text-lg peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 top-4 font-mono text-sm uppercase tracking-widest text-[var(--color-ink)]/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-gold)] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[var(--color-ink)]/50"
                                >
                                    Email Address
                                </label>
                            </div>

                            <div className="relative group mt-16">
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-transparent border-0 border-b border-[var(--color-ink)]/20 py-4 focus:ring-0 focus:border-[var(--color-gold)] transition-colors outline-none font-sans text-lg peer resize-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 top-4 font-mono text-sm uppercase tracking-widest text-[var(--color-ink)]/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-gold)] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[var(--color-ink)]/50"
                                >
                                    Project Details
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 bg-[var(--color-ink)] text-[var(--color-linen)] font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] w-full md:w-auto"
                            >
                                <span className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                                    Send Inquiry
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
