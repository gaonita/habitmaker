// import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchTodos = () => async dispatch =>{
//     const response = await jsonPlaceholder.get('/todos');
//     dispatch({
//         type:'FETCH_TODOS',
//         payload: response.data
//     })
// };

export const fetchTodos = (state) => {
    return {
        type: 'FETCH_TODOS',
        payload: state
    }
};

export const createTask = (title, user) => {
    return {
        type: 'CREATE_TASK',
        payload: {
            userId: user,
            title: title,
            taskId: Math.floor(Math.random() * 100)
        }
    }
};


export const deleteTodos = (taskId) => {
    return {
        type: 'DELETE_TASK',
        payload: taskId
    }
};

export const fetchTask = (taskId) => {
    return {
        type: 'FETCH_TASK',
        payload: taskId
    }
};

export const updateTodos = (taskId, title) => {
    return {
        type: 'UPDATE_TASK',
        taskId: taskId,
        title: title
    }
};

