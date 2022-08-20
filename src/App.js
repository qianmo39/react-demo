import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "吃饭", completed: false },
    { id: uuidv4(), text: "睡觉", completed: true },
    { id: uuidv4(), text: "摸鱼", completed: false },
  ]);
  const addItem = (text) => {
    setItems((prevItems) => {
      return [...prevItems, { id: uuidv4(), text: text, completed: false }];
    });
  };
  const markCompleted = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return item.id === id
          ? { ...item, completed: !item.completed }
          : { ...item };
      });
    });
  };
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                items={items}
                markCompleted={markCompleted}
                deleteItem={deleteItem}
                addItem={addItem}
              />
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
