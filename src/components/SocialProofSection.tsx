import { Section } from './layout/Section';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function SocialProofSection() {
    const testimonials = [
        {
            text: "Eu perdi 8cm de cintura no primeiro desafio, mas o melhor foi a energia. Eu não conseguia mais brincar com meus meninos sem cansar ou estressar. Hoje me sinto muito melhor com meu corpo e consigo cuidar da minha família com alegria.",
            author: "Ana Carla, 34 anos",
            role: "Mãe de 3",
            image: "./anacarla.webp"
        },
        {
            text: "O Efeito Leve me ensinou que cuidar do meu templo é um ato de adoração. Perdi o peso que me incomodava e senti que ganhei uma disposição que eu não tinha há muito tempo.",
            author: "Juliana Mendes, 41 anos",
            role: "Lider de Mulheres",
            image: "./julianamendes.webp"
        },
        {
            text: "Amei a parte espiritual. Emagrecer virou consequência natural de estar em comunhão com Deus e bem comigo mesma.",
            author: "Patrícia Souza, 47 anos",
            role: "Professora",
            image: "./patriciasouza.webp"
        }
    ];

    return (
        <Section className="bg-white py-24 md:py-32 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>

            <div className="text-center max-w-4xl mx-auto mb-20">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-6 block"
                >
                    Testemunhos de Transformação
                </motion.span>
                <h3 className="text-4xl md:text-6xl font-serif text-brand-dark mb-8 leading-tight">
                    Templos que voltaram a <span className="text-brand-gold italic">irradiar a luz do Senhor</span>
                </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                        className="p-10 bg-brand-paper rounded-[2.5rem] border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500 relative group"
                    >
                        <Quote className="absolute top-8 right-10 w-12 h-12 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors" />

                        <div className="flex gap-1 mb-8">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                            ))}
                        </div>

                        <p className="text-brand-dark/70 italic mb-10 text-lg leading-relaxed font-light">
                            "{t.text}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/20 p-0.5">
                                <img
                                    src={t.image}
                                    alt={t.author}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-serif font-bold text-brand-dark text-lg">{t.author}</p>
                                <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
