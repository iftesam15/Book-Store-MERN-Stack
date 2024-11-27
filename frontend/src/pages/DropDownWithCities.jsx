import React, { useState } from "react";

const dropdownOptions = [
    {
        name: "USA",
        value: "usa",
        cities: ["New York", "Los Angeles", "Chicago", "Houston"]
    },
    {
        name: "Canada",
        value: "canada",
        cities: ["Toronto", "Vancouver", "Montreal", "Calgary"]
    },
    {
        name: "Australia",
        value: "australia",
        cities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
    },
    {
        name: "India",
        value: "india",
        cities: ["Mumbai", "Delhi", "Bangalore", "Chennai"]
    }
];

const DropdownWithCities = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState("")

    const handleCountryChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedCountry(selectedValue);

        // Find cities for the selected country
        const country = dropdownOptions.find(item => item.value === selectedValue);
        setCities(country ? country.cities : []);
    };
    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setCity(selectedCity);
    }
    return (
        <div className=" flex-col flex  gap-2">
            <label htmlFor="country">Select Country:</label>
            <select className="border border-solid border-blue-300 w-[200px] py-1 rounded-md" id="country" value={selectedCountry} onChange={handleCountryChange}>
                <option value="">--Select a country--</option>
                {dropdownOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>

            <label htmlFor="city">Select City:</label>
            <select className="border border-solid border-blue-300 w-[200px] py-1 rounded-md" id="city" disabled={!cities.length} onChange={handleCityChange}>
                <option value="">--Select a city--</option>
                {cities.map(city => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <p>Selected country: {selectedCountry} <br /> Selected city is: {city}</p>
        </div>
    );
};

export default DropdownWithCities;
