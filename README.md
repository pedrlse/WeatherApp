# Weather App

## Description
The Weather App is a simple web application that allows users to search for weather information based on the city the user inputs. It retrieves weather data from the OpenWeatherMap API and displays the temperature, description, humidity, and wind speed for the searched city.

## File Structure
```
Weather-App/
  ├── images/
  ├── .gitignore
  ├── config.js
  ├── index.html
  ├── index.js
  └── style.css
```

## Usage
1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your web browser(I used [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) from visual studio code marketplace to start a local server).
3. Enter the name of the city for which you want to check the weather in the search box.
4. Click the search button to retrieve the weather information for the specified city.

## Dependencies
- None

## Note
This app uses a simple API key provided directly in the `config.js` file for development purposes. In a production environment, it is essential to protect sensitive information such as API keys and use server-side approaches to handle API calls securely.

## Acknowledgments
This project is built using code snippets from the [100 Days of JavaScript](https://github.com/AsmrProg-YT/100-days-of-javascript/tree/master/Day%20%2310%20-%20Weather%20App) repository by AsmrProg. We express our gratitude for their valuable contributions to the open-source community.
