import {firestore} from 'firebase';
import history from '../history';
import {FETCH_HABIT, REQUEST, SUCCESS, CREATE_HABIT, DELETE_HABIT} from "./types";

// import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchTodos = () => async dispatch =>{
//     const response = await jsonPlaceholder.get('/todos');
//     dispatch({
//         type:'FETCH_TODOS',
//         payload: response.data
//     })
// };
export const requestData = () => ({
    type: REQUEST
});

export const success = (habitData) => ({
    type: SUCCESS,
    payload: habitData
});

export const getData = () => {
    return async dispatch => {
        dispatch(requestData());
        const docArr = [];
        const querySnapshot = await firestore().collection('habits').get();
        querySnapshot.forEach(doc => {
            const docData = doc.data();
            const dataWithId = {...docData, id: doc.id};
            docArr.push(dataWithId);
        });
        console.log(docArr);

        dispatch(success(docArr));
    }
};
//
// export const fetchHabit = (state) => {
//     return {
//         type: FETCH_HABIT,
//         payload: state
//     }
// };

export const createTask = (title, detail, goal, date) => {
    const habit = {
        title: title,
        detail: detail,
        goal: goal,
        date: date
    };
    firestore().collection('habits').add(habit);
    return {
        type: CREATE_HABIT,
        payload: habit
    }
};


//from cafe review----------------------
// export const deleteData = (docId) => ({
//     type: DELETE,
//     docId:docId
// });
//
// export const deleteDoc = (docId) => {
//     return async dispatch => {
//         const promise = firestore().collection('cafe').doc(docId).delete();
//         const callback = () => {
//             dispatch(deleteData(docId))
//         };
//         promise.then(callback).catch(error => console.error(error))
//     };
//     history.push('/');
// };


export const deleteHabit = (habitId) => async dispatch => {
    const promise = firestore().collection('habits').doc(habitId).delete();
    const callback = () => {
        dispatch({
            type: DELETE_HABIT,
            payload: habitId
        })
};
    promise.then(callback).catch(err => console.log(err))

};


export const fetchHabit = (habitId) => async dispatch => {
    const docArr = [];
    const querySnapshot = await firestore().collection('habits').get();
    querySnapshot.forEach(doc => {
        const docData = doc.data();
        const dataWithId = {...docData, id: doc.id};
        docArr.push(dataWithId);
        const habitDoc = docArr.find(habit => habit.id === habitId);
    });
    dispatch({
        type: FETCH_HABIT,
        payload: docArr.find(habit => habit.id === habitId)
    })
};

export const updateTodos = (taskId, title) => {
    return {
        type: 'UPDATE_TASK',
        taskId: taskId,
        title: title
    }
};

