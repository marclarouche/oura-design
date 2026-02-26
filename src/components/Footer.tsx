export function Footer() {
    return (
        <footer className="bg-[var(--color-ink)] text-[var(--color-linen)] py-12 md:py-20 mt-32 border-t border-[var(--color-linen)]/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-4 relative z-10">
                    <img
                        src="/logo-footer.jpg"
                        alt="Oura Design Logo"
                        className="h-[80px] w-auto object-contain opacity-80 mix-blend-darken"
                        style={{ filter: "grayscale(100%) brightness(0.8)" }}
                    />
                    <p className="text-sm opacity-60 font-medium">
                        Crafting experiences that command attention.
                    </p>
                </div>

                <div className="flex flex-col md:items-end gap-6 relative z-10">
                    <nav className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-sm uppercase tracking-widest hover:text-[var(--color-gold)] transition-colors"
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            className="text-sm uppercase tracking-widest hover:text-[var(--color-gold)] transition-colors"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="text-sm uppercase tracking-widest hover:text-[var(--color-gold)] transition-colors"
                        >
                            LinkedIn
                        </a>
                    </nav>
                    <p className="text-xs opacity-40 font-mono tracking-widest uppercase">
                        Designed & Built by Oura Design &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
