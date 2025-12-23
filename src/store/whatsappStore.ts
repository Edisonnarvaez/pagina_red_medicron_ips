import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ContactOption {
  id: string;
  label: string;
  number: string;
  description: string;
  icon: string;
  category: 'nefroproteccion' | 'terapias' | 'fomag' | 'hospital' | 'general';
  priority: number;
  isActive?: boolean;
  schedule?: {
    start: string;
    end: string;
    timezone: string;
  };
}

interface AvailabilityStatus {
  isOnline: boolean;
  status: 'online' | 'busy' | 'away' | 'offline';
  message: string;
  nextAvailable?: string;
}

interface SearchState {
  query: string;
  category: string;
  results: ContactOption[];
}

interface UserPreferences {
  lastUsedService?: string;
  favoriteServices: string[];
  recentServices: string[];
  preferredLanguage: 'es' | 'en';
}

interface WhatsAppState {
  // Estados básicos
  isModalOpen: boolean;
  showTooltip: boolean;
  isLoading: boolean;
  
  // Datos
  contactOptions: ContactOption[];
  availability: AvailabilityStatus;
  searchState: SearchState;
  userPreferences: UserPreferences;
  
  // Acciones básicas
  openModal: () => void;
  closeModal: () => void;
  setShowTooltip: (show: boolean) => void;
  setLoading: (loading: boolean) => void;
  
  // Acciones de búsqueda
  setSearchQuery: (query: string) => void;
  setSearchCategory: (category: string) => void;
  performSearch: () => void;
  clearSearch: () => void;
  
  // Acciones de preferencias
  addToFavorites: (serviceId: string) => void;
  removeFromFavorites: (serviceId: string) => void;
  addToRecent: (serviceId: string) => void;
  setLastUsedService: (serviceId: string) => void;
  
  // Acciones de disponibilidad
  updateAvailability: () => void;
  
  // Utilidades
  getFilteredOptions: () => ContactOption[];
  getFavoriteOptions: () => ContactOption[];
  getRecentOptions: () => ContactOption[];
  getSuggestedOptions: () => ContactOption[];
}

const contactOptions: ContactOption[] = [
//  {
//    id: 'fomag',
//    label: 'Citas Fomag',
//    number: '3183380107',
//    description: 'Citas para servicios Fomag',
//    icon: '�‍⚕️',
//    category: 'fomag',
//    priority: 4,
//    isActive: true,
//    schedule: {
//      start: '07:00',
//      end: '15:30',
//      timezone: 'America/Bogota'
//    }
//  },
  {
    id: 'nefroproteccion-1',
    label: 'Citas Nefroprotección 1',
    number: '3160902783',
    description: 'Agenda tu cita de nefroprotección',
    icon: '🫀',
    category: 'nefroproteccion',
    priority: 1,
    isActive: true,
    schedule: {
      start: '07:00',
      end: '15:30',
      timezone: 'America/Bogota'
    }
  },
  {
    id: 'nefroproteccion-2',
    label: 'Citas Nefroprotección 2',
    number: '3188074300',
    description: 'Segunda línea para citas de nefroprotección',
    icon: '💊',
    category: 'nefroproteccion',
    priority: 2,
    isActive: true,
    schedule: {
      start: '07:00',
      end: '15:30',
      timezone: 'America/Bogota'
    }
  },
  {
    id: 'terapias',
    label: 'Citas Terapias',
    number: '3160906607',
    description: 'Terapias físicas y rehabilitación',
    icon: '�‍♀️',
    category: 'terapias',
    priority: 3,
    isActive: true,
    schedule: {
      start: '07:00',
      end: '15:30',
      timezone: 'America/Bogota'
    }
  },
  {
    id: 'hospital',
    label: 'Citas Hospital San Jose de Tuquerres',
    number: '3216660990',
    description: 'Servicios hospitalarios generales',
    icon: '�',
    category: 'hospital',
    priority: 5,
    isActive: true,
    schedule: {
      start: '00:00',
      end: '23:59',
      timezone: 'America/Bogota'
    }
  },
  {
    id: 'informacion-general',
    label: 'Información General',
    number: '3183380107',
    description: 'Información y consultas generales',
    icon: '�',
    category: 'general',
    priority: 6,
    isActive: true,
    schedule: {
      start: '07:00',
      end: '15:30',
      timezone: 'America/Bogota'
    }
  }
];

// Función utilitaria para verificar disponibilidad
const checkAvailability = (): AvailabilityStatus => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;
  
  // Horario de atención: 7:00 AM - 3:30 PM
  const startTime = 7 * 60; // 7:00 AM
  const endTime = 15 * 60 + 30; // 3:30 PM
  
  const isWorkingDay = now.getDay() >= 1 && now.getDay() <= 5; // Lunes a Viernes
  const isWorkingHours = currentTime >= startTime && currentTime <= endTime;
  
  if (!isWorkingDay) {
    return {
      isOnline: false,
      status: 'offline',
      message: 'Fuera del horario laboral - Fin de semana',
      nextAvailable: 'Lunes 7:00 AM'
    };
  }
  
  if (!isWorkingHours) {
    const nextDay = currentTime > endTime ? 'mañana' : 'hoy';
    return {
      isOnline: false,
      status: 'offline',
      message: `Fuera del horario laboral`,
      nextAvailable: `${nextDay === 'mañana' ? 'Mañana' : 'Hoy'} 7:00 AM`
    };
  }
  
  return {
    isOnline: true,
    status: 'online',
    message: 'Disponible ahora'
  };
};

