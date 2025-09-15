export default function WeatherAPI() {
  const API_KEY = "CH7MUQRZ58S76FYJBJNPY87VQ";

  function getData(location) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}`,
        { mode: "cors" },
      ).then(response => {
        if (response.status == 400)
          reject("Cannot find given location.");
        else
          return response.json();
      }).then(json => {
        resolve(json);
      }).catch(error => {
        reject(error);
      });
    })
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
