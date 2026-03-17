import { useState } from 'react';
import { Section } from './layout/Section';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Sparkles } from 'lucide-react';
import { useUTM } from '../hooks/useUTM';

const VIDEO_ID = 'PiLf4IvK0oU';

export function Header() {
    const [isPlaying, setIsPlaying] = useState(false);
    const utmParams = useUTM();

    return (
        <header className="relative bg-brand-light overflow-hidden text-brand-dark">
            {/* Sacred Announcement Bar */}
            <div className="relative z-20 bg-brand-dark py-3 border-b border-brand-gold/30">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="container mx-auto px-4 flex items-center justify-center gap-3 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-brand-gold"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Vagas Limitadas - Restaure o Templo do Espírito Santo</span>
                    <Sparkles className="w-4 h-4" />
                </motion.div>
            </div>

            <Section className="relative z-10 pt-12 pb-20 md:pt-16 md:pb-32 text-center">
                {/* Divine Light Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full -z-10"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-5xl mx-auto mb-16"
                >
                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold-dark text-xs font-bold uppercase tracking-widest mb-10"
                    >
                        Programa Efeito Leve
                    </motion.span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-brand-dark mb-10 leading-[1.05]">
                        Você não está apenas cansada. <br />
                        <span className="text-brand-gold italic">O Templo do Espírito Santo</span> está sobrecarregado.
                    </h1>

                    {/* Premium VSL Player */}
                    <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(212,175,55,0.15)] ring-1 ring-brand-gold/20 mb-10 md:mb-16 aspect-video bg-brand-dark">
                        {isPlaying ? (
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&controls=1&autoplay=1`}
                                title="A Restauração do Templo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        ) : (
                            <button
                                type="button"
                                onClick={() => setIsPlaying(true)}
                                className="group absolute inset-0 w-full h-full cursor-pointer"
                            >
                                <img
                                    src="https://i.ytimg.com/vi/PiLf4IvK0oU/maxresdefault.jpg"
                                    alt="Cuidado com o Templo"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        {/* Animated Rings */}
                                        <div className="absolute inset-0 bg-brand-gold animate-ping rounded-full opacity-20"></div>
                                        <div className="relative w-24 h-24 md:w-32 md:h-32 bg-brand-gold rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                                            <svg className="w-10 h-10 md:w-14 md:h-14 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        )}
                    </div>

                    <p className="text-lg md:text-2xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed font-light mb-16">
                        Um Programa de 21 dias para desinflamar seu corpo, recuperar sua energia vital e resgatar o prazer de estar na presença de Deus.
                        <span className="text-brand-default font-serif italic block mt-4">
                            Sem dietas punitivas, apenas o cuidado simples que o Espírito Santo espera de você.
                        </span>
                    </p>

                    {/* CTA Group */}
                    <div className="flex flex-col items-center gap-8">
                        <a href={`https://pay.kiwify.com.br/1h12vFh?split=1${utmParams}`} target="_blank" rel="noopener noreferrer" className="w-full max-w-fit mx-auto">
                            <Button variant="primary" fullWidth className="text-sm md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-2xl uppercase tracking-[0.1em] md:tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)] hover:shadow-[0_30px_60px_-12px_rgba(212,175,55,0.4)] transition-all whitespace-nowrap">
                                Quero Restaurar o Templo Agora!
                            </Button>
                        </a>

                        <div className="flex flex-wrap justify-center items-center gap-6 text-brand-dark/40 text-xs font-bold tracking-widest">
                            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-gold" /> ACESSO IMEDIATO</span>
                            <span className="w-1 h-1 bg-brand-gold/30 rounded-full"></span>
                            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-brand-gold" /> MÉTODO COMPROVADO</span>
                            <span className="w-1 h-1 bg-brand-gold/30 rounded-full"></span>
                            <span className="flex items-center gap-2"><Heart className="w-5 h-5 text-brand-gold" /> 7 DIAS DE GARANTIA</span>
                        </div>
                    </div>
                </motion.div>
            </Section>
        </header>
    );
}
