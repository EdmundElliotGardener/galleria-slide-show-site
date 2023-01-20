import './App.css';
import Homepage from './component/homepage';
import {Routes, Route} from "react-router-dom"
import Slideshow from './component/slideshow';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='Slideshow' element={<Slideshow/>}/>
    </Routes>
  );
}

export default App;
