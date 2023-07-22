import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About'
import AddUser from './pages/AddUser'
import User from './pages/User'
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>The Ninja Clothing Company</h1>
        <NavLink to="/"> Home </NavLink> |
        <NavLink to="/about"> About </NavLink> |
        <NavLink to="/addUser"> Add User </NavLink>
      </nav>
      {/* Unutar Switch-a se menjaju stranice. Glavni kostur ostaje a to je u ovom slucaju <nav> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/addUser" element={<AddUser/>} />
        <Route path="/user/:id" element={<User/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
