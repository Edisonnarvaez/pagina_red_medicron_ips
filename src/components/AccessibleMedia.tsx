import React, { useState, useRef, useEffect } from 'react';

interface AccessibleMediaProps {
  src: string;
  type: 'video' | 'audio';
  title: string;
  description?: string;
  transcript?: string;
  subtitles?: string;
  audioDescription?: string;
  controls?: boolean;
  autoPlay?: boolean;
  className?: string;
  poster?: string; // Solo para video
}

const AccessibleMedia: React.FC<AccessibleMediaProps> = ({
  src,
  type,
  title,
  description,
  transcript,
  subtitles,
  audioDescription,
  controls = true,
  autoPlay = false,
  className = '',
  poster
}) => {
  const [showTranscript, setShowTranscript] = useState(false);
  const [showAudioDescription, setShowAudioDescription] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    const handleTimeUpdate = () => setCurrentTime(media.currentTime);
    const handleDurationChange = () => setDuration(media.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    media.addEventListener('timeupdate', handleTimeUpdate);
    media.addEventListener('durationchange', handleDurationChange);
    media.addEventListener('play', handlePlay);
    media.addEventListener('pause', handlePause);

    return () => {
      media.removeEventListener('timeupdate', handleTimeUpdate);
      media.removeEventListener('durationchange', handleDurationChange);
      media.removeEventListener('play', handlePlay);
      media.removeEventListener('pause', handlePause);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
      } else {
        mediaRef.current.play();
      }
    }
  };

  const MediaElement = type === 'video' ? 'video' : 'audio';

  return (
    <div 
      className={`accessible-media ${className}`}
      role="region"
      aria-labelledby="media-title"
      aria-describedby="media-description"
    >
      {/* Título y descripción */}
      <div className="mb-4">
        <h3 
          id="media-title" 
          className="text-lg font-semibold text-clinic-primary mb-2"
        >
          {title}
        </h3>
        {description && (
          <p 
            id="media-description" 
            className="text-gray-600 text-sm mb-3"
          >
            {description}
          </p>
        )}
      </div>

      {/* Controles de accesibilidad */}
      <div className="mb-4 flex flex-wrap gap-2">
        {transcript && (
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="px-3 py-2 text-sm bg-clinic-secondary text-white rounded hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-clinic-primary"
            aria-expanded={showTranscript}
            aria-controls="transcript-content"
          >
            {showTranscript ? 'Ocultar' : 'Mostrar'} Transcripción
          </button>
        )}
        
        {audioDescription && (
          <button
            onClick={() => setShowAudioDescription(!showAudioDescription)}
            className="px-3 py-2 text-sm bg-clinic-accent text-white rounded hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-clinic-primary"
            aria-expanded={showAudioDescription}
            aria-controls="audio-description-content"
          >
            {showAudioDescription ? 'Ocultar' : 'Mostrar'} Audio Descripción
          </button>
        )}

        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">Progreso:</span>
          <span aria-live="polite">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Elemento multimedia */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <MediaElement
          ref={mediaRef as any}
          src={src}
          controls={controls}
          autoPlay={autoPlay}
          poster={type === 'video' ? poster : undefined}
          className="w-full"
          aria-label={`${type === 'video' ? 'Video' : 'Audio'}: ${title}`}
          onKeyDown={(e) => {
            if (e.key === ' ') {
              e.preventDefault();
              togglePlayPause();
            }
          }}
        >
          {subtitles && type === 'video' && (
            <track
              kind="subtitles"
              src={subtitles}
              srcLang="es"
              label="Español"
              default
            />
          )}
          Tu navegador no soporta el elemento {type}.
          {transcript && (
            <p>
              <a href={transcript} download>
                Descargar transcripción
              </a>
            </p>
          )}
        </MediaElement>

        {/* Controles personalizados accesibles */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
          <div className="flex items-center justify-between">
            <button
              onClick={togglePlayPause}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            <div className="flex-1 mx-4">
              <div className="bg-white bg-opacity-20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-200"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                  role="progressbar"
                  aria-valuenow={currentTime}
                  aria-valuemin={0}
                  aria-valuemax={duration}
                  aria-label="Progreso de reproducción"
                />
              </div>
            </div>

            <span className="text-xs">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      {/* Transcripción */}
      {transcript && showTranscript && (
        <div 
          id="transcript-content"
          className="mt-4 p-4 bg-gray-50 border rounded-lg"
          role="complementary"
          aria-labelledby="transcript-title"
        >
          <h4 id="transcript-title" className="font-semibold mb-2 text-clinic-primary">
            Transcripción
          </h4>
          <div className="prose prose-sm max-w-none">
            {typeof transcript === 'string' ? (
              <p className="whitespace-pre-wrap">{transcript}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: transcript }} />
            )}
          </div>
        </div>
      )}

      {/* Audio Descripción */}
      {audioDescription && showAudioDescription && (
        <div 
          id="audio-description-content"
          className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg"
          role="complementary"
          aria-labelledby="audio-description-title"
        >
          <h4 id="audio-description-title" className="font-semibold mb-2 text-clinic-primary">
            Audio Descripción
          </h4>
          <div className="prose prose-sm max-w-none">
            {typeof audioDescription === 'string' ? (
              <p className="whitespace-pre-wrap">{audioDescription}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: audioDescription }} />
            )}
          </div>
        </div>
      )}

      {/* Mensaje de cumplimiento matriz ITA */}
      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-sm text-green-800">
        <div className="flex items-start">
          <svg className="w-4 h-4 mr-2 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-medium">Matriz ITA - Criterio B</p>
            <p>Este contenido multimedia incluye opciones de accesibilidad: 
              {transcript && ' transcripción'}
              {audioDescription && ' audio descripción'}
              {subtitles && ' subtítulos'}
              {(!transcript && !audioDescription && !subtitles) && ' controles accesibles'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibleMedia;
