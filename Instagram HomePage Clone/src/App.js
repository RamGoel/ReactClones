
import './App.css';
import Header from './Header';
import Feed from './Feed';
import Stories from './Stories';
import SideBar from './Sidebar';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="flex pa4 ml7"> 
     <div>
     <Stories />
     <Feed />
     </div>
     <SideBar />
     </div>

    </div>
  );
}

export default App;
