import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ item, markCompleted, deleteItem }) => {
  const itemStyle = {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px dotted #ccc",
    textDecoration: item.completed ? "line-through" : "none",
  };
  return (
    <div style={itemStyle}>
      <p>
        <input
          type='checkbox'
          checked={item.completed}
          onChange={() => markCompleted(item.id)}
          value={item.completed}
        />
        {item.text}
        <button onClick={() => deleteItem(item.id)} style={btnStyle}>
          X
        </button>
      </p>
    </div>
  );
};

const btnStyle = {
  backgroundColor: "#f00",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodoItem;
