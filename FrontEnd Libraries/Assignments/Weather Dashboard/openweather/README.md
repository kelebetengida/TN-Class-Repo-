# Weather Dashboard 

### Description 
##### Welcome to your first mini project with Axios. The goal of this project is for you to build an Open Weather Dashboard using the OpenWeather API. Once you create an OpenWeather account, you will use the API key to make a GET request to retrieve weather data for a specific city. Using the data for the specified city, you will display the weather information. The task is to display the weather data for the next 5 days on your screen.
## 1: Set Up the React Application
First, ensure you have create-react-app installed. If not, you can install it using npm or yarn:

`npx create-react-app` 
`open-weather-dashboard`
`cd open-weather-dashboard`


## 2: Install Axios
Install Axios to handle the API calls:

`npm install axios`

### 3: Create OpenWeather API Key
Step-by-Step Guide to Get an OpenWeather API Key
1. Sign Up on OpenWeatherMap
Visit the OpenWeatherMap website: Go to OpenWeatherMap.
Create an account: If you don’t have an account, you’ll need to sign up. Click on the "Sign Up" button and fill in the required details (email, username, password). If you already have an account, you can log in.
2. Verify Your Email
Check your email: After signing up, you will receive a verification email from OpenWeatherMap.
Verify your email: Open the email and click on the verification link.
3. Generate an API Key
Log in to your account: Once you’ve verified your email, log in to your OpenWeatherMap account.
Navigate to the API keys section: In your account dashboard, find the "API keys" section. You can usually find this under "API keys" or "My API keys" in the navigation menu.
Create a new API key: Click on the "Generate" or "Create" button to generate a new API key. Give it a name (e.g., "Weather Dashboard App") to keep track of its usage.
4. Copy Your API Key
Copy the API key: Once generated, copy the API key. You will use this key in your application to authenticate your requests to the OpenWeather API.
5. Add the API Key to Your React Project
Create a .env file: In the root directory of your React project, create a .env file if you don’t already have one.

Add the API key to the .env file: Add the following line to your .env file, replacing your_openweather_api_key with the API key you copied:


`REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key`

## 4: Set Up Environment Variables

This is a file you create to display the API key. Please dont store it anywhere elese. It is a confidential code so make sure to only add it to this file.

Create a .env file in the root of your project and add your API key:

`REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key`

## 5: Create Weather Dashboard Component
Create a new file WeatherDashboard.js in the src folder:

`// src/WeatherDashboard.js`




## 7: Add Some Basic Styling

Create a WeatherDashboard.css file and add some basic styling:
