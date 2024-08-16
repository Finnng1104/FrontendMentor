import Country from "../Country/Country";
import { ContainerComponent, ShowNotification, ResponsiveRow } from "./style";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
const Content = ({ selectedRegion, searchTerm, isDarkMode}) => {
    const [countryData, setCountryData] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true); 
    const is1200 = useMediaQuery({ query: '(max-width: 1200px)' });
    const is960 = useMediaQuery({ query: '(max-width: 960px)' });
    const is550 = useMediaQuery({ query: '(max-width: 550px)' });

    const getGutter = () => {
      if (is960) return [20, 20];
      if (is1200) return [40, 40];
      return [60, 60];
    };
    const getColumnProps = () => {
      if (is550) return { xs: 24 };
      if (is960) return { xs: 12 };
      if (is1200) return { xs: 8 }; 
      return { xs: 6 }; 
    };
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
      return  <ShowNotification isDarkMode={isDarkMode}><h3>Loading...</h3></ShowNotification> ; // Hiển thị khi dữ liệu đang được tải
    }

    return (
      <>
        <ContainerComponent isDarkMode={isDarkMode}>
            <ResponsiveRow gutter={getGutter()} justify="start">
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((country, index) => (
                      <Col {...getColumnProps()}>
                            <Country 
                                isDarkMode={isDarkMode}
                                flagUrl={country.flagUrl}
                                countryName={country.countryName}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                            />
                        </Col>
                    ))
                ) : (
                    <ShowNotification isDarkMode={isDarkMode}><span>No results found</span></ShowNotification> // Hiển thị khi không có kết quả tìm kiếm
                )}
            </ResponsiveRow>
        </ContainerComponent>
      </>
    );
};

export default Content;