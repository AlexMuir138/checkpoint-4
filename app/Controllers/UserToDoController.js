import { ProxyState } from "../AppState.js"
import { sandboxService } from "../Services/SandboxService.js"



function _draw() {
  let template = ''
  let count = 0
  let total = ProxyState.userToDo.length 

  if (ProxyState.userToDo.length > 0) {

    ProxyState.userToDo.forEach(utd => {
      if (utd.completed) {
        count++
      }
      template += utd.Template
    }

    )
  }
  document.getElementById('todo').innerHTML = template
  document.getElementById('total').innerHTML = `${count} / ${total}`

}

export default class UserToDoController {
  constructor() {
    ProxyState.on('userToDo', _draw)
    ProxyState.on('todo', _draw)
    sandboxService.getUserToDos()



  }
  async addUserToDo(event) {
    event.preventDefault()
    console.log(event.target.elements.todo.value)
    let res = await sandboxService.addUserToDo(event.target.elements.todo.value)
  }

  async deleteUserToDo(toDoId) {

    let result = await Swal.fire({
      title: 'Are you sure, bruh?',
      text: "You can't undo this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I did my task!'
    })
    if (result.isConfirmed) {
      sandboxService.deleteUserToDo(toDoId)
    }

  }

  async toggleChecked(event, toDoId) {
    await sandboxService.toggleChecked(toDoId, event.target.checked)
    _draw()
  }
}