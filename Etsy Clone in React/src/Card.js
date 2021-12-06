import React from 'react';
import ReactDOM from 'react-dom';
import './Web.css';
import Butt from './Butt'
import 'tachyons'

function Card(){
    return(
        <div className="d8 grow br4 mr2 ml2 ma pb1-l pb4-ns">
            <img src="img3.jpg" className="br4"></img>
            <div className="d7">
                <p className="tc b ">Anniversary Gifts</p>
            </div>


        </div>

    );
}


export default Card;