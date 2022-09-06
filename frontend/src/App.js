import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./Pages/login";
import Account from "./Pages/Account";
import Verify from "./Pages/Verify";
import AuthError from "./Pages/AuthError";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='account/:email' element={<Account/>}/>
          <Route path='verrify/:email' element={<Verify/>}/>
          <Route path='authentication_error/' element={<AuthError/>}/>
          <Route path='users/:email/:token' element={<Users/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
