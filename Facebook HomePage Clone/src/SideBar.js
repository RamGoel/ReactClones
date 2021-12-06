import 'tachyons';
import './bootstrap-icons.css';
import './bootstrap-grid.min.css';
import './index.css'

function SideBar(){
    return(

        <div className="SideBar  w-25">
        <div className=" pt4 pl4  mt4 br3">

                <div className=" flex ">
                <img src="im11.jpg"className="br-pill" ></img>
                <p className=" ml3 mb4 a1 f4 verdana  ">Ram Goel</p>
                </div>

                <div className=" flex ">
                <i className="bi-heart f2"></i>
                <p className=" ml3 mb4 f4 a1 verdana  ">COVID-19 Information Centre </p>
                </div>

                <div className=" flex ">
                <i className="bi-people f2"></i>
                <p className=" ml3 mb4 a1 f4 verdana  ">Friends</p>
                </div>

                <div className=" flex ">
                <i className="bi-image f2"></i>
                <p className=" ml3 mb4 a1 f4 verdana  ">Most Recent</p>
                </div>

                <div className=" flex ">
                <i className="bi-star f2"></i>
                <p className=" ml3 mb4 a1 f4 verdana  ">Favourites</p>
                </div>

                <div className=" flex ">
                <i className="bi-people f2"></i>
                <p className=" ml3 mb4 a1 f4 verdana  ">Groups</p>
                </div>

                <div className=" flex ">
                <i className="bi-shop f2"></i>
                <p className=" ml3 mb4 a1 f4 verdana  ">marketplace</p>
                </div>

                <div className=" flex ">
                <i className="bi-arrow-down f2"></i>
                <p className=" ml3 mb4 a1 f4 verdana" >See more</p>
                </div>
                
            </div>

            <div className=" pt2 ml3 verdana">

            <h3 className="gray f3  ">Contacts </h3>
                
                <div className=" flex ">
                <img src="im11.jpg"className="br-pill" ></img>
                <p className=" ml3 mb4 a1 f4 verdana" >GOVERNMENT POLYTECHNIC, RAMPUR</p>
                </div>
            
                <div className=" flex ">
                <img src="im11.jpg"className="br-pill" ></img>
                <p className=" ml3 mb4 a1 f4 verdana" >CodeLearns</p>
                </div>
            
                <div className=" flex ">
                <img src="im11.jpg"className="br-pill" ></img>
                <p className=" ml3 mb4 a1 f4 verdana" >frndmsti***</p>
                </div>



            </div>



        </div>
    );
}

export default SideBar;