import React from 'react'
import {fetchTask, updateTodos} from '../actions';
import {connect} from 'react-redux';
import {getTask} from "../reducers";
import {withRouter} from 'react-router';
import {StackedBar} from "react-roughviz/dist";

class Edit extends React.Component {

    // componentDidMount(){
    //     // this.props.fetchTask(this.props.match.params.id)
    // }

    render() {
        return (
            <div className='detailSection'>
                <div className='detailBox'>
                    <div>
                        <h3>[ {this.props.task.title} ]</h3>

                        <p> {this.props.task.userId}</p>
                    </div>
                </div>
                <StackedBar
                    data={[{month: 'Jan', A: 20, B: 5, C: 10},
                        {month: 'Feb', A: 25, B: 10, C: 20},
                        {month: 'March', A: 30, B: 50, C: 10}
                    ]}
                    labels='month'
                    // title='Monthly status'
                    colors={['blue', 'skyblue', '#9ff4df', '#f996ae']}
                    height={400}
                    width={600}
                    fillStyle='cross-hatch'
                />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit))
