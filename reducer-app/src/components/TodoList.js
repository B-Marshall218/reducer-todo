import React, { useReducer } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { toDoReducer, initialState } from "../reducers/reducer"


const TodoList = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialState);
console.log(state);
    return (
        <>
        <div>
            {state.items.map(todo => {
            return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
            })}
        </div>
        <TodoForm dispatch={dispatch} />
        </>
    );
};

export default TodoList;



