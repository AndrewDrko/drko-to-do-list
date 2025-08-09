import { useState } from "react";
import { Button } from "./Button";

export function Form({ onCreateTask, onShowModal, onShowToast }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("low");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !date) return null;

    const id = crypto.randomUUID();

    const newTask = {
      id,
      task: title,
      date: new Date(date).toISOString().split("T")[0],
      priority,
      completed: false,
    };

    onCreateTask(newTask);
    onShowModal(false);
    onShowToast("¡Tarea agregada!");
  }

  function handleCancel() {
    onShowModal(false);

    setTitle("");
    setDate("");
    setPriority("low");
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label>📝 Tarea: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength="300"
        required
      />
      <label>📅 Fecha: </label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label>❗ Prioridad: </label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">🟢 Baja Prioridad</option>
        <option value="medium">🟠 Media Prioridad</option>
        <option value="high">🔴 Alta Prioridad</option>
      </select>
      <div className="form-buttons">
        <Button style={{ backgroundColor: "#EF233C" }} onClick={handleCancel}>
          Cancelar
        </Button>
        <Button type="submit" style={{ backgroundColor: "#378b61ff" }}>
          Aceptar
        </Button>
      </div>
    </form>
  );
}
