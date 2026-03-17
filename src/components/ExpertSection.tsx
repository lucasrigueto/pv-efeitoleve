import { Section } from './layout/Section';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function ExpertSection() {
    return (
        <Section className="bg-brand-paper py-28 md:py-40 relative overflow-hidden">
            {/* Background Decorative Aura */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto relative z-10">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative order-2 md:order-1"
                >
                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] bg-brand-light relative z-10 border-[12px] border-white group">
                        <img
                            src="./diane-expert.webp"
                            alt="Diane Trece - Fundadora da Artesanali e Mentora do Efeito Leve"
                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            loading="lazy"
                        />
                        {/* Inner Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-12 -left-12 w-32 h-32 border border-brand-gold/20 rounded-full border-dashed -z-0"
                    ></motion.div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="order-1 md:order-2"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-3 text-brand-gold font-bold uppercase tracking-[0.4em] text-xs mb-8"
                    >
                        <Sparkles className="w-5 h-5" />
                        Quem sou eu?
                    </motion.div>

                    <h3 className="text-4xl md:text-6xl font-serif text-brand-dark mb-10 leading-tight">
                        "Meu propósito é te ajudar a <span className="italic text-brand-gold">honrar o Templo</span> que Deus de forma leve."
                    </h3>

                    <div className="space-y-8 text-brand-dark/50 text-xl font-light leading-relaxed">
                        <p>
                            Olá, eu sou <span className="text-brand-dark font-normal">Diane Trece</span>. Sou mãe de 3, tenho 44 anos e sou Especialista em Alimentação Saudável. Há 9 anos fundei a Artesanali, uma padaria artesanal onde já ajudamos milhares de mulheres a transformarem sua saúde através de alimentos antinflamatórios.
                        </p>
                        <p>
                            Mas antes de estar nessa posição de te servir, eu fui essa mulher: <span className="text-brand-dark font-normal">exausta</span>, sem ânimo para orar, sentindo que meu corpo era um peso e não um instrumento de Deus.
                        </p>
                        <p>
                            O Efeito Leve nasceu do meu desejo de ver mulheres cristãs recuperarem sua vitalidade. Não para ter o "corpo perfeito" do mundo, mas para ter a <span className="text-brand-gold font-normal">energia do espírito</span> para cumprir seu chamado com alegria.
                        </p>
                    </div>

                    <div className="mt-14 pt-10 border-t border-brand-gold/10 flex items-center gap-6">
                        <div className="text-brand-dark">
                            <p className="font-serif font-bold text-2xl mb-1">Diane Trece</p>
                            <p className="text-xs text-brand-gold uppercase tracking-[0.2em] font-bold">Especialista em Alimentação Saudável</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
