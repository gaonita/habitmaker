import React, {useState} from 'react';
import {createTask} from "../actions";
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const Create = (props) => {
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');

    return (
        <div className='createSection'>
            <div className='createBox'>
                <h2>  New Habit to Make </h2>
                <div>
                    <p>Title:
                        <input value={title} onChange={(event) => setTitle(event.target.value)}/>
                    </p>
                    <p>Detail:
                        <input value={user} onChange={(event) => setUser(event.target.value)}/>
                    </p>
                    <button onClick={() => {
                        props.createTask(title, user)
                        props.history.goBack()
                    }}>submit
                    </button>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    createTask: (title, user) => dispatch(createTask(title, user))
});

export default withRouter(connect(null, mapDispatchToProps)(Create));
