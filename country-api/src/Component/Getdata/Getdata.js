import Item from "antd/es/list/Item";
import React, { useState, useEffect } from "react";
import { jsx } from "react/jsx-runtime";

export const Getdata = () =>{
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div >
            <h1>Data from API</h1>
            {data.map((Item,index) => (
                  <div key={index}>
                    <h3>{Item.name.common}</h3>
                    <p><b>Pobulation:</b> <sapn>82,000,000</sapn></p>
                    <p><b>Region:</b> <sapn>82,000,000</sapn></p>
                    <p><b>Capital:</b> <sapn>82,000,000</sapn></p>
                  </div>
            ))}
        </div>
    );
}

