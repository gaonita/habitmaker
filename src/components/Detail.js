import React from 'react'
import {fetchHabit, deleteHabit} from '../actions';
import {connect} from 'react-redux';
import {getTask} from "../reducers";
import {withRouter} from 'react-router';
import {StackedBar} from "react-roughviz/dist";
import CalendarHeatmap from 'react-calendar-heatmap';


class Detail extends React.Component {

    componentDidMount() {
        this.props.fetchHabit(this.props.match.params.id);
    }

    deleteById = () => {
        this.props.deleteHabit(this.props.match.params.id);
        this.props.history.goBack()
    };

    render() {
        const fetchedHabit = this.props.habits[0];

        if (!fetchedHabit) {
            return <div style={{textAlign: 'center'}}>Loading....</div>
        }
        const startingDate = fetchedHabit.date;

        const randomValues = ()=> {
            return {
                count: 2
            };
        };

        return (
            <div className='detailSection'>
                <div className='detailBox'>
                    <div>
                        {fetchedHabit.title}
                        <br/>
                        {fetchedHabit.detail}

                    </div>
                </div>

                <div className='heatmap'>
                    <CalendarHeatmap
                        startDate={new Date(startingDate)}
                        endDate={new Date('2020-06-30')}
                        values={[
                            {date: '2020-01-11', count: 1},
                            {date: '2020-01-12', count: 2},
                            {date: '2020-01-13', count: 3},
                        ]}
                        classForValue={value => {
                            if (!value) {
                                return 'color-empty';
                            }
                            return `color-github-${value.count}`;
                        }}

                        onClick={randomValues}

                        showWeekdayLabels={true}
                    />
                </div>
                <div>
                    {fetchedHabit.goal} / 90 days

                </div>
                <button onClick={this.deleteById}>
                    delete</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        habits: state.habits
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHabit: (habitId) => dispatch(fetchHabit(habitId)),
        deleteHabit: (habitId) => dispatch(deleteHabit(habitId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail))
