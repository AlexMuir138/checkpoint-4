import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


function _draw(){
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
  console.log()
}


export default class WeatherController{
  constructor(){
    ProxyState.on('weather', _draw)
    weatherService.getWeather()


  }
  celsius(kelvin){
    let celsius = kelvin - 273.15
    return celsius.toFixed(2)
  }

  fahrenheit(kelvin){
    let fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    return fahrenheit.toFixed(2)
  }
}