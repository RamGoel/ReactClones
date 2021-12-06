
import './App.css';
import Header from './Header'
import 'tachyons';
import Menus from './Menus'
import Feed from './Feed';
import SideBar from './SideBar'



function App() {
  return (
    <div className="App">
        <Header />
        <div className="flex">
        
        <SideBar /><Feed /><Menus />
        
        </div>
       
    </div>
  );
}

export default App;
