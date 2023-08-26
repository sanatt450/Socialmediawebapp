import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register"
function App() {
  return (
    
    <Routes>
        <Route path="/" exact element={<Home></Home>}/>
        
        <Route path="/login" element={<Login></Login>} />
       
        <Route path="/profile"  element={<Profile></Profile>} />
        
        <Route path="/register"  element={<Register></Register>} />
        </Routes>
    
  
    // <div>
      
    //   <Profile></Profile>
    // </div>
  );
}

export default App;
