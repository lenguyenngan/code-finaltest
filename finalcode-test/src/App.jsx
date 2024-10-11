import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Active", "Completed"];

  return (
    <div className="app">
      <h1>#todo</h1>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <TodoList activeTab={activeTab} />
    </div>
  );
}

export default App;
