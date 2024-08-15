import { SearchOutlined } from "@ant-design/icons";
import { ContainerComponent, SearchComponent } from "./style";
import Filter from "../Filter/Filter";

const Action = ({ onFilterChange, onSearch }) => {
    const handleSearchChange = (e) => {
        onSearch(e.target.value); // Gửi từ khóa tìm kiếm lên cha
    };

    return (
      <>
        <ContainerComponent>
          <div style={{position: "relative"}}> 
            <SearchOutlined style={{position: "absolute", top: "18px", left: "30px", fontSize: "20px", color: "#A7ABB7"}} />
            <SearchComponent 
              placeholder="Search for a country..."
              onChange={handleSearchChange} // Thêm sự kiện thay đổi
            />
          </div>
          <Filter onFilterChange={onFilterChange} />
        </ContainerComponent>
      </>
    );
};

export default Action;