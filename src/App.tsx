import React, { ChangeEvent, useState } from "react";
import "./App.css";
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";
import { AddTodoType, Todo } from "./model";

//useState- the state of todo with string value//
const App: React.FC = () => {
	//array of todo's / array of a type//
	const [todos, setTodos] = useState<Todo[]>([]);

	// function that is called whenever there's a change in inputs
	// return type is void bc it is not returning anything
	const handleAddTodo = (data: AddTodoType): void => {};

	return (
		<div className="App">
			<span className="header">Get It Done</span>
			<InputBar handleAddTodo={handleAddTodo} />
			{/* <TodoList todos={todos} setTodos={setTodos} setDeadline={setDeadline} /> */}
		</div>
	);
};

export default App;
