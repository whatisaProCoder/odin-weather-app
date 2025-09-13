# Weather Dashboard App

A sleek, responsive weather application that provides current weather data and weekly forecasts for any location around the world. This project was built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

![Weather Dashboard Preview](demo/dashboard.png)

## Live Demo

You can see the app in action here: [Weather Dashboard Live Demo](https://whatisaprocoder.github.io/odin-weather-app/)

## Features

- **Current Weather Display**: Get real-time weather data for any location
- **Auto-location Detection**: Automatically fetches weather for your current location
- **Weekly Forecast**: View a 7-day weather forecast
- **Detailed Metrics**: View comprehensive weather metrics including:
  - Temperature (current, feels like, min/max)
  - Wind (speed and direction)
  - Humidity, Dew Point, and UV Index
  - Visibility and Cloud Cover
  - Precipitation details
  - Atmospheric Pressure
- **Responsive Design**: Works well on both desktop and mobile devices
- **Dynamic Weather Icons**: Icons change based on weather conditions

## Technologies Used

- **JavaScript**: Vanilla JavaScript with ES6+ features
- **HTML/CSS**: Modern HTML5 and CSS3 with Tailwind CSS
- **Webpack**: For bundling and building the application
- **APIs**:
  - Visual Crossing Weather API: For weather data
  - Browser Geolocation API: For obtaining user's current location
- **date-fns**: For date formatting and manipulation

## Project Structure

The project follows a modular architecture for better organization and maintainability:

```
src/
├── index.js               # Main entry point
├── template.html          # HTML template
├── css/                   # Styling
├── fonts/                 # Font files
├── icons/                 # Weather and UI icons
├── js/
    ├── core/              # Core functionality
    │   ├── APIs/          # API integrations
    │   └── utils/         # Utility functions
    └── ui/                # User interface components
        ├── components/    # Reusable UI components
        ├── modules/       # UI-related modules
        └── pages/         # Page layouts
```

## How It Works

### Core Components

1. **APIs**:

   - `WeatherAPI.js`: Fetches weather data from Visual Crossing API
   - `GeolocationAPI.js`: Gets user's current location coordinates

2. **Utils**:

   - `DataExtractor.js`: Parses and formats the weather API response
   - `DirectionParser.js`: Converts wind direction angles to cardinal directions
   - `DisplayJSON.js`: Utility for displaying JSON data (used for debugging)

3. **UI Components**:
   - `WeatherMetricCard.js`: Displays individual weather metrics
   - `WeatherForecastCard.js`: Displays daily forecast information
   - `DynamicIconSet.js`: Manages weather condition icons
   - `MainPage.js`: Main page layout and functionality

### App Flow

1. When the app loads, it attempts to get the user's current location
2. Weather data is fetched for that location using the Visual Crossing API
3. Current conditions and forecast data are extracted and displayed
4. Users can search for weather in any location using the search bar

## Getting Started for Developers

### Prerequisites

- Node.js and npm installed on your machine
- A Visual Crossing Weather API key (already included in the code)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/whatisaProCoder/odin-weather-app.git
   cd odin-weather-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

## Acknowledgements

- Weather data provided by [Visual Crossing](https://www.visualcrossing.com/)
- Icons adapted from Visual Crossing's [WeatherIcons](https://github.com/visualcrossing/WeatherIcons)
- Project created as part of [The Odin Project](https://www.theodinproject.com/) curriculum

## License

This project is licensed under the ISC License.
