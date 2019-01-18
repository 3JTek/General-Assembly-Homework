![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Mapbox RESTCountries lab

Your challenge is to place the maps of the world on the relevant countries of a map using the [RESTCountries API](https://restcountries.eu/), [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api) and React.

![screenshot](https://media.git.generalassemb.ly/user/15120/files/16103400-1b13-11e9-8246-4e49d0a43db5)

## Deliverables

* A React app that generates a map with flags
* You should get your data in the main `App` component, and pass it into a `Map` component which takes care of creating and displaying the flags

## Important Note

There are a few things to be aware of:

1. RESTCountries provides a `latlng` array for each country in an array in the following format:
  ```js
  [latitude, longitude]
  ```
  Mapbox expects `lngLat` data in the following formats:
  ```js
  // either
  [longitude, latitude]
  // or
  { lat: latitude, lng: longitude }
  ```

1. **RESTCountries does not provide latitude and longitude information for all countries.** There are a few with empty `latlng` arrays. **THIS WILL CAUSE ERRORS**. Make sure you do not attempt to place flags on countries that do not have latitude and longitude information!

## Tips

* Work slowly towards your goal, start by rendering just a map.
* Once you have the data from RESTCountries, you should remove any country that does not have latitude and longitude information before attempting to render the flags. _Which array method would be good for this?_
* Place default markers before replacing them with the actual flag images.
* **Read the error messages carefully**, if you don't understand them, use Google or ask on Slack for help.

## Bonus

Using the Mapbox documentation and a bit of Googling around, try to add a popup with the name of the country.
