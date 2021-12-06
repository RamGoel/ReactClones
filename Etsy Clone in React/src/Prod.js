

import React from 'react';
import ReactDOM from 'react-dom';
import './Web.css';
import Butt from './Butt'
import 'tachyons'

function Prod(){
    return(
        <div className="flex">
            <div>
                <img src="img1.jpg" class=" d4" alt="..."></img> </div>
             
                <div>
                    <img src="img2.jpg" class=" d5" alt="..."></img>
                    <img src="img2.jpg" class=" d5" alt="..."></img>
                </div>
                <div> <img src="img1.jpg" class=" d4" alt="..."></img> </div>
            
                <div>
                    <img src="img2.jpg" class=" d5" alt="..."></img>
                    <img src="img2.jpg" class=" d5" alt="..."></img>
                </div>
            </div>
        

    );

}

export default Prod;