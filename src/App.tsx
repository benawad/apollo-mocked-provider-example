import React from "react";
import { TodoForm } from "./TodoForm";
import { Todos } from "./Todos";

const App: React.FC = () => {
  return (
    <div>
      <TodoForm />
      <Todos />
    </div>
  );
};

export default App;
