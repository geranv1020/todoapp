import React, { useRef, ChangeEvent } from "react";
import "./styles.css";

//interfaces enforce certain a structure within classes or objects//
interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	//this is a function that won't return anything-therefore void is used
	handleAdd: (e: React.FormEvent) => void;
	// deadline: number;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputBar({
	todo,
	setTodo,
	handleAdd,
	handleChange,
}: Props) {
	// similar to getElementById / hooking HTML element
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			className="input"
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<div className="input_container">
				<div>
					<input
						ref={inputRef}
						type="input"
						value={todo}
						className="input_bar"
						placeholder="Name your task"
						onChange={(e) => {
							setTodo(e.target.value);
							handleChange(e);
						}}
					/>
				</div>
				<div>
					<input
						ref={inputRef}
						type="input"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
						className="input_two"
						placeholder="Task summary"
					/>
				</div>
				<div>
					<input
						ref={inputRef}
						type="input"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
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
