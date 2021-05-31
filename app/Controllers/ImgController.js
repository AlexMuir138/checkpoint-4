import { ProxyState } from "../AppState.js"
import { imgService } from "../Services/ImgService.js"

function _draw(){
  let imgElem = document.getElementById('bg-img')

  imgElem.style.backgroundImage = `url('${ProxyState.img.url}')`
  imgElem.style.backgroundSize = 'cover'
}
export default class ImgController{

  constructor(){
    ProxyState.on('img', _draw)
    imgService.getImg()

  }
}