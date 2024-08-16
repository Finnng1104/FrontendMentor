import { SearchOutlined } from "@ant-design/icons";
import { ContainerComponent, SearchComponent } from "./style";
import Filter from "../Filter/Filter";

const Action = ({ onFilterChange, onSearch, isDarkMode }) => {
    const handleSearchChange = (e) => {
        onSearch(e.target.value); // Gửi từ khóa tìm kiếm lên cha
    };

    return (
      <>
        <ContainerComponent isDarkMode={isDarkMode}>
          <div style={{position: "relative"}}> 
            <SearchOutlined style={{position: "absolute", top: "18px", left: "30px", fontSize: "20px", color: "#A7ABB7"}} />
            <SearchComponent  isDarkMode={isDarkMode}
              placeholder="Search for a country..."
              onChange={handleSearchChange} // Thêm sự kiện thay đổi
            />
          </div>
          <Filter isDarkMode={isDarkMode} onFilterChange={onFilterChange}/>
        </ContainerComponent>
      </>
    );
};

export default Action;