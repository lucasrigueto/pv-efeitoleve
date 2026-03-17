import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface ScarcityTimerProps {
    // Duração do timer em horas (padrão: 24 horas)
    durationHours?: number;
}

export function ScarcityTimer({ durationHours = 24 }: ScarcityTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Chave única para localStorage
        const STORAGE_KEY = 'efeito-leve-scarcity-timer';

        // Verifica se já existe um timer salvo
        let endTime = localStorage.getItem(STORAGE_KEY);

        if (!endTime) {
            // Cria novo timer: agora + durationHours
            const now = new Date();
            endTime = new Date(now.getTime() + (durationHours * 60 * 60 * 1000)).toISOString();
            localStorage.setItem(STORAGE_KEY, endTime);
        }

        // Função para calcular tempo restante
        const calculateTimeLeft = () => {
            const end = new Date(endTime!).getTime();
            const now = new Date().getTime();
            const difference = end - now;

            if (difference <= 0) {
                // Timer expirou - reseta para novo ciclo
                const newEnd = new Date(now + (durationHours * 60 * 60 * 1000)).toISOString();
                localStorage.setItem(STORAGE_KEY, newEnd);
                return calculateTimeLeft();
            }

            return {
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        };

        // Atualiza imediatamente
        setTimeLeft(calculateTimeLeft());

        // Atualiza a cada segundo
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [durationHours]);

    if (!isClient) {
        return null;
    }

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-4 mb-6 shadow-lg"
        >
            <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="w-5 h-5 animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-wider">
                    Oferta Especial Termina Em:
                </span>
            </div>
            <div className="flex items-center justify-center gap-3">
                <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
                        <span className="text-3xl font-bold font-mono">
                            {formatNumber(timeLeft.hours)}
                        </span>
                    </div>
                    <span className="text-xs uppercase mt-1 block">Horas</span>
                </div>
                <span className="text-3xl font-bold mt-4">:</span>
                <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
                        <span className="text-3xl font-bold font-mono">
                            {formatNumber(timeLeft.minutes)}
                        </span>
                    </div>
                    <span className="text-xs uppercase mt-1 block">Min</span>
                </div>
                <span className="text-3xl font-bold mt-4">:</span>
                <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
                        <span className="text-3xl font-bold font-mono text-yellow-300">
                            {formatNumber(timeLeft.seconds)}
                        </span>
                    </div>
                    <span className="text-xs uppercase mt-1 block">Seg</span>
                </div>
            </div>
            <p className="text-center text-xs mt-3 opacity-90">
                ⚠️ Após o término, o preço voltará ao valor original
            </p>
        </motion.div>
    );
}
