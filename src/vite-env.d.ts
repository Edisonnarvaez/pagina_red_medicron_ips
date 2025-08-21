/// <reference types="vite/client" />

// Facebook SDK types
declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}
