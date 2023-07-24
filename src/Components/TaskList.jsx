import Task from "./Task"
function TaskList(props) {
return(   
<div>
{props.myArray.map((tarea)=>{
  return(<Task name={tarea.name} description={tarea.description} state={tarea.state}/>)
  })}
</div>

)
}
export default TaskList