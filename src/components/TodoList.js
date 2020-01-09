import React from 'react';
import {connect} from 'react-redux';
import {deleteTodos, fetchTodos} from "../actions";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos()
    }

    renderList = (props) => {
        const result = this.props.todosProp;
        return result.map(i =>
            <div key={i.taskId}>
                <ul>
                    <li>
                        <p className='taskText'><Link style={{textDecoration:'none', color:'black'}} to={`/${i.taskId}`}> {i.title} / {i.userId}</Link>
                            <button style={{marginLeft: '50px', border: 'none'}}
                                    onClick={() => {
                                        this.props.deleteTask(i.taskId)
                                    }
                                    }>delete
                            </button>
                        </p>
                    </li>
                </ul>
            </div>
        );
    };

    render() {
        console.log(this.props.todosProp);
        return (
            <div className='listSection'>
                <div className='listBox'>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todosProp: state
});

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: fetchTodos,
    deleteTask: (taskId) => dispatch(deleteTodos(taskId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))
