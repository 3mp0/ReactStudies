import Wea from './pages/Wea'
import ArrayDeCosas from './pages/ArrayDeCosas';
import DivCambiable from './pages/DivCambiable';
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/estudio' element={<Wea/>}></Route>
      <Route path='/estudio2' element={<DivCambiable/>}></Route>
      <Route path='/estudio3' element={<ArrayDeCosas/>}></Route>
    </Routes>
    </>
  )
}

export default App
