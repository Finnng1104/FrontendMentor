import React from "react";
import { useNavigate } from 'react-router-dom';
import { ConuntryComponent, CountryInformation } from "./style";

// Country component: Displays individual country information and handles navigation to the country's detail page
const Country = ({ flagUrl, countryName, population, region, capital, isDarkMode }) => {
    // Number formatter for formatting population numbers
    const numberFormatter = new Intl.NumberFormat('en-US');
    const navigate = useNavigate(); // Hook to navigate programmatically

    // Function to handle click event and navigate to the country detail page
    const handleClick = () => {
      // Encode the country name to ensure it is a valid URL
      navigate(`/country/${countryName}`);
    };

    // Format the population number using the formatter
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