import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Action from "./Component/Action/Action";
import Content from "./Component/Content/Content";
import Header from "./Component/Header/Header";
import { Background } from "./Component/Header/style";
import { createGlobalStyle } from 'styled-components';

import useFilter from './hooks/useFilter';
import useSearch from './hooks/useSearch';
import useDarkMode from './hooks/useDarkMode';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#202d36' : '#fafafa')};

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
  }
`;

const CountryDetail = lazy(() => import('./Component/CountryDetail/CountryDetail'));

const App = () => {
  const { selectedRegion, handleFilterChange } = useFilter(); 
  const { searchTerm, handleSearch } = useSearch(); 
  const { isDarkMode, toggleMode } = useDarkMode();

  return (
    <Router>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={
          <Background>
            <Action isDarkMode={isDarkMode} onFilterChange={handleFilterChange} onSearch={handleSearch} />
            <Content isDarkMode={isDarkMode} selectedRegion={selectedRegion} searchTerm={searchTerm} />
          </Background>
        } />
        <Route path="/country/:countryName" element={
          <Suspense fallback={<div>Loading...</div>}>
            <CountryDetail isDarkMode={isDarkMode} />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;