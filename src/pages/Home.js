import React, { Fragment } from "react";
import TodoItem from "../components/TodoItem";
import PropTypes from "prop-types";
import TodoForm from "../components/TodoForm";

const Home = ({ items, addItem, markCompleted, deleteItem }) => {
  return (
    <div>
      <TodoForm addItem={addItem} />
      {items
        .sort((a, b) => a.completed - b.completed)
        .map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              markCompleted={markCompleted}
              deleteItem={deleteItem}
            />
          );
        })}
    </div>
  );
};

Home.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Home;
