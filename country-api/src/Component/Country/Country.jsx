import React from "react";
import { ConuntryComponent, CountryInformation } from "./style";

const Country = ({ flagUrl, countryName, population, region, capital }) => {
    const numberFormatter = new Intl.NumberFormat('en-US');
    const formattedPopulation = numberFormatter.format(population);
        return (
            <ConuntryComponent>
                <div className="Country-img">
                    <img src={flagUrl} alt={countryName} />
                </div>
                <CountryInformation>
                    <h3>{countryName}</h3>
                    <p><b>Population:</b> <span>{formattedPopulation}</span></p>
                    <p><b>Region:</b> <span>{region}</span></p>
                    <p><b>Capital:</b> <span>{capital}</span></p>
                </CountryInformation>
            </ConuntryComponent>
        );
}
export default Country