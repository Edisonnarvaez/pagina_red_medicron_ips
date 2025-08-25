import React from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    sizes?: string;
    priority?: boolean;
}

/**
 * Componente de imagen optimizada para Red Medicron IPS
 * 
 * Características:
 * - Soporte para WebP con fallback a JPG/PNG
 * - Responsive images con srcSet
 * - Lazy loading automático
 * - Placeholder mientras carga
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = '',
    sizes = '100vw',
    priority = false
}) => {

    // Generar srcSet para responsive images
    const generateSrcSet = (format: string) => {
        const extension = src.split('.').pop();
        const baseName = src.replace(`.${extension}`, '');
        
        return [
            `${baseName}-mobile.${format} 480w`,
            `${baseName}-tablet.${format} 768w`,
            `${baseName}-desktop.${format} 1200w`
        ].join(', ');
    };

    return (
        <picture className={className}>
            {/* Formato WebP moderno con responsive images */}
            <source
                srcSet={generateSrcSet('webp')}
                sizes={sizes}
                type="image/webp"
            />
            
            {/* Fallback a formato original */}
            <img
                src={src}
                srcSet={generateSrcSet(src.split('.').pop() || 'jpg')}
                sizes={sizes}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                className={`transition-opacity duration-300 ${className}`}
                style={{
                    aspectRatio: 'auto',
                    objectFit: 'cover'
                }}
            />
        </picture>
    );
};

export default OptimizedImage;
