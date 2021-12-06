import React from 'react'
import './mix.css'

function Banner() {
    return (
        <div>
            <div className="bannerBox " >
                {/* <div className="overlay">
                    <button  className="overBtn f2 white b i pa2 bn ph4">Book Now</button>
                </div> */}
                <div className="movers w-100 flex justify-between absolute">
                    <button className="pa2 bg-white black i b bn  " ><i className="fas fa-arrow-left f3"></i></button>
                    <button className="pa2 bg-white black i b bn  " ><i className="fas fa-arrow-right f3"></i></button>
                </div>

                <img id="img1" src="https://i.pinimg.com/originals/cd/1c/7c/cd1c7cbd61e5f596d2d59ae2ea7b3d9c.jpg" alt="" className="bannerImage" />
               
            </div>

            
        </div>
    )
}

export default Banner
