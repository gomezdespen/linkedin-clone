import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";


function Widgets() {

    const newsArticle =(heading, subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
            
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("PAPA React is back", "Top News - 9099 readers")}
            {newsArticle("Tesla hits news record", "Top News - 867 readers")}
            {newsArticle("Bitcoin breaks 30k", "crytpo - 10000 readers")}
            {newsArticle("is Redux too good?", "code - 950 readers")}
            {newsArticle("New Apple M1 chip", "Tech News - 9099 readers")}


        </div>
    )
}

export default Widgets;