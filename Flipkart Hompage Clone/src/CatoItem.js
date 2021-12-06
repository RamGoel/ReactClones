import React from 'react'
import 'tachyons'
import './mix.css'
function CatoItem(props) {
    return (

                <div className="catoItem grow ">
                    <img className="CatoImage" src={props.ItemUrl} alt=""  />
                    <p className="catoName ">{props.ItemName}<i className="fas fa-angle-down ml2"></i></p>
                </div>
        
    )
}

export default CatoItem;
