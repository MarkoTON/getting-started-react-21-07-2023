import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About'
import AddUser from './pages/AddUser'
import User from './pages/User'
import NotFound from './pages/NotFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUserFromAPI } from './store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch(setUserFromAPI(data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">

          <div className="navbar-brand">
            <NavLink to="/">Play with JSON</NavLink>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-link">
                <NavLink className=" active" to="/">Home</NavLink>
              </li>
              <li className="nav-item nav-link">
                <NavLink className="" to="/about">About</NavLink>
              </li>
              <li className="nav-item nav-link">
                <NavLink className="" to="/addUser">Add User</NavLink>
              </li>
            </ul>

          </div>

        </div>
      </nav>
      {/* Unutar Switch-a se menjaju stranice. Glavni kostur ostaje a to je u ovom slucaju <nav> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
