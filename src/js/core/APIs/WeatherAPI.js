export default function WeatherAPI() {
  const API_KEY = "CH7MUQRZ58S76FYJBJNPY87VQ";

  async function getData(location) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}`,
      { mode: "cors" },
    );
    const json = await response.json();
    return json;
  }

  async function getDataUsingCoordinates(latitude, longitude) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=metric&key=${API_KEY}`,
      { mode: "cors" },
    );
    const json = await response.json();
    return json;
  }

  return { getData, getDataUsingCoordinates };
}
