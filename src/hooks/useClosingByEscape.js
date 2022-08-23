import { useEffect } from 'react';

export const useClosingByEscape = (isOpen, onClose) => {
  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen, onClose]);
};
