import WeatherMetricCard from "../components/WeatherMetricCard";
import WeatherForecastCard from "../components/WeatherForecastCard";

import DataExtractor from "../../core/utils/DataExtractor";
import WeatherAPI from "../../core/APIs/WeatherAPI";
import DirectionParser from "../../core/utils/DirectionParser";
import { format, parse } from "date-fns";

import searchIcon from "../../../icons/search-icon.svg";
import visibilityIcon from "../../../icons/visibility-icon.svg";
import humidityIcon from "../../../icons/humidity-icon.svg";
import dewpointIcon from "../../../icons/dewpoint-icon.svg";
import uvindexIcon from "../../../icons/uvindex-icon.svg";
import precipitationIcon from "../../../icons/precipitation-icon.svg";
import typeIcon from "../../../icons/rain-icon.svg";
import windspeedIcon from "../../../icons/windspeed-icon.svg";
import winddirectionIcon from "../../../icons/winddirection-icon.svg";
import pressureIcon from "../../../icons/pressure-icon.svg";
import cloudcoverIcon from "../../../icons/cloudcover-icon.svg";

import DynamicIconSet from "../modules/DynamicIconSet";
import GeolocationAPI from "../../core/APIs/GeolocationAPI";

const dynamicIconSet = DynamicIconSet();

export default function MainPage() {
  const content = document.querySelector(".content");
  content.innerHTML = /* html */ `
    <div class="mt-12 sm:mt-14 w-full text-center text-[#E1E1E1] font-bold text-[1.75rem] sm:text-[2rem] md:text-[2.5rem]">Weather Dashboard</div>
    <div class="mt-10 sm:mt-12 h-14 flex flex-row border-1 border-[#282828] rounded bg-[#1E1E1E] overflow-clip focus-within:border-[#1B5D96]"> 
      <input class="pl-5 w-full outline-none text-[#E1E1E1] text-[1.25rem]" id="search-field" type="text" placeholder="Search location"/>
      <div id="search-button" class="bg-[#1B5D96] hover:bg-[#2c75b5] active:bg-[#1B5D96] w-17 flex flex-row justify-center items-center transition-colors">
        <img class="w-8 ml-0.5" src=${searchIcon} />
      </div>
    </div>
    <div id="dashboard">
    </div>
    <div id="loading-text" class="hidden mt-56 text-center text-[#8a8a8a] text-[1.5rem] max-sm:text-[1.25rem]">Loading...</div>
  `;

  const searchButton = content.querySelector("#search-button");
  const searchField = content.querySelector("#search-field");

  searchButton.addEventListener("click", () => {
    const location = searchField.value.trim();
    if (location != "") {
      clearDashboard();
      showLoader();
      WeatherAPI()
        .getData(location)
        .then((data) => {
          const currentData = DataExtractor().parseCurrentWeatherData(data);
          const forecastData = DataExtractor().parseForecastData(data);
          Dashboard(currentData, forecastData);
          hideLoader();
        }).catch(error => {
          alert(error);
          hideLoader();
        });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
      const location = searchField.value;
      if (location != "") {
        clearDashboard();
        showLoader();
        WeatherAPI()
          .getData(location)
          .then((data) => {
            const currentData = DataExtractor().parseCurrentWeatherData(data);
            const forecastData = DataExtractor().parseForecastData(data);
            Dashboard(currentData, forecastData);
            hideLoader();
          }).catch(error => {
            alert(error);
            hideLoader();
          });
      }
    }
  });

  init();
}

function init() {
  clearDashboard();
  showLoader();
  GeolocationAPI()
    .getCoordinates()
    .then((coordinates) => {
      WeatherAPI()
        .getDataUsingCoordinates(coordinates.latitude, coordinates.longitude)
        .then((data) => {
          const currentData = DataExtractor().parseCurrentWeatherData(data);
          const forecastData = DataExtractor().parseForecastData(data);

          currentData.address = "Current Location";

          Dashboard(currentData, forecastData);

          hideLoader();
        }).catch(error => {
          alert(error);
          hideLoader();
        });
    }).catch(error => {
      alert("Unable to fetch current location.");
      console.log(error);
      hideLoader();
    });
}

function clearDashboard() {
  const dashboard = document.querySelector("#dashboard");
  dashboard.innerHTML = "";
}

function showLoader() {
  const loadingText = document.querySelector("#loading-text");
  loadingText.classList.remove("hidden");
}

function hideLoader() {
  const loadingText = document.querySelector("#loading-text");
  loadingText.classList.add("hidden");
}

