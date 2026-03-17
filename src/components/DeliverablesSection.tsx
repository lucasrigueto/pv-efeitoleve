import { Section } from './layout/Section';
import { motion } from 'framer-motion';
import { BookOpen, Utensils, Calendar, ShoppingCart, Zap, Sparkles } from 'lucide-react';

export function DeliverablesSection() {
    const mainDeliverables = [
        {
            icon: <BookOpen className="w-7 h-7 text-brand-gold" />,
            title: 'Devocional da Mulher Virtuosa',
            description: 'Devocionais diários onde começamos o dia já alinhados à Palavra de Deus.',
        },
        {
            icon: <Utensils className="w-7 h-7 text-brand-gold" />,
            title: 'Guia Alimentar Anti-inflamatório',
            description: 'O seu mapa para desinflamar. Receitas deliciosas e rápidas, sem contagem de calorias, focando em alimentos que Deus criou para nutrir e curar.',
        },
        {
            icon: <Calendar className="w-7 h-7 text-brand-gold" />,
            title: 'Rotina Leve',
            description: 'Como começar seu dia em comunhão e energia em apenas 5 minutos, sem precisar acordar horas mais cedo ou se sentir ainda mais sobrecarregada.',
        },
    ];

    const bonuses = [
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: 'Bônus 1: Guia de Compras "Sem Erros"',
            description: 'O que ter na despensa para facilitar sua rotina.'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Bônus 2: Treinos Você em Movimento',
            description: '10 minutos para fazer em casa e gerar energia, não exaustão.'
        }
    ];

    return (
        <Section className="bg-brand-paper py-28 md:py-40 overflow-hidden relative">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full -z-10 -translate-y-1/2 translate-x-1/4"></div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
                    >
                        Sua Entrega Completa
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-12 leading-tight">
                        Tudo o que você precisa para os próximos <span className="text-brand-gold italic">21 dias</span>:
                    </h2>

                    <div className="space-y-10 mb-16">
                        {mainDeliverables.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                className="flex gap-8 items-start group"
                            >
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-[0_15px_30px_rgba(0,0,0,0.03)] border border-brand-gold/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-all duration-500 group-hover:-translate-y-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-2xl text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                                    <p className="text-brand-dark/50 text-base leading-relaxed font-light">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Premium Bonus Box */}
                    <div className="p-10 rounded-[2.5rem] bg-brand-dark text-white relative overflow-hidden border border-brand-gold/20 shadow-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 blur-3xl rounded-full -z-0"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-default/10 blur-3xl rounded-full -z-0"></div>

                        <h3 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm mb-10 flex items-center gap-3">
                            <Sparkles className="w-5 h-5" />
                            Exclusivo para esta Turma
                        </h3>

                        <div className="space-y-8 relative z-10">
                            {bonuses.map((bonus, index) => (
                                <div key={index} className="flex gap-6 items-center group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500">
                                        {bonus.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base text-brand-gold mb-1">{bonus.title}</h4>
                                        <p className="text-white/40 text-sm font-light leading-snug">{bonus.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Visual Mockup Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative lg:block hidden"
                >
                    <div className="relative h-[700px] w-full flex items-center justify-center">
                        {/* Background Aura */}
                        <div className="absolute inset-0 bg-brand-gold/5 blur-[120px] rounded-full"></div>

                        {/* Floating elements representing the digital product */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-10 w-64 h-[420px] bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-brand-gold/10 rotate-6 overflow-hidden"
                        >
                            <div className="w-full h-1/2 bg-brand-paper p-6">
                                <div className="w-full h-full bg-brand-gold/10 rounded-xl flex items-center justify-center">
                                    <BookOpen className="w-16 h-16 text-brand-gold/40" />
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="h-2 w-3/4 bg-brand-paper rounded-full mb-3"></div>
                                <div className="h-2 w-1/2 bg-brand-paper rounded-full mb-8"></div>
                                <div className="h-8 w-full bg-brand-gold/20 rounded-lg"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-40 left-0 w-64 h-[420px] bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-brand-gold/10 -rotate-3 overflow-hidden z-20"
                        >
                            <div className="w-full h-1/2 bg-brand-dark p-6">
                                <div className="w-full h-full bg-brand-gold/5 rounded-xl flex items-center justify-center">
                                    <Utensils className="w-16 h-16 text-brand-gold" />
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="h-2 w-3/4 bg-brand-paper rounded-full mb-3"></div>
                                <div className="h-2 w-1/2 bg-brand-paper rounded-full mb-8"></div>
                                <div className="h-8 w-full bg-brand-gold/10 rounded-lg"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-10 left-32 w-80 h-48 bg-brand-gold text-brand-dark rounded-3xl shadow-2xl z-30 p-8 flex flex-col justify-center border-4 border-white"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-widest mb-2">Acesso Exclusivo</span>
                            <p className="text-3xl font-serif italic font-bold leading-tight">Programa Restauração 21 Dias</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
