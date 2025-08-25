import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

interface FullPageLoadingProps {
    message?: string;
    subtitle?: string;
    progress?: number; // 0-100
    showProgress?: boolean;
}

const FullPageLoading: React.FC<FullPageLoadingProps> = ({ 
    message = 'Cargando Red Medicron IPS...',
    subtitle = 'Preparando tu experiencia de salud',
    progress,
    showProgress = false
}) => {
    return (
        <motion.div 
            className="fixed inset-0 z-50 bg-gradient-to-br from-azul-light/20 via-white to-verdeLima/10 flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Elementos decorativos de fondo */}
            <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-azul-light/20 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-verdeLima/20 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute top-1/3 right-1/4 w-[150px] h-[150px] bg-acento/10 rounded-full blur-2xl opacity-40 -z-10" />

            <div className="flex flex-col items-center justify-center max-w-lg text-center px-6">
                {/* Logo principal animado */}
                <motion.div
                    className="relative mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 0.8 
                    }}
                >
                    <div className="w-32 h-32 bg-gradient-to-br from-azul to-verdeOscuro rounded-full flex items-center justify-center shadow-2xl relative z-10">
                        <MdHealthAndSafety className="text-white text-5xl" />
                    </div>
                    
                    {/* Anillo exterior rotante */}
                    <motion.div
                        className="absolute -inset-3 border-4 border-transparent border-t-azul border-r-verdeLima rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Pulso de fondo */}
                    <motion.div
                        className="absolute -inset-6 bg-gradient-to-r from-azul/20 via-verdeLima/20 to-acento/20 rounded-full"
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3] 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Latido del corazón */}
                    <motion.div
                        className="absolute -bottom-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                        animate={{ 
                            scale: [1, 1.3, 1],
                        }}
                        transition={{ 
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <FaHeartbeat className="text-white text-xl" />
                    </motion.div>
                </motion.div>

                {/* Título principal */}
                <motion.h1 
                    className="text-2xl md:text-3xl font-bold text-verdeOscuro mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {message}
                </motion.h1>

                {/* Subtítulo */}
                <motion.p 
                    className="text-lg text-gray-600 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    {subtitle}
                </motion.p>

                {/* Barra de progreso (opcional) */}
                {showProgress && (
                    <motion.div
                        className="w-full max-w-xs mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                    >
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-azul via-verdeLima to-verdeOscuro rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress || 0}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        {progress !== undefined && (
                            <p className="text-sm text-gray-500 mt-2 text-center">
                                {Math.round(progress)}% completado
                            </p>
                        )}
                    </motion.div>
                )}

                {/* Indicador de carga con puntos */}
                <motion.div
                    className="flex space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.4 }}
                >
                    {[0, 1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-azul to-verdeLima"
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.4, 1, 0.4]
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                        />
                    ))}
                </motion.div>

                {/* Mensaje de pie */}
                <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <p className="text-sm text-gray-500">
                        Tu salud es nuestra prioridad
                    </p>
                    <div className="flex items-center justify-center mt-2 text-xs text-gray-400">
                        <FaHeartbeat className="mr-1 text-red-400" />
                        <span>Red Medicron IPS</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default FullPageLoading;