function Dashboard(currentData, forecastData) {
  const dashboardElement = document.querySelector("#dashboard");
  dashboardElement.innerHTML = /* html */ `
    <div class="mt-12 sm:mt-16 p-4 flex flex-col border-1 border-[#282828] bg-[#1E1E1E] rounded">
      <div class="flex flex-row">
        <div class="ml-1 flex flex-col flex-1 mr-4">
          <div class="font-bold text-[#E1E1E1] text-[1.25rem]">${currentData.address}</div>
          <div class="mt-2 font-semibold text-[#E1E1E1] text-[1rem]">
            ${format(parse(currentData.datetime, "yyyy-MM-dd", new Date()), "EEEE, do MMM")}
          </div>
        </div>
        <div class="h-full aspect-square bg-[#2d89da] p-2 rounded">
          <img class="h-full w-14" id="current-weather-icon"/>
        </div>
      </div>
      <div class="mt-4 p-4 bg-[#232323] rounded flex flex-row justify-center items-center">
        <div class="font-bold text-[4rem] text-[#E1E1E1]">${currentData.temp}</div>
        <div class="p-1 mb-6 font-bold text-[1.5rem] text-[#E1E1E1]">°C</div>
        <div class="ml-6 max-sm:ml-3 flex flex-col">
          <div class="font-medium text-[1rem] text-[#E1E1E1]">${currentData.conditions}</div>
          <div class="font-medium text-[0.75rem] text-[#AFAFAF]">Feels like ${currentData.feelslike}°C</div>
        </div>
      </div>
      <div class="mt-4 flex flex-row items-center justify-center sm:justify-start">
        <div class="w-[16rem] sm:w-full text-center sm:text-left font-semibold text-[0.75rem] text-[#AFAFAF] leading-[150%]">${currentData.description}</div>
      </div>
    </div>
    <div id="weather-metrics-grid" class="mt-6 p-4 grid grid-cols-2 gap-4 border-1 border-[#282828] bg-[#1E1E1E] rounded">
    </div>
    <div class="mt-12 mb-4 font-bold text-[1.125rem] text-[#B9B9B9]">Weekly Forecast</div>
    <div id="forcasts" class="flex flex-col gap-3"></div>
    <div class="mt-12 pb-4 max-sm:pb-8 text-center text-[0.875rem] text-[#AFAFAF] font-medium">Built by <a class="outline-none text-[#50adff] hover:text-[#82c5ff]" href="https://www.github.com/whatisaProCoder" target="_blank">@whatisaProCoder</a></div>
  `;

  const currentWeatherIcon = dashboardElement.querySelector("#current-weather-icon");
  currentWeatherIcon.src = dynamicIconSet[currentData.iconname];

  const metrics = [
    {
      name: "Visibility",
      value: `${currentData.visibility} km`,
      iconSrc: visibilityIcon,
    },
    {
      name: "Humidity",
      value: `${currentData.humidity}%`,
      iconSrc: humidityIcon,
    },
    {
      name: "Dew Point",
      value: `${currentData.dew}°C`,
      iconSrc: dewpointIcon,
    },
    {
      name: "UV Index",
      value: `${currentData.uvindex}`,
      iconSrc: uvindexIcon,
    },
    {
      name: "Precipitation",
      value: `${currentData.precip} cm`,
      iconSrc: precipitationIcon,
    },
    {
      name: "Type",
      value: `${currentData.preciptype.charAt(0).toUpperCase() + currentData.preciptype.slice(1)}`,
      iconSrc: typeIcon,
    },
    {
      name: "Wind Speed",
      value: `${currentData.windspeed} km/hr`,
      iconSrc: windspeedIcon,
    },
    {
      name: `Direction (${currentData.winddir}°)`,
      value: `${DirectionParser(currentData.winddir)}`,
      iconSrc: winddirectionIcon,
    },
    {
      name: "Pressure",
      value: `${currentData.pressure} mb`,
      iconSrc: pressureIcon,
    },
    {
      name: "Cloud Cover",
      value: `${currentData.cloudcover}%`,
      iconSrc: cloudcoverIcon,
    },
  ];

  const weatherMetricsGridElement = dashboardElement.querySelector(
    "#weather-metrics-grid",
  );

  for (const metric of metrics) {
    const metricCard = WeatherMetricCard({
      name: metric.name,
      value: metric.value,
      iconSrc: metric.iconSrc,
    });
    weatherMetricsGridElement.append(metricCard);
  }

  const forcastSectionElement = dashboardElement.querySelector("#forcasts");

  for (const forecast of forecastData.days) {
    const forecastCard = WeatherForecastCard({
      datetime: forecast.datetime,
      tempmax: forecast.tempmax,
      tempmin: forecast.tempmin,
      temp: forecast.temp,
      conditions: forecast.conditions,
      iconname: forecast.iconname,
    });
    forcastSectionElement.append(forecastCard);
  }
}
