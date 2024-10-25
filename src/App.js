import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import Navbar from './Navbar';
import WantedDetails from './WantedDetails';
import "./Reset.css" 
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/wanted-details/:id' element={<WantedDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
