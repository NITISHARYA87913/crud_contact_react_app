import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { Route , Routes } from 'react-router-dom';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditDetail from './components/EditDetail';
import './App.css';

function App() {
  return (
   <>
   <ToastContainer/>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
    </Routes>
    <Routes>
      <Route path='/add' element = {<AddContact/>}></Route>
    </Routes>
    <Routes>
      <Route path='/edit/:id' element = {<EditDetail/>}></Route>
    </Routes>
   
   </>

  );
}

export default App;
