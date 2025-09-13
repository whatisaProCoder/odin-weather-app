export default function DynamicIconSet() {
  // This ensures webpack includes all SVG files in the bundle
  const requireIcon = require.context('../../../icons', false, /\.svg$/);

  const dynamicIconSet = {
    "clear-day": requireIcon('./clear-day.svg'),
    "clear-night": requireIcon('./clear-night.svg'),
    "cloudy": requireIcon('./cloudy.svg'),
    "fog": requireIcon('./fog.svg'),
    "hail": requireIcon('./hail.svg'),
    "partly-cloudy-day": requireIcon('./partly-cloudy-day.svg'),
    "partly-cloudy-night": requireIcon('./partly-cloudy-night.svg'),
    "rain-snow-showers-day": requireIcon('./rain-snow-showers-day.svg'),
    "rain-snow-showers-night": requireIcon('./rain-snow-showers-day.svg'),
    "rain-snow": requireIcon('./rain-snow.svg'),
    "rain": requireIcon('./rain.svg'),
    "showers-day": requireIcon('./showers-day.svg'),
    "showers-night": requireIcon('./showers-night.svg'),
    "sleet": requireIcon('./sleet.svg'),
    "snow-showers-day": requireIcon('./snow-showers-day.svg'),
    "snow-showers-night": requireIcon('./snow-showers-night.svg'),
    "snow": requireIcon('./snow.svg'),
    "thunder-rain": requireIcon('./thunder-rain.svg'),
    "thunder-showers-day": requireIcon('./thunder-showers-day.svg'),
    "thunder-showers-night": requireIcon('./thunder-showers-night.svg'),
    "thunder": requireIcon('./thunder.svg'),
    "wind": requireIcon('./wind.svg'),
    "null": requireIcon('./clear-day.svg'),
  };

  const getIcons = () => {
    return dynamicIconSet;
  };

  return { getIcons };
}