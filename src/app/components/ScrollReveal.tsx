import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "left" | "right" | "scale";
    style?: React.CSSProperties;
}

export function ScrollReveal({
    children,
    delay = 0,
    direction = "up",
    style,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px 0px" });

    const hidden =
        direction === "up"
            ? { opacity: 0, y: 48 }
            : direction === "left"
                ? { opacity: 0, x: -48 }
                : direction === "right"
                    ? { opacity: 0, x: 48 }
                    : { opacity: 0, scale: 0.88, y: 20 };

    const visible =
        direction === "up"
            ? { opacity: 1, y: 0 }
            : direction === "left"
                ? { opacity: 1, x: 0 }
                : direction === "right"
                    ? { opacity: 1, x: 0 }
                    : { opacity: 1, scale: 1, y: 0 };

    return (
        <motion.div
            ref={ref}
            style={style}
            initial={hidden}
            animate={inView ? visible : hidden}
            transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
