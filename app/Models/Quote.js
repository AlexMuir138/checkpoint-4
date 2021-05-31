export default class Quote{
  constructor(data){
    this.content = data.content
    this.author = data.author
  }

  get Template(){
    return `
    <div class="text-success rounded p-3 border bg-light">
    <h2 class="text-center">Your inspiration:</h2>
    <h4 class="myDIV">${this.content}</h4>
    <div class="text-right mt-2 hide"><h5> - ${this.author}</h5></div>
    </div>
    `
  }
}