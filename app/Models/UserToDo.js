export default class UserToDo{
  constructor(data){
    this.id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template(){
    let selected = this.completed ? 'checked' : ''

    return `
    <li class="d-flex justify-content-between align-items-center">
    <input type="checkbox" ${selected} onClick="app.userToDoController.toggleChecked(event, '${this.id}')"/><h3 class="text-primary">${this.description}</h3><button class="btn btn-success" onClick="app.userToDoController.deleteUserToDo('${this.id}')">Delete</button></li>
    `
  }
}