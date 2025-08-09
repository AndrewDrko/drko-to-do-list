import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { NumberIndicator } from "./NumberIndicator";
import { Task } from "./Task";

export function CompletedList({ tasks, onCompleteStatus, onDeleteTask }) {
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);

  return (
    <>
      <div
        className="completed-selector"
        onClick={() => setShowCompletedTasks(!showCompletedTasks)}
      >
        <div className="selector-content">
          <IoChevronDownSharp className={showCompletedTasks ? "" : "open"} />
          <span>Completado</span>
        </div>
        <NumberIndicator>{tasks.length}</NumberIndicator>
      </div>

      {showCompletedTasks &&
        tasks.map((task) => (
          <Task
            id={task.id}
            title={task.task}
            priority={task.priority}
            completed={task.completed}
            key={task.id}
            onCompleteStatus={onCompleteStatus}
            onDeleteTask={onDeleteTask}
          />
        ))}
    </>
  );
}
