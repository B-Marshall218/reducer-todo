
export const initialState = {
    items: [

        {
            item: 'Learn about reducers',
            completed: false,
            id: ("1")
        },

        {
            item: "Mow Lawn",
            completed: false,
            id: ("2")
        },

        {
            item: "Exercise",
            completed: false,
            id: ("3")
        }
    ]
};


export const toDoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                items: [...state.items, action.payload],
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

