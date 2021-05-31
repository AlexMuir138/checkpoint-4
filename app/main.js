import ImgController from "./Controllers/ImgController.js";
import QuotesController from "./Controllers/QuotesController.js";
import UserToDoController from "./Controllers/UserToDoController.js";
import ValuesController from "./Controllers/ValuesController.js";
import WeatherController from "./Controllers/WeatherController.js";
import UserToDo from "./Models/UserToDo.js";

class App {
  imgController = new ImgController()

  quotesController = new QuotesController()

  weatherController = new WeatherController()

  userToDoController = new UserToDoController()
}

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM";
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " "+ midday ; /* adding time to the div */
  var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); 

window["app"] = new App();
