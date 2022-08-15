import { createContext } from 'react';

export const PopupContext = createContext({
  isPopupOpen: false,

  setIsPopupOpen: (_value) => {
    return _value;
  },
});
