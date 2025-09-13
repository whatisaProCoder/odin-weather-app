export default function DataExtractor() {
  function parseCurrentWeatherData(data) {
    const relevantData = {
      latitude: data.latitude,
      longitude: data.longitude,
      address: data.address,
      timezone: data.timezone,
      datetime: data.days[0].datetime,
      temp: data.currentConditions.temp,
      feelslike: data.currentConditions.feelslike,
      dew: data.currentConditions.dew,
      humidity: data.currentConditions.humidity,
      precip:
        data.currentConditions.precip != null
          ? data.currentConditions.precip
          : "0",
      preciptype:
        data.currentConditions.preciptype != null
          ? data.currentConditions.preciptype[0]
          : "None",
      winddir: data.currentConditions.winddir,
      windspeed: data.currentConditions.windspeed,
      pressure: data.currentConditions.pressure,
      cloudcover: data.currentConditions.cloudcover,
      visibility: data.currentConditions.visibility,
      uvindex: data.currentConditions.uvindex,
      conditions: data.currentConditions.conditions,
      description: data.days[0].description,
      iconname: data.currentConditions.icon,
    };
    return relevantData;
  }

  function parseForecastData(data) {
    const relevantData = { days: [] };
    for (let i = 1; i <= 7; i++) {
      const dayData = data.days[i];
      const distilledDayData = {
        datetime: dayData.datetime,
        tempmax: dayData.tempmax,
        tempmin: dayData.tempmin,
        temp: dayData.temp,
        conditions: dayData.conditions,
        iconname: dayData.icon,
      };
      relevantData.days.push(distilledDayData);
    }
    return relevantData;
  }

  return { parseCurrentWeatherData, parseForecastData };
}
