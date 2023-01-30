import React from 'react';
import { Todo } from '../model';
import SingleTodo from "./SingleTodo";
import './styles.css';

interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setDeadline: React.Dispatch<React.SetStateAction<number>>; 
    // don't know property for ^
}

const TodoList = ({ todos, setTodos, setDeadline }:Props) => {
  return (
        <div className='todos'>
            {todos.map((todo) => (
                <SingleTodo
                    todo={todo}
                    todos={todos}
                    key={todo.id}
                    setTodos={setTodos}
                />
            ))}
        </div>
    );
};

export default TodoList;
