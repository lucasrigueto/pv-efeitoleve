import { Section } from './layout/Section';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Moon, Heart, ShieldCheck, Sun } from 'lucide-react';

export function TransformationSection() {
    const transformations = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Leveza Abdominal',
            description: 'Logo na primeira semana uma redução visível do inchaço e daquela sensação de peso que te trava.',
        },
        {
            icon: <Sun className="w-8 h-8" />,
            title: 'Ânimo Novo',
            description: 'Energia real para servir sua família e cumprir suas tarefas sem precisar de doses infinitas de café.',
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: 'Governo Emocional',
            description: 'Mais paciência, menos irritabilidade e o fim daquela culpa por descontar o estresse em alguém ou na comida.',
        },
        {
            icon: <Moon className="w-8 h-8" />,
            title: 'Descanso Restaurador',
            description: 'Um sono que realmente repara seu corpo e mente, preparando você para um novo dia de vitórias.',
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Autoestima que Honra',
            description: 'Volte a se olhar no espelho e veja o Templo do Espírito Santo sendo bem cuidado e radiante.',
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: 'Clareza de Propósito',
            description: 'Fim da "névoa mental". Sua mente focada para orar, trabalhar e cuidar do que realmente importa.',
        }
    ];

    return (
        <Section className="bg-brand-paper py-24 md:py-32">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-6 block"
                >
                    O Protocolo de 21 Dias
                </motion.span>
                <h3 className="text-4xl md:text-6xl font-serif text-brand-dark mb-8 leading-tight">
                    O que acontecerá com o<span className="text-brand-gold italic"> Templo</span>?
                </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {transformations.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                        className="group p-10 rounded-[2rem] bg-white border border-brand-gold/5 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mb-8 shadow-sm text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                            {item.icon}
                        </div>

                        <h4 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                        <p className="text-brand-dark/60 leading-relaxed text-base font-light">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mt-24 text-center max-w-3xl mx-auto"
            >
                <p className="text-2xl md:text-3xl font-serif italic text-brand-dark/80 leading-relaxed">
                    "Em apenas 3 semanas, você não terá apenas um corpo diferente. Você terá uma <span className="text-brand-gold font-bold">nova disposição</span> para viver o plano de Deus."
                </p>
            </motion.div>
        </Section>
    );
}
