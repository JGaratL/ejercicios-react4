import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext ';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  
  return (
    <header>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </header>
  );
};



export default Header;
