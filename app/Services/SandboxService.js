import { ProxyState } from "../AppState.js"
import UserToDo from "../Models/UserToDo.js"

const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/alex/todos"
})

class SandboxService{

  async getUserToDos(){
    let res = await sandboxApi.get()
    ProxyState.userToDo = res.data.map(utd => new UserToDo(utd))
    

  }
  

  async addUserToDo(description){
    console.log('add to do')
    let res = await sandboxApi.post('', {description})
    ProxyState.userToDo = [...ProxyState.userToDo, new UserToDo(res.data)]
  }

  async deleteUserToDo(toDoId){
    await sandboxApi.delete(toDoId)
    ProxyState.userToDo = ProxyState.userToDo.filter(utd => utd.id != toDoId)
  }

  

  async toggleChecked(toDoId, state){
    await sandboxApi.put(toDoId, {completed: state})
    await this.getUserToDos()
    
  }
}
export const sandboxService = new SandboxService