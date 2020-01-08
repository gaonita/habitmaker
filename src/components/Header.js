import React from 'react';
import {Link} from 'react-router-dom';
import './App.css'

const Header = () => {
    return(
        <div className='header'>
            <Link to="/">
                <h1 style={{textAlign:'center', textDecoration:'none', color:'black'}}>
                    Habit Maker</h1>
            </Link>
            <div>
                <Link to="/new"><div className='add'>+</div></Link>
            </div>
        </div>
    )
};

export default Header;
