
import './App.css';
import Banner from './Banner';
import CatoBar from './CatoBar';
import DealsDay from './DealsDay';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
     <Header  />
     <CatoBar />
     <Banner />
     <DealsDay title="Deals of the Day" />
     <DealsDay title="Winter Wear"/>
     <DealsDay title="Top picks on"/>
     <Footer />
     
    </div>
  );
}

export default App;
