export interface EnlaceBase {
  id: string;
  nombre: string;
  url: string;
  descripcion: string;
  icono: string;
  categoria: string;
  tipo: 'interno' | 'externo' | 'institucional' | 'entidad';
}

export interface EnlaceInterno extends EnlaceBase {
  tipo: 'interno';
}

export interface EnlaceExterno extends EnlaceBase {
  tipo: 'externo';
}

export interface EnlaceInstitucional extends EnlaceBase {
  tipo: 'institucional';
}

export interface EntidadSalud extends EnlaceBase {
  tipo: 'entidad';
  sigla: string;
  imagen: string;
}

export type CategoriaKey =
  | "Medicina"
  | "Pediatría"
  | "Cirugía"
  | "Especialidades"
  | "Odontología"
  | "Audiología"
  | "Hospitalaria"
  | "Diagnóstico"
  | "Aseguramiento";

export interface CategoriaInfo {
  color: string;
  icon: string;
  bgGradient: string;
  textColor: string;
  hoverColor: string;
  borderColor: string;
}

export const CATEGORIAS_CONFIG: Record<CategoriaKey, CategoriaInfo> = {
  Medicina: {
    color: "blue",
    icon: "🩺",
    bgGradient: "from-blue-500 to-blue-600",
    textColor: "text-blue-900",
    hoverColor: "hover:from-blue-600 hover:to-blue-700",
    borderColor: "border-blue-200 hover:border-blue-300"
  },
  Pediatría: {
    color: "pink",
    icon: "👶",
    bgGradient: "from-pink-500 to-pink-600",
    textColor: "text-pink-900",
    hoverColor: "hover:from-pink-600 hover:to-pink-700",
    borderColor: "border-pink-200 hover:border-pink-300"
  },
  Cirugía: {
    color: "red",
    icon: "🔬",
    bgGradient: "from-red-500 to-red-600",
    textColor: "text-red-900",
    hoverColor: "hover:from-red-600 hover:to-red-700",
    borderColor: "border-red-200 hover:border-red-300"
  },
  Especialidades: {
    color: "green",
    icon: "⚕️",
    bgGradient: "from-green-500 to-green-600",
    textColor: "text-green-900",
    hoverColor: "hover:from-green-600 hover:to-green-700",
    borderColor: "border-green-200 hover:border-green-300"
  },
  Odontología: {
    color: "yellow",
    icon: "🦷",
    bgGradient: "from-yellow-500 to-yellow-600",
    textColor: "text-yellow-900",
    hoverColor: "hover:from-yellow-600 hover:to-yellow-700",
    borderColor: "border-yellow-200 hover:border-yellow-300"
  },
  Audiología: {
    color: "purple",
    icon: "👂",
    bgGradient: "from-purple-500 to-purple-600",
    textColor: "text-purple-900",
    hoverColor: "hover:from-purple-600 hover:to-purple-700",
    borderColor: "border-purple-200 hover:border-purple-300"
  },
  Hospitalaria: {
    color: "indigo",
    icon: "🏥",
    bgGradient: "from-indigo-500 to-indigo-600",
    textColor: "text-indigo-900",
    hoverColor: "hover:from-indigo-600 hover:to-indigo-700",
    borderColor: "border-indigo-200 hover:border-indigo-300"
  },
  Diagnóstico: {
    color: "cyan",
    icon: "📊",
    bgGradient: "from-cyan-500 to-cyan-600",
    textColor: "text-cyan-900",
    hoverColor: "hover:from-cyan-600 hover:to-cyan-700",
    borderColor: "border-cyan-200 hover:border-cyan-300"
  },
  Aseguramiento: {
    color: "orange",
    icon: "🛡️",
    bgGradient: "from-orange-500 to-orange-600",
    textColor: "text-orange-900",
    hoverColor: "hover:from-orange-600 hover:to-orange-700",
    borderColor: "border-orange-200 hover:border-orange-300"
  }
};

export const COLORES_SECCIONES = {
  internos: {
    primary: "primary",
    bg: "bg-primary-50",
    border: "border-primary-200",
    text: "text-primary-800",
    hover: "hover:bg-primary-100 hover:border-primary-300"
  },
  externos: {
    primary: "medical", 
    bg: "bg-medical-50",
    border: "border-medical-200",
    text: "text-medical-800",
    hover: "hover:bg-medical-100 hover:border-medical-300"
  },
  institucionales: {
    primary: "accent",
    bg: "bg-accent-50", 
    border: "border-accent-200",
    text: "text-accent-800",
    hover: "hover:bg-accent-100 hover:border-accent-300"
  }
};