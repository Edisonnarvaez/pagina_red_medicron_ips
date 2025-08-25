import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaStethoscope } from 'react-icons/fa';
import { MdHealthAndSafety, MdLocalHospital } from 'react-icons/md';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'medical' | 'minimal' | 'dots';
    message?: string;
    showLogo?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
    size = 'md', 
    variant = 'default',
    message = 'Cargando...',
    showLogo = false
}) => {
    const sizeClasses = {
        sm: { spinner: 'w-6 h-6', text: 'text-sm', container: 'p-4' },
        md: { spinner: 'w-10 h-10', text: 'text-base', container: 'p-6' },
        lg: { spinner: 'w-16 h-16', text: 'text-lg', container: 'p-8' },
        xl: { spinner: 'w-24 h-24', text: 'text-xl', container: 'p-12' }
    };

    const currentSize = sizeClasses[size];

    // Variante por defecto con logo médico
    if (variant === 'default') {
        return (
            <div className={`flex flex-col items-center justify-center ${currentSize.container}`}>
                {showLogo && (
                    <motion.div
                        className="mb-6 relative"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-azul to-verdeOscuro rounded-full flex items-center justify-center shadow-2xl">
                            <MdHealthAndSafety className="text-white text-3xl" />
                        </div>
                        <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-azul via-verdeLima to-verdeOscuro rounded-full opacity-30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                )}

                <motion.div 
                    className={`relative ${currentSize.spinner}`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute inset-0 border-4 border-azul/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-azul border-r-verdeLima rounded-full"></div>
                </motion.div>

                <motion.p 
                    className={`mt-4 font-medium text-verdeOscuro ${currentSize.text}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {message}
                </motion.p>

                <motion.div
                    className="mt-2 flex space-x-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-azul rounded-full"
                            animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5] 
                            }}
                            transition={{ 
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.2 
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        );
    }

    // Variante médica con iconos rotando
    if (variant === 'medical') {
        const medicalIcons = [
            { Icon: FaHeartbeat, color: 'text-red-500', delay: 0 },
            { Icon: FaUserMd, color: 'text-azul', delay: 0.2 },
            { Icon: FaStethoscope, color: 'text-verdeLima', delay: 0.4 },
            { Icon: MdLocalHospital, color: 'text-verdeOscuro', delay: 0.6 }
        ];

        return (
            <div className={`flex flex-col items-center justify-center ${currentSize.container}`}>
                <div className="relative">
                    <motion.div
                        className={`${currentSize.spinner} relative`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                        {medicalIcons.map(({ Icon, color, delay }, index) => (
                            <motion.div
                                key={index}
                                className={`absolute ${color}`}
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    transformOrigin: `${Math.cos(index * Math.PI / 2) * 30}px ${Math.sin(index * Math.PI / 2) * 30}px`
                                }}
                                animate={{ 
                                    scale: [1, 1.3, 1],
                                    rotate: [0, 180, 360] 
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    delay 
                                }}
                            >
                                <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : size === 'lg' ? 24 : 32} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.p 
                    className={`mt-6 font-semibold text-verdeOscuro ${currentSize.text}`}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    {message}
                </motion.p>
            </div>
        );
    }

    // Variante minimalista para botones
    if (variant === 'minimal') {
        return (
            <motion.div 
                className={`${currentSize.spinner} border-2 border-gray-200 border-t-white rounded-full`}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
        );
    }

    // Variante con puntos pulsantes
    if (variant === 'dots') {
        return (
            <div className={`flex flex-col items-center justify-center ${currentSize.container}`}>
                <div className="flex space-x-2 mb-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-azul to-verdeLima"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1
                            }}
                        />
                    ))}
                </div>
                
                <motion.p 
                    className={`text-verdeOscuro font-medium ${currentSize.text}`}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                >
                    {message}
                </motion.p>
            </div>
        );
    }

    return null;
};

export default LoadingSpinner;
