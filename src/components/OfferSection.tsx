import { Section } from './layout/Section';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { BookOpen, Utensils, Calendar, ShieldCheck, Star, Zap, ShoppingCart, Heart } from 'lucide-react';
import { useUTM } from '../hooks/useUTM';

export function OfferSection() {
    const valueStack = [
        { item: 'Programa Efeito Leve 21 Dias', price: 197 },
        { item: 'Guia Alimentar Anti-inflamatório', price: 97 },
        { item: 'Devocional da Mulher Virtuosa', price: 67 },
        { item: 'Rotina Leve', price: 47 },
        { item: 'Bônus #01: Guia de Compras', price: 47 },
        { item: 'Bônus #02: Treinos Você em Movimento', price: 89 }
    ];

    const totalValue = valueStack.reduce((acc, item) => acc + item.price, 0);
    const utmParams = useUTM();

    return (
        <Section className="bg-brand-paper py-24 md:py-32 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full -z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-6 block"
                    >
                        A Decisão que Restaura Tudo
                    </motion.span>
                    <h3 className="text-4xl md:text-6xl font-serif text-brand-dark mb-8 leading-tight">
                        Seu Templo merece essa <span className="text-brand-gold italic">nova chance</span>
                    </h3>
                </div>

                <div className="grid lg:grid-cols-12 gap-0 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-dark/10 border border-brand-gold/20">
                    {/* Left Side: The "Sacred" Box */}
                    <div className="lg:col-span-7 bg-brand-dark p-10 md:p-16 text-white">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                                <Zap className="w-6 h-6 text-brand-dark" />
                            </div>
                            <h4 className="text-xl font-bold tracking-widest uppercase text-brand-gold">O Que Você Recebe</h4>
                        </div>

                        <div className="space-y-6 mb-12">
                            {valueStack.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                                    className="flex items-center justify-between py-3 border-b border-white/10"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="text-brand-gold">
                                            {index === 0 && <Calendar className="w-5 h-5" />}
                                            {index === 1 && <Utensils className="w-5 h-5" />}
                                            {index === 2 && <BookOpen className="w-5 h-5" />}
                                            {index === 3 && <Zap className="w-5 h-5" />}
                                            {index === 4 && <ShoppingCart className="w-5 h-5" />}
                                            {index === 5 && <Heart className="w-5 h-5" />}
                                        </div>
                                        <span className="text-lg font-light text-white/90">{item.item}</span>
                                    </div>
                                    <span className="text-sm font-bold text-white/30 line-through">R$ {item.price}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-white/60">Valor Total se vendido separado:</span>
                                <span className="text-2xl font-bold text-white/40 line-through">R$ {totalValue},00</span>
                            </div>
                            <div className="flex justify-between items-center text-brand-gold">
                                <span className="text-lg font-bold">Hoje você investe apenas:</span>
                                <span className="text-3xl font-serif italic font-bold">R$ 97,00</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Price Call */}
                    <div className="lg:col-span-5 bg-white p-10 md:p-16 flex flex-col items-center justify-center text-center">
                        <div className="mb-8">
                            <span className="bg-brand-gold/10 text-brand-gold-dark px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                                Acesso Imediato
                            </span>
                        </div>

                        <p className="text-brand-dark/50 font-light mb-2">Por apenas 12 parcelas de:</p>

                        <div className="flex items-baseline justify-center mb-4">
                            <span className="text-2xl font-serif text-brand-dark mr-1">R$</span>
                            <span className="text-8xl font-serif font-bold text-brand-dark">9</span>
                            <span className="text-3xl font-serif font-bold text-brand-dark">,74</span>
                        </div>

                        <p className="text-brand-dark/60 font-light mb-10">ou R$ 97,00 à vista</p>

                        <a href={`https://pay.kiwify.com.br/1h12vFh?split=1${utmParams}`} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="primary" fullWidth className="text-xl py-8 px-10 shadow-2xl shadow-brand-gold/20 hover:scale-105 transition-transform">
                                QUERO MEU TEMPLO RESTAURADO
                            </Button>
                        </a>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center justify-center gap-2 text-brand-dark/40 text-xs font-bold tracking-widest uppercase">
                                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                                <span>Ambiente 100% Seguro</span>
                                <span className="mx-2">•</span>
                                <Star className="w-4 h-4 text-brand-gold" />
                                <span>Garantia de 7 Dias</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 opacity-30">
                                {/* Icons placeholder for payments */}
                                <span className="text-[10px] font-bold">VISA</span>
                                <span className="text-[10px] font-bold">MASTERCARD</span>
                                <span className="text-[10px] font-bold">PIX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
