import 'tachyons';
import './bootstrap-icons.css'
import React from 'react'
import './index.css'

function Header(){
    return(
            <div className="flex  bg-white a2 pa2">
                    <h1 className="cursive ma">Instagram </h1>
                    <input className="br1 bg-light-gray ma h-25 tc pr4 pt1 pb1 pl4 " placeholder="Search"></input>
                    <div className="ma">
                    <i className="bi-house-door-fill f2 mr4 "></i>
                    <i className="bi-chat f2 mr4 "></i>
                    <i className="bi-compass f2 mr4 "></i>
                    <i className="bi-heart f2 mr4 "></i>
                    <i className="bi-people f2 mr4 "></i>
                    </div>
                    
            </div>
    );
}

export default Header;