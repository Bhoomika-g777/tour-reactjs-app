import './App.css';
import Cardcontainer from './components/Cardcontainer';
import Header from './components/Header';
import Home from './components/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return(
 <div classname="App">
 <Header/>
 <Home/>
 <ToastContainer position="top-right"/>
 </div>
  
 );
}
export default App;
