export default class Weather{
  constructor(data){
    this.temp = data.main.temp
    this.humidity = data.main.humidity
    this.name = data.name
  }

  get Template(){
    return `
    <div class="text-primary rounded p-3 border bg-light">
    <h2 class="text-center">Current Weather in ${this.name}</h2>
    <div class="text-center mt-2"><h5> - ${this.temp} </h5></div>
    <div class="text-center mt-2"><h5> Humidity: ${this.humidity} </h5></div>
    </div>
    `
  }
  
  // <button onclick="app.weatherController.celsius('${this.temp}')">Celsius</button>


}