import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

//use equal sign with 'type'//
type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);
	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();

		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
		);
		setEdit(false);
	};

	// reference to hold input element
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

	//if task is done it will strike it out, if it's not, it remains normal//
	//edit task and when enter is pushed- submit the task//
	return (
		<form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
			{edit ? (
				<input
					//edit todo//
					ref={inputRef}
					value={editTodo}
					onChange={(e) => setEditTodo(e.target.value)}
					className="todos_single--text"
				/>
			) : todo.isDone ? (
				<s className="todos_single--text">{todo.todo}</s>
			) : (
				<span className="todos_single--text">{todo.todo}</span>
			)}

			<div className="iconic">
				<span
					className="icon"
					onClick={() => {
						setEdit(!edit);
					}}
				>
					<AiFillEdit />
				</span>
				<span className="icon" onClick={() => handleDelete(todo.id)}>
					<AiFillDelete />
				</span>
				<span className="icon" onClick={() => handleDone(todo.id)}>
					<MdDone />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
