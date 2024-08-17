import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { CountryDetailContainer, ShowNotification } from './style'; 

const CountryDetail = ({ isDarkMode }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { countryName } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    const numberFormatter = new Intl.NumberFormat('en-US');
    const fetchCountryData = async () => {
      try {
        setLoading(true);

        // Điều kiện kiểm tra nếu countryName là "China"
        const apiUrl = countryName.toLowerCase() === 'china' 
          ? `https://restcountries.com/v3.1/alpha/CN` 
          : `https://restcountries.com/v3.1/name/${countryName}`;

        const response = await axios.get(apiUrl);
        const country = response.data[0];

        // Fetch neighboring countries' details
        const borderCountries = country.borders || [];
        const borderDetails = await Promise.all(
          borderCountries.map(async (borderCode) => {
            try {
              const borderResponse = await axios.get(`https://restcountries.com/v3.1/alpha/${borderCode}`);
              return borderResponse.data[0];
            } catch (error) {
              console.error(`Error fetching border country ${borderCode}:`, error);
              return null;
            }
          })
        );

        setCountryData({
          name: country.name.common,
          flagUrl: country.flags.png,
          nativeName: country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A',
          population: numberFormatter.format(country.population),
          region: country.region,
          subRegion: country.subregion,
          capital: country.capital ? country.capital[0] : 'N/A',
          topLevelDomain: country.tld ? country.tld[0] : 'N/A',
          currencies: country.currencies ? Object.values(country.currencies)[0].name : 'N/A',
          languages: country.languages ? Object.values(country.languages).join(', ') : 'N/A',
          borders: borderDetails.filter(detail => detail !== null).map(detail => ({
            name: detail.name.common,
            code: detail.cca3
          })),
        });
      } catch (error) {
        console.error('Error fetching country data:', error);
      } finally {
        setLoading(false);
      }
    };
   
    fetchCountryData();
  }, [countryName]);

  const handleBorderClick = (borderCountryCode) => {
    navigate(`/country/${borderCountryCode}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  if (loading) return <ShowNotification isDarkMode={isDarkMode}><h3>Loading...</h3></ShowNotification>;
  if (!countryData) return <ShowNotification isDarkMode={isDarkMode}><h3>No data available</h3></ShowNotification>;

  return (
    <>
      <CountryDetailContainer isDarkMode={isDarkMode}>
          <Button onClick={handleBackClick} style={{ marginBottom: '20px', padding: '20px 30px', fontSize: '18px', cursor: 'pointer' }}>
              <ArrowLeftOutlined />
              Back
          </Button>
      </CountryDetailContainer>
      <CountryDetailContainer isDarkMode={isDarkMode}>
        <div className='img'>
            <img src={countryData.flagUrl} alt={countryData.nativeName} />
        </div>
        <div className='content'>
            <h1>{countryData.name}</h1>
            <div className='countryInformation'>
              <div>
                  <p><b>Native Name:</b> {countryData.nativeName}</p>
                  <p><b>Population:</b> {countryData.population}</p>
                  <p><b>Region:</b> {countryData.region}</p>
                  <p><b>Sub Region:</b> {countryData.subRegion}</p>
                  <p><b>Capital:</b> {countryData.capital}</p>
              </div>
              <div>
                  <p><b>Top Level Domain:</b> {countryData.topLevelDomain}</p>
                  <p><b>Currencies:</b> {countryData.currencies}</p>
                  <p><b>Languages:</b> {countryData.languages}</p>
              </div>
            </div>
            <div>
              <div style={{marginTop: "10px"}}>
                  <b>Border Countries:</b>
                  {countryData.borders.length > 0 ? (
                  countryData.borders.map((borderCountry, index) => (
                      <Button
                      key={index}
                      onClick={() => handleBorderClick(borderCountry.name)}
                      style={{ margin: '5px' }}
                      >
                      {borderCountry.name}
                      </Button>
                  ))
                  ) : (
                  <span> None</span>
                  )}
              </div>
            </div>
        </div>
      </CountryDetailContainer>
    </>
  );
};

export default CountryDetail;