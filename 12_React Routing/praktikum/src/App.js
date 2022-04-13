import React from 'react';
import './styling/App.css'
/* import NavBar from './components/NavBar'; */
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Home from './components/Home';
import AboutApp from './components/AboutApp';
import AboutCreator from './components/AboutCreator';
import AddTodo from './components/AddTodo';
import NotFound from './components/NotFound';

function App() {

  /* const isComplite = true */

  return (
    <React.Fragment>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-app" element={<AboutApp />} />
              <Route path="/about-creator" element={<AboutCreator />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;