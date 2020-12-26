import React from 'react';
import './Sidebar.css';
import {Avatar} from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidbar__top">
                <img src="https://images.unsplash.com/photo-1608644611918-a3bf78190890?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80" alt=""/>
                <Avatar className='sidebar__avatar' />
                <h2>Daniel Gomez</h2>  
                <h4>gomezdespen@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,449</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar;
