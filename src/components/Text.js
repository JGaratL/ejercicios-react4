import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext ';

const Text = () => {
  const { language } = useContext(LanguageContext);
  
  return <p>{language === 'es' ? 'Hola Mundo' : 'Hello World'}</p>;
};

export default Text;
