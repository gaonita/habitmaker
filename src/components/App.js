import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import TodoList from "./TodoList";
import Create from "./Create";
import Detail from "./Detail";
import Header from "./Header";
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path='/' exact component={TodoList}/>
                    <Route path='/new' component={Create}/>
                    <Route path='/:id' component={Detail}/>
                </Switch>
            </Router>
        </div>
    )
};

export default App
