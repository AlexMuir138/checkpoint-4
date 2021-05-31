import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


function _draw(){
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}


export default class WeatherController{
  constructor(){
    ProxyState.on('weather', _draw)
    weatherService.getWeather()


  }
  celsius(num){
    const valNum = parseFloat(num);
    return (valNum-32) / 1.8
  }
}