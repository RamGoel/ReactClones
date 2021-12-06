import React from 'react';
import ReactDOM from 'react-dom';
import './Web.css';
import Butt from './Butt'
import 'tachyons'

function Bread(){
    return(

        <div className=" tc d2 normal">
            <div className="black">
                <h1>Find things you'll love. Support independent sellers. Only on Etsy.</h1>
                <p className="b">Everyday finds</p>
            </div>
            
                <ul className="b1 flex-l block-ns">
                <li><img src="logo192.png" className="d1 pa5 grow"></img></li>
                <li><img src="logo192.png" className="d1 pa5 grow"></img></li>
                <li><img src="logo192.png" className="d1 pa5 grow"></img></li>
                <li><img src="logo192.png" className="d1 pa5 grow"></img></li>
                <li><img src="logo192.png" className="d1 pa5 grow"></img></li>
                </ul>
           

        </div>

    );
}

export default Bread;