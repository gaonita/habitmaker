const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TODOS':
            return [...state,...action.payload];
        case 'CREATE_TASK':
            console.log('create reducer works!', action.payload);
            return [...state, action.payload];
        case 'DELETE_TASK':
            console.log('delete reducer works!', action.payload);
            return [...state.filter(i => i.taskId !== action.payload)];
        // case 'FETCH_TASK':
        //     console.log('fetch reducer works!', action.payload);
        //     return [...state.find(i=> i.taskId === action.payload)];
        // case 'UPDATE_TASK':
        //     console.log('update reducer works!');
        //     return[...state.map(i => i.taskId === action.payload?
        //                         {...i, title:action.title} : {...i})];
        default:
            return state;
    }
};

export const getTask = (state, id) => state.find(i=> i.taskId === id);

export default todosReducer
