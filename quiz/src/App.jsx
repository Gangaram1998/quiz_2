import './App.css';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop:"100px"}}><AllRoutes/></div>
    </div>
  );
}

export default App;
