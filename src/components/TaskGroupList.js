import { Message } from "./Message";
import { TaskGroup } from "./TaskGroup";

export function TaskGroupList({ tasks, onSetSelectedDate, selectedDate }) {
  const today = new Date();
  const todayString = today.toLocaleDateString("en-CA").split("T")[0];
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split("T")[0];

  const todayTasks = tasks.filter((task) => task.date === todayString);
  const tomorrowTasks = tasks.filter((task) => task.date === tomorrowString);
  const otherDateTasks = tasks.filter(
    (task) => task.date !== tomorrowString && task.date !== todayString
  );

  const uniqueDates = [...new Set(otherDateTasks.map((task) => task.date))];

  console.log(todayString);

  if (!tasks || tasks.length === 0) {
    return (
      <ul className="task-group-list">
        <Message>Aún no hay tareas</Message>
      </ul>
    );
  }

  return (
    <ul className="task-group-list">
      {tasks && tasks.length !== 0 && (
        <TaskGroup
          num={tasks.length}
          onClick={() => onSetSelectedDate("all")}
          active={selectedDate === "all" ? true : false}
        >
          TODAS
        </TaskGroup>
      )}

      {todayTasks && todayTasks.length !== 0 && (
        <TaskGroup
          num={todayTasks.length}
          onClick={() => onSetSelectedDate(todayString)}
          active={selectedDate === todayString ? true : false}
        >
          🌞 Hoy
        </TaskGroup>
      )}

      {tomorrowTasks && tomorrowTasks.length !== 0 && (
        <TaskGroup
          num={tomorrowTasks.length}
          onClick={() => onSetSelectedDate(tomorrowString)}
          active={selectedDate === tomorrowString ? true : false}
        >
          📆 Mañana
        </TaskGroup>
      )}

      {otherDateTasks &&
        otherDateTasks.length !== 0 &&
        uniqueDates.map((date) => (
          <TaskGroup
            key={date}
            num={otherDateTasks.filter((task) => task.date === date).length}
            onClick={() => onSetSelectedDate(date)}
            active={selectedDate === date ? true : false}
          >
            🧭 {date.replace(/-/g, "/")}
          </TaskGroup>
        ))}
    </ul>
  );
}
