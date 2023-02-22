import './App.css';
import {Routes, Route} from "react-router-dom"
import Slideshow from './component/Slideshow/Slideshow';
import Homepage from './component/Homepage';
// import Homepage from './component/Homepage';
// import Gallery from './component/Gallery/Gallery';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='Slideshow' element={<Slideshow/>}/>
    </Routes>
  );
}

export default App;
