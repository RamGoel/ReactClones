import React from 'react';
import 'tachyons';
import './index.css'
import './bootstrap-icons.css'






function Header(){
    return(<div className="flex shadow-3 pa1 bg-white ">
        <div className="fl flex ">
        <i className="bi bi-facebook f1 hj1 ml3 " color="blue"></i>
        <form className="flex ml3 br-pill">
        <input className="br4  ab1 hui inp1 " placeholder="Search Facebook"></input>
        <i className="bi bi-search sv1  inp2"></i></form>
        </div>


        <div className="center">
        
        <i className="bi bi-house-door-fill sv1 active"></i>
        <i className="bi bi-flag sv1"></i>
        <i className="bi bi-tv sv1"></i>
        <i className="bi bi-shop sv1"></i>
        <i className="bi bi-people sv1"></i>
        </div>


        <div className="fr">
        <i className="bi bi-plus f1"></i>
        <i className="bi bi-chat sv1"></i>
        <i className="bi bi-bell sv1"></i>
        <i className="bi bi-arrow-down sv1"></i>
        </div>
        
        
        
</div>
        
    );
}

export default Header;