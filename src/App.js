import Navbar from './components/Navbar';
import Corousel from './components/Corousel';
import NavBarOffCanvas from './components/NavBarOffCanvas';

function App() {
  return (
    <>
    <div>
      <NavBarOffCanvas/>
    </div>
    <div className="container" style={{maxWidth: "90vw"}}>
      <Corousel/>
    </div>
    </>
  );
}

export default App;
