import { Section } from './layout/Section';
import { motion } from 'framer-motion';
import { BookOpen, Utensils, Coffee, Sparkles } from 'lucide-react';

export function MethodSection() {
    const pillars = [
        {
            icon: <BookOpen className="w-10 h-10 text-brand-gold" />,
            title: 'Devocional da Mulher Virtuosa',
            description: 'Devocionais diários para fortalecer seu espírito e seu relacionamento com Deus.',
            tag: 'Fortalecimento Espiritual'
        },
        {
            icon: <Utensils className="w-10 h-10 text-brand-gold" />,
            title: 'Alimentação Anti-inflamatória',
            description: 'Receitas anti-inflamatórias práticas e baratas que "desincham" rapidamente o corpo e "limpam" a mente. Comida de verdade para quem não tem tempo a perder na cozinha.',
            tag: 'Nutrição do Templo'
        },
        {
            icon: <Coffee className="w-10 h-10 text-brand-gold" />,
            title: 'Rotina Leve',
            description: 'Como começar seu dia em comunhão e energia em apenas 5 minutos, sem precisar acordar horas mais cedo ou se sentir ainda mais sobrecarregada.',
            tag: 'Governo da Rotina'
        }
    ];

    return (
        <Section className="bg-white py-24 md:py-32 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-3xl opacity-20"></div>

            <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs font-bold uppercase tracking-[0.2em] mb-8"
                >
                    <Sparkles className="w-4 h-4" />
                    A Metodologia Efeito Leve
                </motion.div>

                <h3 className="text-4xl md:text-6xl font-serif text-brand-dark mb-10 leading-tight">
                    O Caminho para a <span className="text-brand-gold italic">Restauração Total</span>
                </h3>

                <p className="text-lg md:text-xl text-brand-dark/50 max-w-2xl mx-auto font-light leading-relaxed">
                    Não propomos dietas milagrosas. Propomos um retorno ao equilíbrio que Deus planejou para você através de três pilares inegociáveis:
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-16 relative z-10">
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, delay: index * 0.25, ease: "easeOut" }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="mb-10 relative">
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            <div className="relative w-24 h-24 bg-brand-light rounded-3xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-brand-gold/10 group-hover:border-brand-gold/40 transition-all duration-700 group-hover:-translate-y-2">
                                {pillar.icon}
                            </div>
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-default mb-4">
                            {pillar.tag}
                        </span>

                        <h4 className="text-2xl font-serif font-bold text-brand-dark mb-5 group-hover:text-brand-gold transition-colors duration-500">
                            {pillar.title}
                        </h4>

                        <p className="text-brand-dark/50 leading-relaxed text-base font-light px-6">
                            {pillar.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Final Section Quote */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mt-32 text-center"
            >
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent mx-auto mb-10"></div>
                <p className="max-w-xl mx-auto text-brand-dark/40 italic font-serif text-lg leading-relaxed">
                    "O Efeito Leve é a ponte entre a mulher que você é hoje e o Templo frutífero que Deus quer que você seja."
                </p>
            </motion.div>
        </Section>
    );
}
