import React, { useState } from "react";


export default function toDoForm({ dispatch }) {
    const [newtoDoText, setNewtoDoText] = useState(" ");

    const handleChanges = (e) => {
        setNewtoDoText(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        setNewtoDoText(" ");
        dispatch(
            {
                type: "ADD_TODO",
                payload: newtoDoText
            }
        );
        setNewtoDoText(" ")
    }

    return (
        <>
            <form className="todoform">
                <input
                    className="todoform-input"
                    type="text"
                    name="newtoDoText"
                    value={newtoDoText}
                    onChange={handleChanges}
                />
                <div className="btn-container">
                    <button
                        className="add-todo-button"
                        onClick={addTodo}
                    >
                        Add Todo
                    </button>

                </div>
            </form>
        </>
    )
};