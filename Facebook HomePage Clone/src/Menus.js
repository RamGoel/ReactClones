import 'tachyons'
import './bootstrap-icons.css'
import './bootstrap-grid.min.css'
import './index.css'


function Menus(){
    return(
        <div class="menu  br4 mt4 pa4 ml3 yh uj w-25 verdana f5">
            <div className="sponsor">
                <div className="flex">
                <h3 className="gray f3 ">Sponsored</h3>
                </div>
            <div className=" flex br3 w-100 mb4 pa2  ">
                <img src="im12.png"className="br3 hy1 " ></img>
                <div className="block ml3">
                <p className=" ">Government polytechnic rampur utter
                 pradesh 2018-2020</p>
                 <p className="o-70 ">college in rampur</p>
                 </div></div>

                 <div className=" flex br3 w-100 pa2 mb2">
                <img src="im12.png"className="br3 hy1" ></img>
                <div className="block ml3 ">
                <p className=" ">Government polytechnic rampur utter
                 pradesh 2018-2020</p>
                 <p className="o-70 ">college in rampur</p>
                 </div>


                </div>
                
            </div>

            <hr className="mr4 ml4 o-50"></hr>
            
            <div className="s1 pa2 Pages  ">

               

                <div className=" flex ">
                <h4 className="f3 gray ">Your pages</h4>
                <i className="bi bi-three-dots-vertical f3 yh mta1 "></i></div>

               

            
                <div className=" flex ">
                <img src="im11.jpg"className="br4" ></img>
                <p className=" mta1 ml3 tl mb3">Government polytechnic rampur utter
                 pradesh 2018-2020</p>
                </div>
                
                <div className="flex ">
                <i className="bi bi-bell f2 mr1"></i>
                <p className="b gray ml3"> 1 notification</p>
                 </div>

                <div className="flex">
                <i className="bi bi-speaker f2 mr1"></i>
                <p className="b gray ml3"> Create promotion</p>
                </div>

                </div>

                <hr className="mr4 ml4 o-50"></hr>

                <div className="Birthdays mt1 mb4">
                    <div className="flex">
                        <h3 className="gray f3">Birthdays</h3>
                    </div>
                    <div className="flex">
                        <i className="bi bi-gift f2"></i>
                        <p className=" b ml3 a1">Ram Goel has their birthday today.</p>
                    </div>
                </div>

                <hr className="mr4 ml4 o-50"></hr>

                <div className="Contacts mt3">
                    <div className="flex">
                        <h3 className="gray f3 ">Contacts </h3>
                        <i className="bi bi-camera f2 a1 "></i>
                        <i className="bi bi-search f2 a1"></i>
                        <i className="bi bi-pin f2 a1"></i>
                    </div>
                    
                <div className=" flex ">
                <img src="im11.jpg"className="br4 mb3" ></img>
                <p className="b ml3 mb4 a1 ">Satveer Yadav</p>
                </div>
                
                <div className=" flex ">
                <img src="im11.jpg"className="br4 mb3" ></img>
                <p className="b ml3 mb4 a1 ">Avanish Kumar</p>
                </div>
                
                <div className=" flex ">
                <img src="im11.jpg"className="br4 mb3" ></img>
                <p className="b ml3 mb4 a1 ">Surendra Yadav</p>
                </div>
                

                </div>







                </div>
          
           
            
        
       
    );
}

export default Menus;