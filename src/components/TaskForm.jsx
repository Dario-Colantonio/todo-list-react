import { useState, useEffect, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      titulo,
      descripcion,
    });
    setTitulo("");
    setDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="escribir tarea"
        onChange={(e) => {
          setTitulo(e.target.value);
        }}
        value={titulo}
        autoFocus
      />
      <textarea
        placeholder="escribir la descripcion de la tarea"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
      ></textarea>
      <button>guardar</button>
    </form>
  );
}

export default TaskForm;
