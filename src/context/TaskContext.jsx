import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [Idcounter, setIdcounter] = useState(0);

  function createTask(task) {
    //setTasks modifica al arreglo tasks y
    // dentro de los parentesis copia todos los datos del arreglo tasks y agrega un nuevo arreglo
    //que tiene como titulo que se pasa por parametro y el id es la longitud del arreglo tasks
    setTasks([
      ...tasks,
      {
        titulo: task.titulo,
        id: Idcounter,
        descripcion: task.descripcion,
      },
    ]);
    setIdcounter(Idcounter + 1);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
