# City Sun

You have been tasked to build a web service which will provide a 7 day weather forecast for a provided city.

The service will have a single endpoint: `/forecast` which should return the data in JSON format.

So, for example, a `GET` request to `/forecast?city=London, UK` would return a JSON payload with a weekly forecast for London. For example:

```json
{
  "summary": "Mixed precipitation today and tomorrow, with high temperatures rising to 10°C next Thursday.",
  "icon": "snow",
  "data": [
    {
      "time": 1548892800,
      "summary": "Light snow (< 1 cm.) overnight.",
      "icon": "snow",
      "temperatureHigh": 3.56,
      "temperatureLow": 0.98
    },
    {
      "time": 1548979200,
      "summary": "Mostly cloudy throughout the day.",
      "icon": "partly-cloudy-day",
      "temperatureHigh": 3.63,
      "temperatureLow": -0.26
    },
    {
      "time": 1549065600,
      "summary": "Partly cloudy in the morning.",
      "icon": "partly-cloudy-night",
      "temperatureHigh": 4,
      "temperatureLow": -1.18
    },
    {
      "time": 1549152000,
      "summary": "Partly cloudy throughout the day.",
      "icon": "partly-cloudy-night",
      "temperatureHigh": 5,
      "temperatureLow": 0.62
    },
    {
      "time": 1549238400,
      "summary": "Mostly cloudy throughout the day.",
      "icon": "partly-cloudy-day",
      "temperatureHigh": 7.36,
      "temperatureLow": 5.65
    },
    {
      "time": 1549324800,
      "summary": "Mostly cloudy throughout the day.",
      "icon": "partly-cloudy-day",
      "temperatureHigh": 8.71,
      "temperatureLow": 4.24
    },
    {
      "time": 1549411200,
      "summary": "Mostly cloudy throughout the day.",
      "icon": "partly-cloudy-day",
      "temperatureHigh": 8.76,
      "temperatureLow": 5.93
    },
    {
      "time": 1549497600,
      "summary": "Partly cloudy starting in the afternoon.",
      "icon": "partly-cloudy-night",
      "temperatureHigh": 9.96,
      "temperatureLow": 1.31
    }
  ]
}
```

You can use any public APIs to complete the task, but we would recommend:

* [OpenCage Geocoding API](https://opencagedata.com/api) to get lat/lng coordinates for cities
* [Dark Sky API](https://darksky.net/dev) for weather info

## Tips

* Accustomise yourself to the relevant APIs and their documentation using Insomnia first. Make sure you can get all the data from your APIs before attempting to build a solution
* Use the [Request Promise library](https://github.com/request/request-promise) to make HTTP requests from your Node.JS application
* You should store all the API keys and secrets in an `.env` file, and active them using the [dotenv module](https://www.npmjs.com/package/dotenv)

_Have fun, and happy coding!_
