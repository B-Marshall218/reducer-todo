
export const initialState = {
    items: [

        {
            item: 'Learn about reducers',
            completed: false,
            id: ("")
        },

        {
            item: "Mow Lawn",
            completed: false,
            id: ("")
        },

        {
            item: "Exercise",
            completed: false,
            id: ("")
        }
    ]
};


export const toDoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                item: action.payload,
                completed: false,
                id: Date.now()
            }

        case ("toggle Completed"):
            return (
                state.map((todo) => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo;
                })
            )
        default:
            return state;
    }

}

