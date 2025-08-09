import { IoMdAdd } from "react-icons/io";
import { Message } from "./Message";
import { TaskList } from "./TaskList";
import { Button } from "./Button";

export function Main({
  tasks,
  onCompleteStatus,
  onShowModal,
  onDeleteTask,
  selectedDate,
}) {
  const showTasks =
    selectedDate === "all"
      ? tasks
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

  return (
    <div className="main" style={{ position: "relative" }}>
      <div className="headings">
        <h1>Tareas pendientes</h1>
        <span>
          {selectedDate === "all" ? "TODAS LAS FECHAS" : selectedDate}
        </span>
        <TaskList
          tasks={showTasks}
          onCompleteStatus={onCompleteStatus}
          onDeleteTask={onDeleteTask}
        />
      </div>

      <Button
        style={{ position: "absolute", bottom: "2rem", right: "3rem" }}
        onClick={() => onShowModal()}
      >
        <IoMdAdd /> Nueva Tarea
      </Button>
    </div>
  );
}