export const useWhatsAppStore = create<WhatsAppState>()(
  persist(
    (set, get) => ({
      // Estados básicos
      isModalOpen: false,
      showTooltip: false,
      isLoading: false,
      
      // Datos
      contactOptions,
      availability: checkAvailability(),
      searchState: {
        query: '',
        category: 'all',
        results: []
      },
      userPreferences: {
        favoriteServices: [],
        recentServices: [],
        preferredLanguage: 'es'
      },
      
      // Acciones básicas
      openModal: () => {
        set({ isModalOpen: true });
        get().updateAvailability();
      },
      closeModal: () => set({ isModalOpen: false }),
      setShowTooltip: (show: boolean) => set({ showTooltip: show }),
      setLoading: (loading: boolean) => set({ isLoading: loading }),
      
      // Acciones de búsqueda
      setSearchQuery: (query: string) => {
        set({ searchState: { ...get().searchState, query } });
        get().performSearch();
      },
      setSearchCategory: (category: string) => {
        set({ searchState: { ...get().searchState, category } });
        get().performSearch();
      },
      performSearch: () => {
        const { searchState, contactOptions } = get();
        const { query, category } = searchState;
        
        let results = contactOptions.filter(option => {
          const matchesQuery = query === '' || 
            option.label.toLowerCase().includes(query.toLowerCase()) ||
            option.description.toLowerCase().includes(query.toLowerCase());
          
          const matchesCategory = category === 'all' || option.category === category;
          
          return matchesQuery && matchesCategory && option.isActive;
        });
        
        // Ordenar por prioridad
        results.sort((a, b) => a.priority - b.priority);
        
        set({ searchState: { ...searchState, results } });
      },
      clearSearch: () => {
        set({ 
          searchState: { 
            query: '', 
            category: 'all', 
            results: [] 
          } 
        });
      },
      
      // Acciones de preferencias
      addToFavorites: (serviceId: string) => {
        const { userPreferences } = get();
        const newFavorites = [...userPreferences.favoriteServices];
        if (!newFavorites.includes(serviceId)) {
          newFavorites.push(serviceId);
          set({ 
            userPreferences: { 
              ...userPreferences, 
              favoriteServices: newFavorites 
            } 
          });
        }
      },
      removeFromFavorites: (serviceId: string) => {
        const { userPreferences } = get();
        const newFavorites = userPreferences.favoriteServices.filter(id => id !== serviceId);
        set({ 
          userPreferences: { 
            ...userPreferences, 
            favoriteServices: newFavorites 
          } 
        });
      },
      addToRecent: (serviceId: string) => {
        const { userPreferences } = get();
        const newRecent = [serviceId, ...userPreferences.recentServices.filter(id => id !== serviceId)].slice(0, 5);
        set({ 
          userPreferences: { 
            ...userPreferences, 
            recentServices: newRecent 
          } 
        });
      },
      setLastUsedService: (serviceId: string) => {
        const { userPreferences } = get();
        set({ 
          userPreferences: { 
            ...userPreferences, 
            lastUsedService: serviceId 
          } 
        });
      },
      
      // Acciones de disponibilidad
      updateAvailability: () => {
        set({ availability: checkAvailability() });
      },
      
      // Utilidades
      getFilteredOptions: () => {
        const { searchState, contactOptions } = get();
        if (searchState.results.length > 0 || searchState.query !== '' || searchState.category !== 'all') {
          get().performSearch();
          return searchState.results;
        }
        return contactOptions.filter(option => option.isActive).sort((a, b) => a.priority - b.priority);
      },
      getFavoriteOptions: () => {
        const { userPreferences, contactOptions } = get();
        return contactOptions.filter(option => 
          userPreferences.favoriteServices.includes(option.id) && option.isActive
        );
      },
      getRecentOptions: () => {
        const { userPreferences, contactOptions } = get();
        return userPreferences.recentServices
          .map(id => contactOptions.find(option => option.id === id))
          .filter(Boolean) as ContactOption[];
      },
      getSuggestedOptions: () => {
        const { userPreferences, contactOptions } = get();
        const favorites = get().getFavoriteOptions();
        const recent = get().getRecentOptions();
        
        // Combinar favoritos y recientes, evitar duplicados
        const suggested = [...favorites, ...recent.filter(r => !favorites.some(f => f.id === r.id))];
        
        // Si no hay suficientes sugerencias, agregar los más populares
        if (suggested.length < 3) {
          const popular = contactOptions
            .filter(option => option.isActive && !suggested.some(s => s.id === option.id))
            .sort((a, b) => a.priority - b.priority)
            .slice(0, 3 - suggested.length);
          suggested.push(...popular);
        }
        
        return suggested.slice(0, 3);
      }
    }),
    {
      name: 'whatsapp-store',
      partialize: (state) => ({
        userPreferences: state.userPreferences
      })
    }
  )
);
