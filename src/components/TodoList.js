import React from 'react';
import {connect} from 'react-redux';
import {getData} from "../actions";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {StackedBar} from "react-roughviz/dist";


class TodoList extends React.Component {

    componentDidMount() {
        this.props.getData();
    }

    renderList = (props) => {
        const {habits} = this.props;
        return habits.map(i =>
            <div key={i.id}>
                <ul>
                    <li>
                        <p className='taskText'>
                            <Link style ={{textDecoration: 'none', color: 'black'}}
                                                      to={`/${i.id}`}>
                               title: {i.title}<br/>
                                detail: {i.detail} <br/>
                                goal: {i.goal} times in 90days<br/>
                                start date: {i.date}
                                </Link>
                        </p>
                    </li>
                </ul>
            </div>
        );
    };

    render() {
        return (
            <div className='listSection'>
                <div className='listBox'>
                    {this.renderList()}
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

const mapStateToProps = (state) => ({
    habits: state.habits
});

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData()),
    }

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))
