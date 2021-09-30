
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
    <div className="carSection d-flex mt-5 mb-5" style={{justifyContent: "space-around"}}>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
  );
}

export default App;
