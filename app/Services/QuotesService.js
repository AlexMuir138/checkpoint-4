import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"

class QuotesService{
  async getQuote(){
    let res = await axios.get('https://bcw-sandbox.herokuapp.com/api/quotes')
    console.log(res.data)
    ProxyState.quote = new Quote(res.data)
  }
}
export const quotesService = new QuotesService()
