import { ShieldCheck, Mail, Sparkles } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-brand-dark text-white py-20 border-t border-brand-gold/20 relative overflow-hidden">
            {/* Decorative Gold Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-3 gap-16 mb-16">
                    {/* Branding */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <Sparkles className="w-6 h-6 text-brand-gold" />
                            <h4 className="text-2xl font-serif font-bold tracking-tight">Efeito Leve</h4>
                        </div>
                        <p className="text-white/60 text-base leading-relaxed font-light">
                            Dedicado à restauração do Templo do Espírito Santo através da desinflamação, fé e governo emocional.
                        </p>
                    </div>

                    {/* Links Rápidos */}
                    <div className="text-center">
                        <h5 className="font-serif font-bold text-lg mb-6 text-brand-gold">Institucional</h5>
                        <ul className="space-y-4 text-sm font-medium tracking-wide">
                            <li>
                                <a href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                                    Termos de Uso
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                                    Políticas de Privacidade
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                                    Contato Suporte
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contato e Confiança */}
                    <div className="text-center md:text-right">
                        <div className="flex items-center justify-center md:justify-end gap-3 mb-6">
                            <ShieldCheck className="w-6 h-6 text-brand-gold" />
                            <span className="text-sm font-bold tracking-[0.2em] uppercase">Plataforma Segura</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-end gap-3 text-white/50 bg-white/5 p-4 rounded-xl border border-white/10 inline-flex">
                            <Mail className="w-4 h-4 text-brand-gold" />
                            <span className="text-sm">suporte@efeitoleve.com.br</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 mb-10" />

                {/* Copyright e CNPJ */}
                <div className="text-center space-y-4">
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
                        Diane Trece © 2026 • Todos os direitos reservados
                    </p>
                    <p className="text-[10px] text-white/20 max-w-2xl mx-auto leading-relaxed">
                        Este site não faz parte do Google ou do Facebook. Além disso, não é endossado por essas empresas de qualquer maneira. Facebook é uma marca comercial da Meta Platforms, Inc. Google é uma marca comercial da Google LLC.
                    </p>
                </div>

                {/* Pagamento */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="text-[10px] font-bold border border-white/20 px-2 py-1 rounded">VISA</div>
                    <div className="text-[10px] font-bold border border-white/20 px-2 py-1 rounded">MASTERCARD</div>
                    <div className="text-[10px] font-bold border border-white/20 px-2 py-1 rounded">AMEX</div>
                    <div className="text-[10px] font-bold border border-white/20 px-2 py-1 rounded">PIX</div>
                </div>
            </div>
        </footer>
    );
}
