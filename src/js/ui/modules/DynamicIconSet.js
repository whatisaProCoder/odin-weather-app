import clearDayIcon from "../../../icons/clear-day.svg";
import clearNightIcon from "../../../icons/clear-night.svg";
import cloudyIcon from "../../../icons/cloudy.svg";
import fogIcon from "../../../icons/fog.svg";
import hailIcon from "../../../icons/hail.svg";
import partlyCloudyDayIcon from "../../../icons/partly-cloudy-day.svg";
import partlyCloudyNightIcon from "../../../icons/partly-cloudy-night.svg";
import rainSnowShowersDayIcon from "../../../icons/rain-snow-showers-day.svg";
import rainSnowShowersNightIcon from "../../../icons/rain-snow-showers-day.svg";
import rainSnowIcon from "../../../icons/rain-snow.svg";
import rainIcon from "../../../icons/rain.svg";
import showersDayIcon from "../../../icons/showers-day.svg";
import showersNightIcon from "../../../icons/showers-night.svg";
import sleetIcon from "../../../icons/sleet.svg";
import snowShowersDayIcon from "../../../icons/snow-showers-day.svg";
import snowShowersNightIcon from "../../../icons/snow-showers-night.svg";
import snowIcon from "../../../icons/snow.svg";
import thunderRainIcon from "../../../icons/thunder-rain.svg";
import thunderShowersDayIcon from "../../../icons/thunder-showers-day.svg";
import thunderShowersNightIcon from "../../../icons/thunder-showers-night.svg";
import thunderIcon from "../../../icons/thunder.svg";
import windIcon from "../../../icons/wind.svg";

export default function DynamicIconSet() {
  const dynamicIconSet = {
    "clear-day": clearDayIcon,
    "clear-night": clearNightIcon,
    "cloudy": cloudyIcon,
    "fog": fogIcon,
    "hail": hailIcon,
    "partly-cloudy-day": partlyCloudyDayIcon,
    "partly-cloudy-night": partlyCloudyNightIcon,
    "rain-snow-showers-day": rainSnowShowersDayIcon,
    "rain-snow-showers-night": rainSnowShowersNightIcon,
    "rain-snow": rainSnowIcon,
    "rain": rainIcon,
    "showers-day": showersDayIcon,
    "showers-night": showersNightIcon,
    "sleet": sleetIcon,
    "snow-showers-day": snowShowersDayIcon,
    "snow-showers-night": snowShowersNightIcon,
    "snow": snowIcon,
    "thunder-rain": thunderRainIcon,
    "thunder-showers-day": thunderShowersDayIcon,
    "thunder-showers-night": thunderShowersNightIcon,
    "thunder": thunderIcon,
    "wind": windIcon,
    "null": clearDayIcon,
  };


  const getIcons = () => {
    return dynamicIconSet;
  };

  return { getIcons };
}
