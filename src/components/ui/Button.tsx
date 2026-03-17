import { twMerge } from 'tailwind-merge';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
}

export function Button({
    className,
    variant = 'primary',
    fullWidth = false,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-dark hover:from-brand-gold-dark hover:to-brand-gold shadow-lg shadow-brand-gold/30 focus:ring-brand-gold",
        secondary: "bg-brand-default text-white hover:bg-brand-default/90 shadow-md focus:ring-brand-default",
        outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10 focus:ring-brand-gold",
    };

    const widthStyles = fullWidth ? "w-full py-4 text-lg" : "px-8 py-3 text-base md:text-lg";

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], widthStyles, className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}
