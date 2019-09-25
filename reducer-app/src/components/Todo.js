import React from "react";

export default function Todo({ todo, dispatch }) {
    const handleChanges = (e) => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: todo.id
        })
    }

    return (
        <div
            onClick={handleChanges}
            className={"todo toggled"} >
            <p>{todo.item}</p>
        </div>
    );
}