"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    // Smooth springs for cursor position
    const cursorX = useSpring(-50, { stiffness: 400, damping: 28 });
    const cursorY = useSpring(-50, { stiffness: 400, damping: 28 });

    useEffect(() => {
        // Disable on touch devices
        if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
            setIsTouch(true);
            return;
        }

        const unmousemove = (e: MouseEvent) => {
            // Offset by half of standard size (8px) to center it
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Triggers hover effect for buttons, links, or specific actionable items
            if (
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", unmousemove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", unmousemove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (isTouch) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none rounded-full border border-[var(--color-gold)]"
            style={{
                x: cursorX,
                y: cursorY,
            }}
            initial={{ width: 16, height: 16, opacity: 1 }}
            animate={{
                width: isHovered ? 40 : 16,
                height: isHovered ? 40 : 16,
                opacity: isHovered ? 0.4 : 1,
                // center adjustment when size changes
                x: isHovered ? cursorX.get() - 12 : cursorX.get(),
                y: isHovered ? cursorY.get() - 12 : cursorY.get(),
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
    );
}
