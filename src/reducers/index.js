import {REQUEST, SUCCESS, CREATE_HABIT, DELETE_HABIT, FETCH_HABIT} from "../actions/types";

const defaultState = {
    habits: [],
    isFetching: false
};

const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST:
            return {...state, isFetching: true};
        case SUCCESS:
            return {
                ...state,
                isFetching: false,
                habits: action.payload
            };
        case CREATE_HABIT:
            return {
                ...state,
                isFetching: false,
                habits: state.habits
            };
        case FETCH_HABIT:
            console.log(action.payload);
            return{
                ...state,
                isFetching:false,
                habits: [action.payload]
            };
        case DELETE_HABIT:
            console.log('delete reducer works!', action.payload);
            return {
                ...state,
                isFetching:false,
                };
        default:
            return state;
    }
};

// export const getTask = (state, id) => state.habits.find(i => i.id === id);

export default todosReducer
