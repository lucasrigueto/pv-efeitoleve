import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section id={id} className={twMerge("py-16 md:py-24 px-4 overflow-hidden", className)}>
            <div className="container mx-auto max-w-6xl">
                {children}
            </div>
        </section>
    );
}
