import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext ';

const Button = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  
  return (
    <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
      {language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
    </button>
  );
};

export default Button;
