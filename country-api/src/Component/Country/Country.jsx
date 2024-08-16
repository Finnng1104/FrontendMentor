import React from "react";
import { useNavigate } from 'react-router-dom';
import { ConuntryComponent, CountryInformation } from "./style";

const Country = ({ flagUrl, countryName, population, region, capital, isDarkMode }) => {
    const numberFormatter = new Intl.NumberFormat('en-US');
    const navigate = useNavigate();

    const handleClick = () => {
      // Mã hóa tên quốc gia để đảm bảo URL hợp lệ
      const formattedCountryName = encodeURIComponent(countryName);
      navigate(`/country/${formattedCountryName}`);
    };

    const formattedPopulation = numberFormatter.format(population);

    return (
        <ConuntryComponent onClick={handleClick} isDarkMode={isDarkMode}>
            <div className="Country-img">
                <img src={flagUrl} alt={countryName} />
            </div>
            <CountryInformation isDarkMode={isDarkMode}>
                <h2>{countryName}</h2>
                <p><b>Population:</b> <span>{formattedPopulation}</span></p>
                <p><b>Region:</b> <span>{region}</span></p>
                <p><b>Capital:</b> <span>{capital}</span></p>
            </CountryInformation>
        </ConuntryComponent>
    );
};

export default Country;