import React from 'react';
import LanguageProvider from './contexts/LanguageProvider';
import Header from './components/Header';
import Content from './components/Content';


function App() {
  return (
    <LanguageProvider>
      <Header />
      <Content />
    </LanguageProvider>
  );
}

export default App;
