import React, { useEffect, useState } from 'react';

interface ConfettiProps {
    active: boolean;
    onComplete?: () => void;
}

const Confetti: React.FC<ConfettiProps> = ({ active, onComplete }) => {
    const [particles, setParticles] = useState<Array<{
        id: number;
        x: number;
        y: number;
        dx: number;
        dy: number;
        rotation: number;
        color: string;
        size: number;
    }>>([]);

    useEffect(() => {
        if (!active) return;

        const colors = ['#155dfc', '#15803d', '#dc2626', '#ea580c', '#7c3aed', '#db2777'];
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: -10,
            dx: (Math.random() - 0.5) * 4,
            dy: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4
        }));

        setParticles(newParticles);

        const timeout = setTimeout(() => {
            setParticles([]);
            onComplete?.();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [active, onComplete]);

    if (!active || particles.length === 0) return null;

    return (
        <>
            <style>
                {`
                    @keyframes confettiFall {
                        0% {
                            transform: translate(-50%, -50%) rotate(0deg) translateY(-20px);
                            opacity: 1;
                        }
                        100% {
                            transform: translate(-50%, -50%) rotate(720deg) translateY(100vh);
                            opacity: 0;
                        }
                    }
                    .confetti-particle {
                        animation: confettiFall 3s ease-out forwards;
                    }
                `}
            </style>
            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute confetti-particle"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            backgroundColor: particle.color,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            borderRadius: '2px',
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default Confetti;
