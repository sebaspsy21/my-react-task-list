function Task (props) {
return(
<div className="task">
<input type="checkbox"/>
<h5>{props.name}</h5>
<p>{props.description}</p>
<p className="state">{props.state}</p>
<button>Eliminar</button>
<button>Editar</button>
</div>


)
}

export default Task