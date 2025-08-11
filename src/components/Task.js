import { useState } from "react";
import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
  IoIosRadioButtonOff,
} from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "./Button";

export function Task({
  id,
  title,
  priority,
  completed,
  date,
  onCompleteStatus,
  onDeleteTask,
}) {
  const [icoHover, setIcoHover] = useState(false);

  return (
    <div className="task-container">
      <li className="task">
        <button
          className="check-button"
          title={completed ? "Desmarcar" : "Marcar como completado"}
          onMouseEnter={() => setIcoHover(true)}
          onMouseLeave={() => setIcoHover(false)}
          onClick={() => onCompleteStatus(id)}
        >
          {completed ? (
            <IoIosCheckmarkCircle />
          ) : icoHover ? (
            <IoIosCheckmarkCircleOutline />
          ) : (
            <IoIosRadioButtonOff />
          )}
        </button>
        <div className="task-data">
          <span className="task-title">{title}</span>
          {priority === "low" && <span>🟢 Baja Prioridad</span>}
          {priority === "medium" && <span>🟠 Media Prioridad</span>}
          {priority === "high" && <span>🔴 Alta Prioridad</span>}
          <span className="task-date">{date}</span>
        </div>
      </li>
      <Button
        onClick={() => onDeleteTask(id)}
        style={{
          height: "5rem",
          alignSelf: "center",
          backgroundColor: "#a80520ff",
        }}
      >
        <IoTrashOutline />
      </Button>
    </div>
  );
}
