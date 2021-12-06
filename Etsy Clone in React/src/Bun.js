import React from 'react';
import ReactDOM from 'react-dom';
import './Web.css';
import Butt from './Butt'
import 'tachyons'

function Bun(){
    return(
        <div className=' bg-orange pt3 pb4 d11'>
            <h1  className="tc">What is Etsy?</h1>
            <p className="tc">Read our wonderfully weird story</p>
            <div className="flex-l block-ns">
                <div className="">
                    <h1 className="tc">A one-of-a-kind community</h1>
                    <p className="tc">Etsy is a global online marketplace, where people come together to make, sell, buy and collect unique items.</p>
                </div>
                <div className="">
                    <h1 className="tc">Support independent creators</h1>
                    <p className="tc">There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                </div>
                <div className="">
                    <h1 className="tc">Peace of mind</h1>
                    <p className="tc">Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                </div>

            </div>
            <div className="justify-center align-center">
                <p className="tc b ">Have a question? Well, we’ve got some answers.</p>
                <button className="tc b br4 bg-transparent justify-center">Go to Help Center</button>
            </div>


        </div>

    );
}

export default Bun;