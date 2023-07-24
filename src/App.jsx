import Header from './Components/Header'
import TaskList from './Components/TaskList'
import "./App.css"
import Task from './Components/Task'
import { useState } from 'react'

const arrayTask = [
    { name:"tarea1", description:"desayunar", state:"false"},
    { name:"tarea2", description:"ir al gimnasio", state:"false"},
    {name:"tarea3", description:"bañarme", state:"false"}
]
function App() {
const [task, setTask] = useState("");

return ( 
<div>
<Header titulo1="My task list"/>
<form onSubmit={(e)=>{addTask(e)}}>
<input value={task} onChange={(e)=>setTask(e.target.value)}/>
<button >Add task</button>
</form>
<TaskList  myArray= {arrayTask}/>
<button className='boton todo'>Clear all</button>
</div>
)
}
export default App
