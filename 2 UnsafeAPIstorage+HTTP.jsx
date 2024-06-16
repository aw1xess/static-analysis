import React, { useState, useEffect } from "react";

function WeatherWidget() {
	const [weather, setWeather] = useState(null);
	const [city, setCity] = useState("San Francisco");

	const apiKey = "1234567890abcdef";

	useEffect(() => {
		if (apiKey) {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
			)
				.then((response) => response.json())
				.then((data) => setWeather(data));
		} else {
			console.error("API key is missing");
		}
	}, [city, apiKey]);

	return (
		<div>
			<h2>Weather in {city}</h2>
			{weather && (
				<div>
					<p>Temperature: {weather.main.temp} °C</p>
					<p>Condition: {weather.weather[0].description}</p>
				</div>
			)}
		</div>
	);
}

export default WeatherWidget;
