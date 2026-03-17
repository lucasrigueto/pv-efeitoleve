import { Button } from './ui/Button';
import { Zap, Lock, ShieldCheck } from 'lucide-react';
import { useUTM } from '../hooks/useUTM';

export function StickyCTA() {
    const utmParams = useUTM();
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden safe-area-pb">
            <div className="container mx-auto px-4 py-3">
                {/* Preço */}
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <span className="text-xs text-gray-500 line-through block">De R$ 497</span>
                        <span className="text-lg font-bold text-brand-default">R$ 97</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-red-600 font-bold">
                        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                        Últimas vagas!
                    </div>
                </div>

                {/* CTA Button */}
                <a
                    href={`https://pay.kiwify.com.br/1h12vFh?split=1${utmParams}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <Button
                        variant="primary"
                        fullWidth
                        className="text-base py-3"
                    >
                        <Zap className="w-5 h-5 mr-2" />
                        QUERO COMEÇAR AGORA
                    </Button>
                </a>

                {/* Trust Badges - CORREÇÃO: Contraste e ícones SVG */}
                <div className="flex items-center justify-center gap-3 mt-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>Compra Segura</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Acesso Imediato</span>
                    </div>
                    <span>•</span>
                    <span>🛡️ 7 Dias de Garantia</span>
                </div>
            </div>
        </div>
    );
}
