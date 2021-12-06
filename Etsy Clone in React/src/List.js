import React from 'react';
import ReactDOM from 'react-dom';
import './Web.css';
import Butt from './Butt'
import 'tachyons'



function List(){
    return(
        <div>
        <ul className="b1 flex-l dib-ns tc ">
            <li className="b2 grow tc"><a className="b2" href="/c">Clothing and Shoes</a></li>
            <li className="b2 grow tc"><a className="b2" href="/j">Jewellery and Accessories</a></li>
            <li className="b2 grow tc"><a className="b2" href="/h">Home and Living</a></li>
            <li className="b2 grow tc"><a className="b2" href="/w">Wedding and Party</a></li>
            <li className="b2 grow tc"><a className="b2" href="/t">Toys and Entertainment</a></li>
            <li className="b2 grow tc"><a className="b2" href="/cr">Craft Supplies and Tools</a></li>
            <li className="b2 grow tc"><a className="b2" href="/v">Vintage</a></li>
            
        </ul>
       
        </div>
       
    )
}

export default List;
 