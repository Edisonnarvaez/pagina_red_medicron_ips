import { create } from 'zustand';

interface ContactOption {
  id: string;
  label: string;
  number: string;
  description: string;
  icon: string;
}

interface WhatsAppState {
  isModalOpen: boolean;
  showTooltip: boolean;
  contactOptions: ContactOption[];
  openModal: () => void;
  closeModal: () => void;
  setShowTooltip: (show: boolean) => void;
}

const contactOptions: ContactOption[] = [
  {
    id: 'nefroproteccion-1',
    label: 'Citas Nefroprotección 1',
    number: '3160902783',
    description: 'Agenda tu cita de nefroprotección',
    icon: '🏥'
  },
  {
    id: 'nefroproteccion-2',
    label: 'Citas Nefroprotección 2',
    number: '3188074300',
    description: 'Segunda línea para citas de nefroprotección',
    icon: '🏥'
  },
  {
    id: 'fomag',
    label: 'Citas Fomag',
    number: '3183380107',
    description: 'Citas para servicios Fomag',
    icon: '👩‍⚕️'
  },
  {
    id: 'hospital',
    label: 'Citas Hospital',
    number: '3216660990',
    description: 'Servicios hospitalarios generales',
    icon: '🏨'
  },
  {
    id: 'informacion-general',
    label: 'Información General',
    number: '3183380107',
    description: 'Información y consultas generales',
    icon: '💬'
  }
];

export const useWhatsAppStore = create<WhatsAppState>((set: any) => ({
  isModalOpen: false,
  showTooltip: false,
  contactOptions,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setShowTooltip: (show: boolean) => set({ showTooltip: show })
}));