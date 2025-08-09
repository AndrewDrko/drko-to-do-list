import { NumberIndicator } from "./NumberIndicator";

export function TaskGroup({ children, num, active, onClick }) {
  return (
    <li className={`task-group ${active ? "selected" : ""}`} onClick={onClick}>
      <span>{children}</span>
      <span>
        <NumberIndicator>{num}</NumberIndicator>
      </span>
    </li>
  );
}
