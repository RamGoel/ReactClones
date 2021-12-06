import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {
  return (
    <div className="">
     <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="#">Ram Goel</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mr-5">
      <Link className="nav-item nav-Link "  to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-Link" to="/events">Events</Link>
      <Link className="nav-item nav-Link"  to="/gallery">Gallery</Link>
      <Link className="nav-item nav-Link "  to="/contact">Contact US</Link>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
