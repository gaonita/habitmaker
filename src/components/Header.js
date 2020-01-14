import React from 'react';
import {Link} from 'react-router-dom';
// import {Bar, Pie, StackedBar} from 'react-roughviz'
import './App.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                <h1 className='headerText'>Habit Maker</h1>
            </Link>

            <div className='add'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/new">
                <p className='addText'>+ new habit</p>
            </Link>
            </div>

            {/*<h3>Bar</h3>*/}
            {/*<Bar*/}
                {/*data='https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv'*/}
                {/*labels='flavor'*/}
                {/*values='price'*/}
            {/*/>*/}




            {/*<h3>Pie</h3>*/}
            {/*<Pie*/}
                {/*data={{*/}
                    {/*labels: ['North', 'South', 'East', 'West'],*/}
                    {/*values: [10, 5, 8, 3]*/}
                {/*}}*/}
                {/*title='Regions'*/}
                {/*colors={['red', 'orange', 'blue', 'skyblue']}*/}
                {/*roughness={2}*/}
            {/*/>*/}

        </div>
    )
};

export default Header;
