import React from 'react';

interface ButtonSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'white' | 'primary' | 'dark';
}

const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({ 
    size = 'sm', 
    color = 'white'
}) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };

    const colorClasses = {
        white: 'border-white/30 border-t-white',
        primary: 'border-azul/30 border-t-azul',
        dark: 'border-gray-300 border-t-gray-700'
    };

    return (
        <div 
            className={`
                ${sizeClasses[size]} 
                ${colorClasses[color]}
                border-2 rounded-full animate-spin
            `}
        />
    );
};

export default ButtonSpinner;
