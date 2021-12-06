import React from 'react'
import ItemCard from './ItemCard'
import './mix.css'
function DealsDay(props) {
    return (
        <div className="deals bg-white mh3 mv2">
            <div className="upperPart flex justify-between mh4 pa3 ">

        <p className="componentTitle ma0 f3 mt2 o-80 ">{props.title}</p >
        <button className="compBtn bg-blue white b pa2 shadow-2 br2 bn arial ma0 ph4">VIEW ALL</button>
            </div>
        <div className=" flex justify-between">
            <ItemCard imgUrl="https://3.imimg.com/data3/WW/MJ/MY-9670806/home-decorative-light-500x500.jpg" title="Decor Lights" price="From 1$" cato="Festive Home Decor" />
            <ItemCard imgUrl="https://3.imimg.com/data3/WW/MJ/MY-9670806/home-decorative-light-500x500.jpg" title="Decor Lights" price="From 1$" cato="Festive Home Decor" />
            <ItemCard imgUrl="https://3.imimg.com/data3/WW/MJ/MY-9670806/home-decorative-light-500x500.jpg" title="Decor Lights" price="From 1$" cato="Festive Home Decor" />
            <ItemCard imgUrl="https://3.imimg.com/data3/WW/MJ/MY-9670806/home-decorative-light-500x500.jpg" title="Decor Lights" price="From 1$" cato="Festive Home Decor" />
            <ItemCard imgUrl="https://3.imimg.com/data3/WW/MJ/MY-9670806/home-decorative-light-500x500.jpg" title="Decor Lights" price="From 1$" cato="Festive Home Decor" />
            <ItemCard imgUrl="https://3.imimg.com/data3/WW/MJ/MY-9670806/home-decorative-light-500x500.jpg" title="Decor Lights" price="From 1$" cato="Festive Home Decor" />
        </div>
        </div>
    )
}

export default DealsDay
