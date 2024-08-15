import Country from "../Country/Country"; // Sửa chính tả từ "Conuntry" thành "Country"
import { ContainerComponent, ShowNotification, ResponsiveRow } from "./style";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Col } from 'antd';

const Content = ({ selectedRegion, searchTerm }) => {
    const [countryData, setCountryData] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true); // Thêm state để theo dõi trạng thái loading

    useEffect(() => {
      const fetchCountryData = async () => {
        try {
          setLoading(true); // Bắt đầu tải dữ liệu
          const response = await axios.get('https://restcountries.com/v3.1/all');
          const countries = response.data.map(country => ({
            flagUrl: country.flags.png,
            countryName: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital ? country.capital[0] : 'N/A'
          }));
          countries.sort((a, b) => a.countryName.localeCompare(b.countryName));

          setCountryData(countries);
          setFilteredCountries(countries); // Ban đầu hiển thị toàn bộ quốc gia
        } catch (error) {
          console.error('Error fetching country data:', error);
        } finally {
          setLoading(false); // Kết thúc việc tải dữ liệu
        }
      };
  
      fetchCountryData();
    }, []);
  
    // Lọc dữ liệu dựa trên vùng đã chọn và từ khóa tìm kiếm
    useEffect(() => {
      let filtered = countryData;
      if (selectedRegion !== '') {
        filtered = filtered.filter(country => country.region === selectedRegion);
      }
      if (searchTerm !== '') {
        filtered = filtered.filter(country => country.countryName.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      setFilteredCountries(filtered);
    }, [selectedRegion, countryData, searchTerm]);

    if (loading) {
      return  <ShowNotification><h3>Loading...</h3></ShowNotification> ; // Hiển thị khi dữ liệu đang được tải
    }

    return (
      <>
        <ContainerComponent>
            <ResponsiveRow gutter={60} justify="start">
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((country, index) => (
                        <Col key={index} xs={24} sm={12} md={8} lg={6}>
                            <Country
                                flagUrl={country.flagUrl}
                                countryName={country.countryName}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                            />
                        </Col>
                    ))
                ) : (
                    <ShowNotification><span>No results found</span></ShowNotification> // Hiển thị khi không có kết quả tìm kiếm
                )}
            </ResponsiveRow>
        </ContainerComponent>
      </>
    );
};

export default Content;