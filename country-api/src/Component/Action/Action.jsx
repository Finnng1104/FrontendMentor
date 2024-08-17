import React, { useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { ContainerComponent, SearchComponent } from "./style";
import Filter from "../Filter/Filter";

const Action = ({ onFilterChange, onSearch, isDarkMode }) => {

    // Function to handle the search input change
    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        localStorage.setItem('searchTerm', searchValue); // Lưu giá trị tìm kiếm vào localStorage
        onSearch(searchValue); // Call the onSearch function passed as a prop with the input value
    };

    // useEffect to restore the search term from localStorage when the component mounts
    useEffect(() => {
        const savedSearchTerm = localStorage.getItem('searchTerm');
        if (savedSearchTerm) {
            onSearch(savedSearchTerm); // Khôi phục giá trị tìm kiếm
        }
    }, [onSearch]);

    return (
      <>
        <ContainerComponent isDarkMode={isDarkMode}>
          <div style={{position: "relative"}}>
            <SearchOutlined style={{position: "absolute", top: "18px", left: "30px", fontSize: "20px", color: "#A7ABB7"}} />
            <SearchComponent  
              isDarkMode={isDarkMode}
              placeholder="Search for a country..."
              onChange={handleSearchChange} // Handle input changes for search
              defaultValue={localStorage.getItem('searchTerm') || ''} // Hiển thị lại giá trị tìm kiếm đã lưu
            />
          </div>
          <Filter isDarkMode={isDarkMode} onFilterChange={onFilterChange}/>
        </ContainerComponent>
      </>
    );
};

export default Action;