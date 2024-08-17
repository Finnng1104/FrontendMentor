import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { CountryDetailContainer, ShowNotification } from './style'; 

// CountryDetail component: Displays detailed information about a selected country
const CountryDetail = ({ isDarkMode }) => {
 
  // State to store country data and loading status
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { countryName } = useParams(); // Get the country name from the URL parameters
  const navigate = useNavigate(); // Hook to navigate programmatically

  // useEffect to fetch country data when the component mounts or countryName changes
  useEffect(() => {
    const numberFormatter = new Intl.NumberFormat('en-US'); // Formatter for population numbers
    const fetchCountryData = async () => {
      try {
        setLoading(true); // Start loading data
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
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
              return null; // Handle the error for individual border country fetch
            }
          })
        );

        // Set the country data with formatted details
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
        setLoading(false); // Data loading complete
      }
    };
   
    fetchCountryData();
  }, [countryName]);

  // Handle navigation to a neighboring country's detail page
  const handleBorderClick = (borderCountryCode) => {
    navigate(`/country/${borderCountryCode}`);
  };

  // Handle back button click to navigate back to the home page
  const handleBackClick = () => {
    navigate('/');
  };

  // Show loading notification if data is still being fetched
  if (loading) return <ShowNotification isDarkMode={isDarkMode}><h3>Loading...</h3></ShowNotification>;

  // Show a notification if no country data is available
  if (!countryData) return <ShowNotification isDarkMode={isDarkMode}><h3>No data available</h3></ShowNotification>;

  return (
    <>
      {/* Back button to navigate back to the main page */}
      <CountryDetailContainer isDarkMode={isDarkMode}>
          <Button isDarkMode={isDarkMode} onClick={handleBackClick} style={{ marginBottom: '20px', padding: '20px 30px', fontSize: '18px' }}>
              <ArrowLeftOutlined />
              Back
          </Button>
      </CountryDetailContainer>

      {/* Display country details */}
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
              {/* Display neighboring countries */}
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