async function fetchCurrentTemperature() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-5.795&longitude=-35.2094&current_weather=true&forecast_days=1"
    );

    let data = await response.json();
    let temperature = data.current_weather.temperature;

    document.getElementById("temperature").innerHTML = `${Math.round(
      temperature
    )} °C `;
  } catch (error) {
    console.error(error);
  }
}

fetchCurrentTemperature();
