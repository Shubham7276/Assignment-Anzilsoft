
import {BrowserRouter , Routes, Route,Navigate} from "react-router-dom"
import './App.css';
import ArithmeticOperation from "./Component/Assignment-1";
import DisplayRecord from "./Component/Assignment-2";


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<ArithmeticOperation/>}/>
          <Route path='/assignment2' element={<DisplayRecord/>}/>
         
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
