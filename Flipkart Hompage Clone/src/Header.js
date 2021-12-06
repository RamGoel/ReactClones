import React from 'react'
import 'tachyons'
import './mix.css'
function Header() {
    return (
        <div className="bg-blue" >
            <div className=" bg-blue pa2 mh6  white flex justify-between ">
               <a href="/" className="tdn ma"><h2 className=" ma0 i white tdn ma"><i className="fas fa-shopping-cart mr2"></i>Flipkart</h2></a>
                <div className="searchBox w-40 flex">
                    <input type="text" className=" w-100 pa2 shadow-2  bn ma0 f6" placeholder="Search for products, brands and more" />
                    <button className="searchBtn bn ma0 bg-white blue "><i className="fas fa-search"></i></button>
                </div>
                <div className="options ml3">

                <a href=""><button className="opBtn bn ma0 bg-white blue b pv2 ph5 mh3 ma ">Login</button></a>
                <a href=""><button className="opBtn bn ma0 bg-blue white ph4 ">More <i className="fas fa-angle-down ml2"></i></button></a>
                <a href=""><button className="opBtn bn ma0 bg-blue white ph4 ">Cart <i className="fas fa-angle-down ml2"></i></button></a>
                </div>
            </div>
        </div>
    )
}

export default Header;
