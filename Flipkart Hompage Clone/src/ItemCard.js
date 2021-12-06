import React from 'react'

function ItemCard(props) {
    return (
        <div className="ItemCard ma2 grow ">
            <img src={props.imgUrl} alt="" className="cardImg w-80"/>
            <p className="cardTitle ma1 pa0 b ">{props.title}</p>
            <p className="cardPrice ma1 pa0 green ">{props.price}</p>
            <p className="cardCato ma1 pa0 gray">{props.cato}</p>
        </div>
    )
}

export default ItemCard
