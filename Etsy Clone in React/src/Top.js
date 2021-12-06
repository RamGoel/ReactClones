import React from 'react';
import ReactDOM from 'react-dom';
import './Web.css';
import Butt from './Butt'
import 'tachyons'
function Top(){
    return(
    <div className="ght bg-white flex auto pa3 ">
        <h2 className=" a1 orange dib-l dn-ns">Etsy</h2>
        <input className="a2 bt2 br4 mt1 d3 " placeholder="Search for anything"></input>
        <Butt  nme="Sign in" className="a3 db-l dn-ns"/>
        <img src="basket.png" className="a4 mr-auto"></img>
    </div>
       
    )
}

export default Top;
 