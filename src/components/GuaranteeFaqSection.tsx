import { useState } from 'react';
import { Section } from './layout/Section';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Plus, Minus, Zap } from 'lucide-react';
import { useUTM } from '../hooks/useUTM';

export function GuaranteeFaqSection() {
    const faqs = [
        {
            q: "O que é exatamente o Efeito Leve?",
            a: "É um Programa de 21 dias criado para mulheres cristãs reais. Um método que foca no alinhamento Espírito, Corpo e Alma (mente). Esse equilíbrio faz toda diferença nos resultados."
        },
        {
            q: "Preciso comprar ingredientes caros?",
            a: "Não! O foco é comida de verdade que você encontra em qualquer mercado. O programa foi feito para a mulher que precisa de praticidade e economia."
        },
        {
            q: "O que acontece após a compra?",
            a: "Você recebe acesso imediato ao seu portal do aluno por e-mail. Tudo está pronto para você começar agora mesmo."
        },
        {
            q: "E se eu não gostar do programa?",
            a: "Você tem 7 dias de garantia. Se dentro desse prazo sentir que não é para você, é só pedir o reembolso integral. Sem perguntas, sem burocracia."
        },
        {
            q: "Por quanto tempo tenho acesso?",
            a: "Você tem acesso vitalício! Pode acessar quando quiser, na velocidade que preferir."
        }
    ];
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const utmParams = useUTM();

    return (
        <Section className="bg-white py-24 md:py-32">
            {/* Guarantee Box */}
            <div className="max-w-4xl mx-auto mb-24">
                <div className="bg-brand-paper border border-brand-gold/20 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl shadow-brand-gold/5 relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-all duration-700"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: "backOut" }}
                        className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center shadow-xl mx-auto mb-10"
                    >
                        <ShieldCheck className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="text-3xl md:text-5xl font-serif text-brand-dark mb-6">
                        Sua Restauração é <span className="text-brand-gold italic">Garantida</span>
                    </h3>

                    <p className="text-brand-dark/70 mb-10 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
                        Eu confio tanto no Efeito Leve que tiro todo o risco dos seus ombros. Se em <strong>7 dias</strong> você não sentir que esse é método é a resposta para suas orações, eu devolvo <strong>100% do seu dinheiro</strong>.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-bold tracking-widest text-brand-gold/60 uppercase">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                            7 Dias para Testar
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                            Sem Burocracia
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                            Investimento Protegido
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-4 block"
                    >
                        Perguntas Frequentes
                    </motion.span>
                    <h3 className="text-3xl md:text-4xl font-serif text-brand-dark">Conforto para seu <span className="text-brand-gold italic">Coração</span></h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 ${openIndex === index
                                ? 'border-brand-gold bg-brand-paper shadow-lg'
                                : 'border-brand-gold/10 bg-white hover:border-brand-gold/30'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-8 text-left font-serif font-bold text-brand-dark"
                            >
                                <span className="pr-4 text-xl">{faq.q}</span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                    ? 'bg-brand-gold text-white rotate-180'
                                    : 'bg-brand-gold/10 text-brand-gold'
                                    }`}>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 text-brand-dark/60 leading-relaxed font-light text-lg">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mt-20 text-center"
                >
                    <a href={`https://pay.kiwify.com.br/1h12vFh?split=1${utmParams}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" className="text-lg py-6 px-12">
                            <Zap className="w-5 h-5 mr-2" />
                            GARANTIR MEU LUGAR NO EFEITO LEVE
                        </Button>
                    </a>
                    <p className="mt-6 text-sm text-brand-dark/40 font-medium">Acesso imediato e seguro via Kiwify</p>
                </motion.div>
            </div>
        </Section>
    );
}
