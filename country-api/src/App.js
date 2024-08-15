import Action from "./Component/Action/Action";
import Content from "./Component/Content/Content";
import Header from "./Component/Header/Header";
import { Background } from "./Component/Header/style";
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
  }
`;
const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(''); // Quản lý trạng thái vùng được chọn
  const [searchTerm, setSearchTerm] = useState(''); // Quản lý trạng thái từ khóa tìm kiếm

  const handleFilterChange = (region) => {
    setSelectedRegion(region); // Cập nhật vùng được chọn từ Action
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // Cập nhật từ khóa tìm kiếm từ Action
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Background>
        <Action onFilterChange={handleFilterChange} onSearch={handleSearch} />
        <Content selectedRegion={selectedRegion} searchTerm={searchTerm} />
      </Background>
    </>
  );
}
export default App;
