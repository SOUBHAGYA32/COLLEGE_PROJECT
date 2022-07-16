import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
//Pages
import Loginpage from './pages/Login/Loginpage';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
