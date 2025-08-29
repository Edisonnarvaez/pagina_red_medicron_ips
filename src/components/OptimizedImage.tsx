import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  fallback = '/images/placeholder.jpg',
  onLoad,
  onError
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (fallback && imageSrc !== fallback) {
      setImageSrc(fallback);
    }
    onError?.();
  };

  // Verificar si el alt text es descriptivo (matriz ITA criterio a)
  const isAltTextDescriptive = alt.length > 10 && !alt.toLowerCase().includes('imagen') && !alt.toLowerCase().includes('foto');

  if (!isAltTextDescriptive) {
    console.warn(`Imagen con alt text poco descriptivo: "${alt}". Para cumplir matriz ITA, el texto alternativo debe ser más descriptivo.`);
  }

  return (
    <div 
      className={`relative ${className}`}
      role="img"
      aria-label={alt}
    >
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          aria-label="Cargando imagen"
        >
          <div className="sr-only">Cargando imagen: {alt}</div>
          <svg 
            className="w-8 h-8 text-gray-400 animate-spin" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${hasError ? 'filter grayscale' : ''}`}
        style={{
          maxWidth: '100%',
          height: 'auto',
          ...(width && height && { aspectRatio: `${width}/${height}` })
        }}
        // Atributos para mejorar accesibilidad
        role="img"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            // Si la imagen es clickeable, manejar la interacción por teclado
            const target = e.target as HTMLElement;
            if (target.click) {
              e.preventDefault();
              target.click();
            }
          }
        }}
      />
      
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300"
          role="alert"
          aria-live="polite"
        >
          <div className="text-center text-gray-500 p-4">
            <svg 
              className="w-12 h-12 mx-auto mb-2 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
            <p className="text-sm font-medium">Error al cargar imagen</p>
            <p className="text-xs mt-1">Descripción: {alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
