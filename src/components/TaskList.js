import { CompletedList } from "./CompletedList";
import { Task } from "./Task";

export function TaskList({ tasks, onCompleteStatus, onDeleteTask }) {
  const completedTasks = tasks.filter((task) => task.completed);
  const unCompletedTasks = tasks.filter((task) => !task.completed);

  return (
    <ul className="task-list">
      {unCompletedTasks.map((task) => (
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
      {tasks.some((task) => task.completed) && (
        <CompletedList
          tasks={completedTasks}
          onCompleteStatus={onCompleteStatus}
          onDeleteTask={onDeleteTask}
        />
      )}
    </ul>
  );
}
