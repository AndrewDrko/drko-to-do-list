import { IoMdAdd } from "react-icons/io";
import { Message } from "./Message";
import { TaskList } from "./TaskList";
import { Button } from "./Button";
import { useState } from "react";

export function Main({
  tasks,
  onCompleteStatus,
  onShowModal,
  onDeleteTask,
  selectedDate,
}) {
  const [selectOrder, setSelectOrder] = useState("creation");

  const showTasks =
    selectedDate === "all"
      ? [...tasks]
      : tasks.filter((task) => task.date === selectedDate);

  if (!showTasks || showTasks.length === 0)
    return (
      <ul className="task-list">
        <Message color="dark">Aún no hay tareas</Message>
        <Button
          style={{ position: "absolute", bottom: "2rem", right: "3rem" }}
          onClick={() => onShowModal()}
        >
          <IoMdAdd /> Nueva Tarea
        </Button>
      </ul>
    );

  const priorityOrder = {
    high: 3,
    medium: 2,
    low: 1,
  };

  if (selectOrder === "creation") {
    showTasks.sort((a, b) => b.createdAt - a.createdAt);
  }

  if (selectOrder === "name") {
    showTasks.sort((a, b) => a.task.localeCompare(b.task));
  }

  if (selectOrder === "priority") {
    showTasks.sort(
      (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
    );
  }

  return (
    <div className="main" style={{ position: "relative" }}>
      <div className="headings">
        <h1>Tareas pendientes</h1>
        <span>
          {selectedDate === "all" ? "TODAS LAS FECHAS" : selectedDate}
        </span>
        <div>
          <span>Ordenar por: </span>
          <select
            className="select-order"
            value={selectOrder}
            onChange={(e) => setSelectOrder(e.target.value)}
          >
            <option value={"creation"}>Creación</option>
            <option value={"name"}>Nombre</option>
            <option value={"priority"}>Prioridad</option>
          </select>
        </div>

        <TaskList
          tasks={showTasks}
          onCompleteStatus={onCompleteStatus}
          onDeleteTask={onDeleteTask}
        />
      </div>

      <Button
        style={{
          display: "flex",
          justifyContent: "center",
          width: "17rem",
          alignSelf: "flex-end",
        }}
        onClick={() => onShowModal()}
      >
        <IoMdAdd /> Nueva Tarea
      </Button>
    </div>
  );
}
