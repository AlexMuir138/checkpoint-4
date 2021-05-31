import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"
import Quote from "../Models/Quote.js"


function _draw(){
  document.getElementById('quote').innerHTML = ProxyState.quote.Template
}
export default class QuotesController{
  constructor(){
    ProxyState.on('quote', _draw)
    quotesService.getQuote()
  }
}