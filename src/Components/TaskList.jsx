import {Task} from "./Task";
import { useEffect, useState } from "react";

const arrayTask = [
  { name:"tarea1", description:"desayunar", state:"false", id:1},
  { name:"tarea2", description:"ir al gimnasio", state:"false", id:2},
  {name:"tarea3", description:"bañarme", state:"false", id:3}
]
 export function TaskList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(arrayTask);
  const [description, setDescription] = useState("")
   
 

  function handleAddTask() {
    const newTask = {
      id: crypto.randomUUID(),
      name: task,
      description: description ,
      state: false,
    };
    let newStorage = [...list, newTask]
    setList(newStorage);
    localStorage.setItem("list", JSON.stringify(newStorage));
}
useEffect(()=>{
 const localStorageData = localStorage.getItem("list");
 if (!localStorageData) {
  localStorage.setItem("list",JSON.stringify(arrayTask))
 }
 else{const storedlist = JSON.parse(localStorageData) 
  setList(storedlist)
 }
 
}, []);

/*function handleChange(task) {
  setTask(task.map(t => {
    if (t.id === task.id) {
      return task;
    } else {
      return t;
    }
  }));
}
*/
function hadleDelete(taskId) {
  console.log(taskId);
  const listaEliminada = list.filter((e)=>{
    return e.id !== taskId})
 localStorage.setItem("list", JSON.stringify(listaEliminada))
 setList(listaEliminada)

} 

return(   
<div>
      <input
        placeholder="Add Task"
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
     <br></br>
      <input
        placeholder="Add Description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button onClick={handleAddTask}>Add</button>



      {list.map((elemeto) => {
        return <Task key={elemeto.id} task={elemeto} onDelete={hadleDelete} />;
      })}
    </div>
  );
}
