import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import "./App.css";

// console.log(Home);
function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/signup" element ={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
          </Routes>
          </BrowserRouter>
    );
}

export default App;