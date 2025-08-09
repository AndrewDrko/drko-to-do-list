import { Form } from "./Form";

export function Modal({
  onShowModal,
  onCreateTask,
  onShowToast,
  onSetSelectedDate,
}) {
  return (
    <div className="modal-overlay" onClick={() => onShowModal()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Form
          onCreateTask={onCreateTask}
          onShowModal={onShowModal}
          onShowToast={onShowToast}
          onSetSelectedDate={onSetSelectedDate}
        />
      </div>
    </div>
  );
}
