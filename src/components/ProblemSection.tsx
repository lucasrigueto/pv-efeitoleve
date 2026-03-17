import { Section } from './layout/Section';
import { motion } from 'framer-motion';
import { Activity, Flame, Zap, Quote } from 'lucide-react';

export function ProblemSection() {
    const cards = [
        {
            icon: <Zap className="w-6 h-6 text-brand-gold" />,
            iconBg: 'bg-brand-gold/10',
            title: 'Exaustão que Paralisa',
            text: 'Você acorda já querendo que o dia acabe. Seu corpo está pesado e sua mente "nublada", impedindo que você cuide da sua família com a alegria que gostaria.'
        },
        {
            icon: <Activity className="w-6 h-6 text-brand-gold" />,
            iconBg: 'bg-brand-gold/10',
            title: 'Irritabilidade e Culpa',
            text: 'A falta de energia física se transforma em estresse emocional. Pequenas coisas te tiram do sério, e a culpa por não ser a "mulher virtuosa" que você deseja ser te persegue.'
        },
        {
            icon: <Flame className="w-6 h-6 text-brand-gold" />,
            iconBg: 'bg-brand-gold/10',
            title: 'Frieza Espiritual',
            text: 'Quando finalmente você tem um minuto para orar ou ler a Palavra, o cansaço te vence. Sua conexão com Deus fica em segundo plano porque seu Templo está sem fôlego.'
        }
    ];

    return (
        <Section className="bg-brand-paper py-24 md:py-32 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-light to-transparent opacity-50"></div>

            <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex justify-center mb-8"
                >
                    <Quote className="w-12 h-12 text-brand-gold/20" />
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-3xl md:text-6xl font-serif text-brand-dark mb-10 leading-tight"
                >
                    "Onde foi parar aquela mulher que acordava com disposição para <span className="italic text-brand-gold">servir e orar</span>?"
                </motion.h3>

                <p className="text-lg md:text-xl text-brand-dark/60 leading-relaxed max-w-3xl mx-auto font-light">
                    Lembra de quando você tinha energia para cuidar da sua casa com alegria e ainda sobrava fôlego para o seu tempo com Deus?
                    Hoje, você não é preguiçosa. O Templo (seu corpo) pode estar em modo de sobrevivência devido à <span className="text-brand-gold font-bold">Inflamação Silenciosa</span>.
                </p>
            </div>

            {/* Grid de Cards - Design mais Premium e Espaçado */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                        className="group relative p-10 rounded-[2.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-brand-gold/5 hover:border-brand-gold/20 transition-all duration-700"
                    >
                        <div className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700`}>
                            {card.icon}
                        </div>
                        <h4 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                            {card.title}
                        </h4>
                        <p className="text-brand-dark/50 text-base leading-relaxed font-light">
                            {card.text}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* The Mechanism Hook - Refined Visual */}
            <div className="max-w-4xl mx-auto mt-20 relative">
                <div className="absolute inset-0 bg-brand-dark rounded-[3rem] shadow-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-[3rem]"></div>

                <div className="relative px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-6 block">A questão é</span>
                        <h4 className="text-2xl md:text-4xl font-serif text-white mb-8 leading-tight">
                            Não é falta de força de vontade. <br />
                            É <span className="text-brand-gold italic">Inflamação no Templo</span>.
                        </h4>
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
                            Quando as toxinas e o cortisol travam sua energia, sua luz se apaga.
                            O Efeito Leve foi criado para desativar esse modo de sobrevivência e reacender sua chama vital.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
