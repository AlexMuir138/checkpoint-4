import { ProxyState } from "../AppState.js"
import Img from "../Models/Img.js"

class ImgService{

  
  async getImg(){
    let res = await axios.get('https://bcw-sandbox.herokuapp.com/api/images')
    ProxyState.img = new Img(res.data)
  }
}

export const imgService = new ImgService()