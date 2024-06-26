import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/login';
import Signup from './Login/signUp';
import { useState } from 'react';
import Landing from './Login/landing';

function App(){
  const [user, setUser]= useState([
    {
        username:"John",
        password:"123"
    }
  ])
  return(    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login user={user} setUser={setUser}/>}></Route>
      <Route path='/signup' element={<Signup user={user} setUser={setUser}/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
