import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd';
import {ArrowLeftOutlined}  from '@ant-design/icons';

import { CountryDetailContainer } from './style'; 

const CountryDetail = ({ isDarkMode }) => {
  const numberFormatter = new Intl.NumberFormat('en-US');
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { countryName } = useParams();
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
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

        setCountryData({
          name: country.name.common,
          flagUrl: country.flags.png,
          nativeName: country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A',
          population:numberFormatter.format(country.population),
          region: country.region,
          subRegion: country.subregion,
          capital: country.capital ? country.capital[0] : 'N/A',
          topLevelDomain: country.tld ? country.tld[0] : 'N/A',
          currencies: country.currencies ? Object.values(country.currencies)[0].name : 'N/A',
          languages: country.languages ? Object.values(country.languages).join(', ') : 'N/A',
          borders: borderDetails.filter(detail => detail !== null).map(detail => ({
            name: detail.name.common,
            code: detail.cca3 // Using alpha-3 code for the URL
          })), // Ensure this is always an array
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
    navigate('/'); // Go back to the previous page
  };
  if (loading) return <div>Loading...</div>;
  if (!countryData) return <div>No data available</div>;
  return (
    <>
    <CountryDetailContainer isDarkMode={isDarkMode}>
        <Button isDarkMode={isDarkMode} onClick={handleBackClick} style={{ marginBottom: '20px', padding: '20px 30px', fontSize: '18px' }}>
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