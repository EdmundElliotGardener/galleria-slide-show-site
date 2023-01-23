import './App.css';
import Homepage from './component/homepage';
import {Routes, Route} from "react-router-dom"
import Slideshow from './component/slideshow';
import Gallery from './component/Gallery/Gallery';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='Slideshow' element={<Slideshow/>}/>
    </Routes>
  );
}

export default App;
