import React, { useState } from 'react';
import LanguageContext from './LanguageContext ';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
