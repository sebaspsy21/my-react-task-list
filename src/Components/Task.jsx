import { useState } from "react";

 export function Task (item) {
const { task, onDelete, onEditTask} = item;
const [edit, setEdit] = useState (false) 
function eliminar () {
  onDelete(task.id)
}
function editar() {
  /*onEditTask(task.id)*/
  setEdit(true)
}
if (edit) {
 return <div>
  <input value={task.name}/>
  <input value={task.description}/>
  <button onClick={()=>setEdit(false) }>save</button>
  </div> 
} else{
return(
<div>
      <li className="task">
        <input type="checkbox" />
        <h4>{task.name}</h4>
        <p>{task.description}</p>
        <button onClick={eliminar}>Eliminar</button>
        <button onClick={editar}>Editar</button>
      </li>
    </div>
  );
}
}