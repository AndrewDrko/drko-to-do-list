import { TaskGroupList } from "./TaskGroupList";

export function Aside({ tasks, onSetSelectedDate, selectedDate }) {
  return (
    <aside className="aside">
      <h1>📝 Tareas</h1>
      <TaskGroupList
        tasks={tasks}
        onSetSelectedDate={onSetSelectedDate}
        selectedDate={selectedDate}
      />
    </aside>
  );
}
