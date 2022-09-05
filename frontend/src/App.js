import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./Pages/login";
import Account from "./Pages/Account";
import Verrify from "./Pages/Verrify";
import AuthError from "./Pages/AuthError";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='account/:email' element={<Account/>}/>
          <Route path='verrify/:email' element={<Verrify/>}/>
          <Route path='authentication_error/' element={<AuthError/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
