import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Avatar from "./Avatar";

export interface Miembro {
  id: number;
  nombre: string;
  cargo: string;
  foto: string;
}

interface Props {
  miembros: Miembro[];
  miembrosPerSlide?: number;
  maxMiembros?: number;
}

const ConsejoCarousel: React.FC<Props> = ({
  miembros,
  miembrosPerSlide = 3,
  maxMiembros = 7
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Limitar miembros
  const miembrosLimitados = miembros.slice(0, maxMiembros);

  const totalSlides = Math.ceil(
    miembrosLimitados.length / miembrosPerSlide
  );

  const miembrosAgrupados = Array.from({ length: totalSlides }, (_, i) =>
    miembrosLimitados.slice(
      i * miembrosPerSlide,
      i * miembrosPerSlide + miembrosPerSlide
    )
  );

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="mb-10 w-full animate-fade-in">
      <h3 className="font-bold text-2xl mb-6 text-verdeOscuro text-center">
        Miembros del Consejo de Administración
      </h3>

      <div className="relative">

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {miembrosAgrupados.map((grupo, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                  {grupo.map((miembro) => (
                    <div
                      key={miembro.id}
                      className="bg-white rounded-2xl shadow-lg p-6 text-center border border-verdeLima/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <Avatar
                        src={miembro.foto}
                        nombre={miembro.nombre}
                      />
                      <h4 className="font-bold text-verdeOscuro mb-2">
                        {miembro.nombre}
                      </h4>
                      <p className="text-sm text-grisOscuro">
                        {miembro.cargo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 bg-verdeOscuro text-white rounded-full flex items-center justify-center hover:bg-verdeLima disabled:opacity-40 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 bg-verdeOscuro text-white rounded-full flex items-center justify-center hover:bg-verdeLima disabled:opacity-40 transition"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === i
                  ? "bg-verdeOscuro scale-125"
                  : "bg-verdeLima/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsejoCarousel;