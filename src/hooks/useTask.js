import { useEffect, useState } from "react";


export const useTask = () => {
    const [task, setTask] = useState();
    const [list, setList] = useState([]);
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
    

    function hadleDelete(taskId) {
        console.log(taskId);
        const listaEliminada = list.filter((e)=>{ return e.id !== taskId})
       localStorage.setItem("list", JSON.stringify(listaEliminada))
       setList(listaEliminada)
        }

        function hadleEdit() {
    
        }
        return {
          handleAddTask,
          hadleDelete,
          list, 
          setTask,
          setDescription,
          hadleEdit
       }

     }
     
    