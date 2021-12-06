import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './Web.css';

function Butt(props){
    return (
        
        <button className="grow bg-white black b br4 ghy " >{props.nme}</button>
    )
}

export default Butt;