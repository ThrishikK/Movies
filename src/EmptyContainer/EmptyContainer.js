import "./EmptyContainer.css";

function EmptyContainer({ message }) {
  return (
    <div className="empty-container">
      <h2>{message}</h2>
    </div>
  );
}

export default EmptyContainer;
