import React, {useState} from 'react';
import {createTask} from "../actions";
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const Create = (props) => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [goal, setGoal] = useState('');
    const [date, setDate] = useState('');

    return (
        <div className='createSection'>
            <div className='createBox'>
                <h2>  New Habit to Make </h2>
                <div>
                    <p>Title:
                        <input value={title} onChange={(event) => setTitle(event.target.value)}/>
                    </p>
                    <p>Detail:
                        <input value={detail} onChange={(event) => setDetail(event.target.value)}/>
                    </p>
                    <p>Goal:
                        <input value={goal} onChange={(event) => setGoal(event.target.value)}/>
                    </p>
                    <p>Start date:
                        <input value={date} onChange={(event) => setDate(event.target.value)}/>
                    </p>
                    <button onClick={() => {
                        props.createTask(title, detail, goal, date);
                        props.history.goBack()
                    }}>submit
                    </button>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    createTask: (title, detail, goal, date) => dispatch(createTask(title, detail, goal, date))
});

export default withRouter(connect(null, mapDispatchToProps)(Create));
