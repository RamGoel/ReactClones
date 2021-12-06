import 'tachyons';
import './bootstrap-icons.css'
import React from 'react'
import './index.css'

function Feed(){
    return(
        <div className="container  bg-white br2 pb3  mr4 ml4 mb4 mt3 a21 w-100">
                    <div className="flex pa2">
                    <img src="im11.jpg" className="br-pill a1 mt3" alt="prof"></img>
                    <div className=" ml3 verdana">
                        <p className="mb f3 b">its_ramgoel</p>
                        <p className="mu mt2"> Amroha</p>
                    </div>
                    <i className="bi-three-dots f2 ml mu mb"></i>
                    </div>
                    <div className="post">
                            <img src="im11.jpg" alt="post" className="w-100"></img>
                    </div>
                    <div className="react">
                           <i className="bi-heart f2 mr4"></i>
                           <i className="bi-chat f2 mr4"></i>
                           <i className="bi-telegram f2 mr4"></i>
                           
                    </div>
        </div>
    );
}

export default Feed;