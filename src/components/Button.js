export function Button({ children, style, onClick, type }) {
  return (
    <button type={type} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
