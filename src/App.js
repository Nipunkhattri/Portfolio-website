import logo from './logo.svg';
import './App.css';
import { Routes,Route} from "react-router-dom";
import Home from "./components/Home.js"
import About from './components/About';
// import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
    {/* <Navbar/> */}
      <Routes>
        <Route exact path='' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
      </Routes>
    </>
  );
}

export default App;
