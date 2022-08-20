import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addItem }) => {
  const [text, setText] = useState("");
  return (
    <form
      style={{ display: "flex" }}
      onSubmit={(e) => {
        e.preventDefault();
        addItem(text);
        setText("");
      }}>
      <input
        type='text'
        style={{ flex: "10", padding: "5px" }}
        placeholder='添加一个任务'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input type='submit' value='add' />
    </form>
  );
};

TodoForm.prototype = {
  addItem: PropTypes.func.isRequired,
};

export default TodoForm;
