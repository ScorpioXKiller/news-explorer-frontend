import { createContext } from 'react';

export const SavedArticlesButtonContext = createContext({
  isClicked: false,

  setButtonValueContext: (_value) => {
    return _value;
  },
});
