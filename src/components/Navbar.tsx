"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none",
                scrolled
                    ? "py-4 bg-[var(--color-linen)] shadow-sm"
                    : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 h-[70px] flex pl-0 md:pl-6 items-center justify-between pointer-events-auto relative">

                {/* Mobile hamburger placeholder (left side balance if needed, or right) */}
                {/* "ensure the hamburger menu is balanced on the right." -> Logo center, Hamburger right */}

                {/* Logo - Centered on mobile, left on desktop */}
                <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 h-full flex items-center transition-all duration-700 ease-out",
                    scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                )}>
                    <Link
                        href="/"
                        className="translate-y-0 hover:opacity-80 transition-opacity block h-full flex items-center"
                    >
                        {/* We use an img tag to pull the logo from public/logo.png once the user places it there */}
                        <img
                            src="/logo.jpg"
                            alt="Oura Design Logo"
                            className="h-full w-auto object-contain py-1 max-h-[70px] mix-blend-darken"
                        />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { name: "Work", href: "#work" },
                        { name: "Services", href: "#services" },
                        { name: "Philosophy", href: "#philosophy" },
                        { name: "Contact", href: "#contact" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative group flex items-center justify-center text-[13px] uppercase tracking-widest text-[var(--color-ink)]/80 hover:text-[var(--color-ink)] transition-colors h-[30px]"
                        >
                            <span className="relative z-10">
                                {item.name}
                            </span>
                            <span className="absolute bottom-1 left-0 w-full h-[1px] bg-[var(--color-gold)] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <Link
                    href="#contact"
                    className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-[var(--color-ink)]/20 hover:border-[var(--color-gold)] text-sm font-medium transition-all duration-300 hover:text-[var(--color-gold)] pointer-events-auto group relative overflow-hidden"
                >
                    <span className="absolute inset-0 w-0 bg-[var(--color-gold)]/5 transition-all duration-300 ease-out group-hover:w-full" />
                    <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                        Start a Project
                    </span>
                </Link>

                {/* Mobile Hamburger (Right) */}
                <button className="md:hidden ml-auto flex flex-col gap-[5px] p-2 pr-6">
                    <span className="block w-6 h-[1px] bg-[var(--color-ink)]"></span>
                    <span className="block w-6 h-[1px] bg-[var(--color-ink)] text-right ml-auto"></span>
                </button>
            </div>
        </header>
    );
}
