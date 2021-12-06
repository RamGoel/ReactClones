import 'tachyons';
import './bootstrap-icons.css'
import React from 'react'
import './index.css'

function Stories(){

    const Prof=<div>
        <img src="im11.jpg" className="br-pill a3 mt3" alt="prof"></img>
        <p className="">its_ramgoel</p>
    </div>
        
            return(<div className="flex bg-white shadow-3 abx pa2 mt3 ml4 a21 w-100 pl3">{[Prof,Prof,Prof,Prof,Prof,Prof,Prof]}</div>);
}

export default Stories; 