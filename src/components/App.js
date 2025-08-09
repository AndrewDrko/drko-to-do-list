import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Header } from "./Header";
import { Aside } from "./Aside";
import { Main } from "./Main";
import { Modal } from "./Modal";

const initialData = [
  {
    id: 1,
    task: "Cocinarle una torta de huevito a mi Alita",
    date: "2025-08-07",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    task: "Bailar ca'huates pistaches con Dany!!",
    date: "2025-08-07",
    priority: "medium",
    completed: true,
  },
  {
    id: 3,
    task: "Declararle matrimonio a mi Alita hemoshaaaa 💞",
    date: "2025-08-07",
    priority: "high",
    completed: true,
  },
  {
    id: 4,
    task: "Comer pastel de Pau en la noche para vivir para morir para manifestarse por las animas del pulgatorio que todo salga como tenga que salir mi pana echele mi compa y amo a mi novia alee jejeje",
    date: "2025-08-08",
    priority: "low",
    completed: false,
  },
];

function App() {
  const initialValues = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialValues);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("all");

  function handleCompleteStatus(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveData(updatedTasks);
  }

  function saveData(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
  }

  function handleCreateTask(obj) {
    setTasks((tasks) => {
      const updatedTasks = [...tasks, obj];
      saveData(updatedTasks);
      return updatedTasks;
    });

    setSelectedDate(obj.date);
  }

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => {
      const data = task.id !== id;
      saveData(data);
      return data;
    });
    setTasks(updatedTasks);
    saveData(updatedTasks);
  }

  function handleShowModal() {
    setShowModal(!showModal);
  }

  function showToast(text) {
    return toast.success(text, {
      position: "top-left",
      autoClose: 3000,
    });
  }

  return (
    <div className="app">
      {showModal && (
        <Modal
          onShowModal={handleShowModal}
          onCreateTask={handleCreateTask}
          onShowToast={showToast}
        />
      )}
      <Header />
      <div className="grid">
        <Aside
          tasks={tasks}
          onSetSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
        <Main
          tasks={tasks}
          selectedDate={selectedDate}
          onCompleteStatus={handleCompleteStatus}
          onShowModal={handleShowModal}
          onDeleteTask={handleDeleteTask}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
