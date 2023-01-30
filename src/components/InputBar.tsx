import React, { useRef, ChangeEvent, useState } from "react";
import { AddTodoType, Todo } from "../model";
import "./styles.css";

//interfaces enforce certain a structure within classes or objects//
interface Props {
	handleAddTodo: (data: AddTodoType) => void;
}

export default function InputBar({ handleAddTodo }: Props) {
	const [todo, setTodo] = useState<AddTodoType>({
		todo: "",
		deadline: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		/** this prevents the page form reloading */
		e.preventDefault();
		/** we want to validate the data */
		const validDate = !isNaN(new Date(todo.deadline).getTime());
		console.log("validDate", validDate);
		if (!validDate) {
			alert("please provide a valid date");
			return;
		}

		/** add it to the todo list  */
	};
	// similar to getElementById / hooking HTML element
	return (
		<form className="input" onSubmit={handleSubmit}>
			<div className="input_container">
				<div>
					<input
						type="input"
						value={todo.todo}
						className="input_bar"
						placeholder="todo"
						onChange={(e) => {
							setTodo((prev) => ({
								...prev,
								todo: e.target.value,
							}));
						}}
					/>
				</div>
				{/* <div>
					<input
						ref={inputRef}
						type="input"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
						className="input_two"
						placeholder="Task summary"
					/>
				</div> */}
				<div>
					<input
						type="text"
						value={todo.deadline.toString()}
						onChange={(e) =>
							setTodo((prev) => ({
								...prev,
								deadline: e.target.value,
							}))
						}
						className="input_three"
						placeholder="Deadline"
					/>
				</div>
			</div>
			<div>
				<button className="submit" type="submit">
					Go
				</button>
			</div>
		</form>
	);
}
