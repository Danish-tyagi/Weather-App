import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({
            city: "Delhi",
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            feelslike: 24.84,
            weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }
    return (
        <div>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <br /><br />
        <InfoBox info={weatherInfo}/>
        </div>
    );
}