import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
       
        <div className="header">
            <h1>this is a header</h1>

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

                <div className="header_search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>
 
    )
}

export default Header;