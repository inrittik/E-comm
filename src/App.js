import './App.css'
import Corousel from './components/Corousel';
import NavBarOffCanvas from './components/NavBarOffCanvas';
import Card from './components/Card';

function App() {
  return (
    <>
    <div>
      <NavBarOffCanvas/>
    </div>
    <div className="container mt-1" style={{maxWidth: "90vw"}}>
      <Corousel/>
    </div>
    <div className="cardSection" style={{justifyContent: "space-around"}}>
      <Card title="Trending | Hot Picks"/>
      <Card title="Your recent purchases"/>
      <Card title="Recently viewed"/>
    </div>
    </>
  );
}

export default App;
