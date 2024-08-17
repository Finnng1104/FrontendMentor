import { SearchOutlined } from "@ant-design/icons";
import { ContainerComponent, SearchComponent } from "./style";
import Filter from "../Filter/Filter";

// Action component: Handles the search and filter functionality
const Action = ({ onFilterChange, onSearch, isDarkMode }) => {

    // Function to handle the search input change
    const handleSearchChange = (e) => {
        onSearch(e.target.value); // Call the onSearch function passed as a prop with the input value
    };

    return (
      <>
        {/* Container for search and filter components, styled based on dark mode */}
        <ContainerComponent isDarkMode={isDarkMode}>
          
          {/* Search bar with icon */}
          <div style={{position: "relative"}}> 
            {/* Search icon positioned inside the search bar */}
            <SearchOutlined style={{position: "absolute", top: "18px", left: "30px", fontSize: "20px", color: "#A7ABB7"}} />
            
            {/* Search input field with dark mode styling */}
            <SearchComponent  
              isDarkMode={isDarkMode}
              placeholder="Search for a country..."
              onChange={handleSearchChange} // Handle input changes for search
            />
          </div>

          {/* Filter component to filter the list based on region */}
          <Filter isDarkMode={isDarkMode} onFilterChange={onFilterChange}/>
        </ContainerComponent>
      </>
    );
};

export default Action;