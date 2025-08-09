import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Header } from "./Header";
import { Aside } from "./Aside";
import { Main } from "./Main";
import { Modal } from "./Modal";

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
