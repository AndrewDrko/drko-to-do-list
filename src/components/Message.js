import { IoFileTrayOutline } from "react-icons/io5";

export function Message({ children, color }) {
  return (
    <div className={`message ${color}`}>
      <span>{children}</span>
      <IoFileTrayOutline />
    </div>
  );
}
