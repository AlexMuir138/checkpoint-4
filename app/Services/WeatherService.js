import { ProxyState } from "../AppState.js"
import Weather from "../Models/Weather.js"

class WeatherService{

  async getWeather(){
    let res = await axios.get('https://bcw-sandbox.herokuapp.com/api/weather')
    console.log(res.data)
    ProxyState.weather = new Weather(res.data)
    console.log(ProxyState.weather)
  }

}
export const weatherService = new WeatherService