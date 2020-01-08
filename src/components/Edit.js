import React from 'react'
import {fetchTask, updateTodos} from '../actions';
import {connect} from 'react-redux';
import {getTask} from "../reducers";
import {withRouter} from 'react-router';

class Edit extends React.Component {

    // componentDidMount(){
    //     // this.props.fetchTask(this.props.match.params.id)
    // }

    render(){
        return(
            <div>
                <h2>Task detail</h2>
                <div>
                    <p>task: {this.props.task.title}</p>

                    <p>user: {this.props.task.userId}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        task: getTask(state, parseInt(props.match.params.id))
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTask: (taskId) => dispatch(fetchTask(taskId))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Edit))
