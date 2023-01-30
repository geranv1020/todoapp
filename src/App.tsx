import React, { ChangeEvent, useState } from "react";
import "./App.css";
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

//useState- the state of todo with string value//
const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	//array of todo's / array of a type//
	const [todos, setTodos] = useState<Todo[]>([]);
	//state of completed todos
	const [deadline, setDeadline] = useState<number>(0);

	// function that is called whenever there's a change in inputs
	// return type is void bc it is not returning anything
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		console.log(
			"event target name is ",
			!!event.target.name.trim() ? event.target.name : "does not exist"
		);
		if (event.target.name === "todo") {
			setTodo(event.target.value);
		} else {
			setDeadline(Number(event.target.value));
		}
	};
	//prevent refreshing of page//
	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();

		//take whatever is already in todos and add another todo//
		//give a random id to the todos//
		//empty input field after task is added//
		if (todo) {
			setTodos([
				...todos,
				{ id: Date.now(), todo, isDone: false, deadline: deadline },
			]);
			setTodo("");
		}
	};

	return (
		<div className="App">
			<span className="header">Get It Done</span>
			<InputBar
				todo={todo}
				setTodo={setTodo}
				handleAdd={handleAdd}
				handleChange={handleChange}
			/>
			<TodoList todos={todos} setTodos={setTodos} setDeadline={setDeadline} />
		</div>
	);
};

export default App;
