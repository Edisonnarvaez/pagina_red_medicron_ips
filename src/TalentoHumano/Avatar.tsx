import React from "react";

interface AvatarProps {
  src: string;
  nombre: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, nombre }) => {
  const [error, setError] = React.useState(false);

  const iniciales = nombre
    .split(" ")
    .map(n => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  if (error) {
    return (
      <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-verdeOscuro to-verdeLima flex items-center justify-center">
        <span className="text-white font-bold text-lg">{iniciales}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={nombre}
      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      onError={() => setError(true)}
    />
  );
};

export default Avatar;