"use client";

import { motion } from "framer-motion";

export function PricingSection() {
    const tiers = [
        {
            name: "The Starter Launch",
            price: "$850 — $1,200",
            desc: "Ideal For: Solopreneurs / Small Biz",
            features: ["Custom UI/UX Design", "Framer Motion Animations", "CMS Integration", "Technical SEO", "Standard Support"],
        },
        {
            name: "The Editorial Pro",
            price: "$1,800 — $2,500",
            desc: "Ideal For: Growing Agencies / Spas",
            features: ["Advanced Interactive WebGL", "E-Commerce Architecture", "Bespoke Branding", "Copywriting Strategy", "Priority Retainer"],
            popular: true,
        },
        {
            name: "The Elite Experience",
            price: "$3,500+",
            desc: "Ideal For: High-End Luxury Brands",
            features: ["Dedicated Development Team", "Continuous Iteration", "Performance SLAs", "Custom Back-ends", "Strategy Consulting"],
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-[var(--color-linen)]">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
                    >
                        Investment
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="font-sans text-sm md:text-base opacity-70 leading-relaxed text-balance"
                    >
                        Transparent elite pricing. No hidden fees. Just uncompromising quality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className={`relative border p-8 md:p-10 flex flex-col group transition-colors duration-500 ${tier.popular
                                ? "border-[var(--color-gold)] bg-[var(--color-ink)] text-[var(--color-linen)] shadow-xl"
                                : "border-[var(--color-ink)]/10 bg-transparent hover:border-[var(--color-ink)]/30"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs font-mono tracking-widest uppercase px-4 py-1">
                                    Most Selected
                                </div>
                            )}

                            <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
                            <div className="font-mono text-3xl mb-6 tracking-tight">
                                {tier.popular ? <span className="text-[var(--color-gold)]">{tier.price}</span> : tier.price}
                            </div>

                            <p className={`font-sans text-sm leading-relaxed pb-8 border-b ${tier.popular ? 'border-[var(--color-linen)]/20 opacity-90' : 'border-[var(--color-ink)]/10 opacity-70'}`}>
                                {tier.desc}
                            </p>

                            <ul className="py-8 space-y-4 flex-grow">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-sans text-sm opacity-80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`mt-auto w-full py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 border ${tier.popular
                                ? "bg-[var(--color-gold)] border-[var(--color-gold)] text-[var(--color-ink)] hover:bg-transparent hover:text-[var(--color-gold)]"
                                : "bg-transparent border-[var(--color-ink)]/20 hover:bg-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                                }`}>
                                Inquire
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
