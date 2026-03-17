import { useEffect, useRef } from 'react';

export function StarryBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Defer canvas animation to after first paint (reduce TBT)
        const timeoutId = setTimeout(() => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            let animationFrameId: number;
            let stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initStars();
            };

            const initStars = () => {
                stars = [];
                // Reduced density for better performance on mobile
                const count = Math.floor((canvas.width * canvas.height) / 6000);
                for (let i = 0; i < count; i++) {
                    stars.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        size: Math.random() * 2,
                        speed: Math.random() * 0.2 + 0.05,
                        opacity: Math.random()
                    });
                }
            };

            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                stars.forEach(star => {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(99, 102, 241, ${star.opacity})`;
                    ctx.fill();

                    star.y -= star.speed;
                    if (star.y < 0) {
                        star.y = canvas.height;
                        star.x = Math.random() * canvas.width;
                    }

                    star.opacity += (Math.random() - 0.5) * 0.05;
                    if (star.opacity < 0.1) star.opacity = 0.1;
                    if (star.opacity > 0.8) star.opacity = 0.8;
                });

                animationFrameId = requestAnimationFrame(draw);
            };

            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            draw();

            // Store cleanup in a ref-like closure
            canvas.dataset.initialized = 'true';
            (canvas as any)._cleanup = () => {
                window.removeEventListener('resize', resizeCanvas);
                cancelAnimationFrame(animationFrameId);
            };
        }, 100); // Small delay to not block initial render

        return () => {
            clearTimeout(timeoutId);
            if ((canvas as any)._cleanup) {
                (canvas as any)._cleanup();
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
        />
    );
}
