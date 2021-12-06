import 'tachyons';

import './bootstrap-icons.css'

function Feed(){
    return(
            <div className="feed mr3 mt4 ml4 yh uj">
                <div className="card1 bg-white br3 shadow-3 pa4">
                    <div>
                    <img className="" src="facebook-logo.png" className="fl"></img>
                    <i className="bi bi-three-dots f2 fr"></i>
                    </div>
                    <i className="bi bi-tv f1"></i>
                    <div> 
                        <h4>Remember Password</h4>
                        <p>Next time you Log in on this browser,just click your profile picture instead of typing a password.</p>
                    </div>
                    <div className="flex">

                        <button className="br3 bg-light-gray black fg1 pa2 w-50">OK </button>
                        <button className="br3 bg-light-gray black  fg1 pa2 w-50">Not Now</button>
                    </div>

                </div>

                <div className="card2 mt3 pa3 bg-white br3 shadow-3 ">
                <div className="flex ">
                <img src="im11.jpg"className="br4" ></img>
                <input className="w-100 br4 fg1 bg-light-gray mr3 ml3 " placeholder="What's on your mind, Ram?"></input></div>

                <hr></hr>
                <div className="row">
                    <div className="col flex">
                            <i className="bi bi-camera f2"></i>
                            <p className="b  ml3">Live Video</p>
                    </div>
                    <div className="col flex">
                            <i className="bi bi-camera f2"></i>
                            <p className="b  ml3">Photos/Videos</p>
                    </div>
                    <div className="col flex">
                            <i className="bi bi-camera f2"></i>
                            <p className="b  ml3">Feeling/Activity</p>
                    </div>

                </div>
                
                </div>
                <div className="flex pa3 br4 mt3 w-100 bg-white shadow-3">
                    <div className="flex bg-light-gray br-pill pr2 pl2 a1">
                        <i className="bi bi-camera f2"></i>
                        <p className="blue b ml3">Create Room</p>
                    </div>
                    <img src="im11.jpg"className="br4 a1 " ></img>
                    <img src="im11.jpg"className="br4 a1 " ></img>
                    <img src="im11.jpg"className="br4 a1 " ></img>
                    <img src="im11.jpg"className="br4 a1 " ></img>
                    <img src="im11.jpg"className="br4 a1 " ></img>
                    <img src="im11.jpg"className="br4 a1 " ></img>
                    <img src="im11.jpg"className="br4 a1 " ></img>
                    <img src="im11.jpg"className="br4 a1 " ></img>
                    <img src="im11.jpg"className="br4 a1 " ></img>

                </div>

                <div className=" bg-white shadow-3 br4 mt3 pa3 mb4">
                    <div className="flex">
                <img src="im11.jpg"className="br4 fl" ></img>
                <div>
                <p className="b ml3 a1 ">Ravi Raj AR - BTEUP Lucknow</p>
                <div className="flex uj">
                <p className=" mr3 a1 ">4m</p>
                <i className="bi bi-globe  "></i>
                </div>
                </div>
                
                <i className="bi bi-three-dots f2 yh "></i>

                </div>
                <img className="w-100 h-25 mt4" src="im11.jpg"></img>

                <div className="row mt2  ml5">
                    <div className="col flex ml5  ">
                        <i className="bi bi-heart f2"></i>
                        <p className="b ml2 f4">Like</p>
                    </div>
                    <div className="col flex ">
                        <i className="bi bi-chat f2"></i>
                        <p className="b ml2 f4">Comment</p>
                    </div>
                    <div className="col flex ">
                        <i className="bi-arrow-up-circle-fill f2"></i>
                        <p className="b ml2 f4">Share</p>
                    </div>
                </div>
                </div>


            </div>
    )
}

export default Feed;