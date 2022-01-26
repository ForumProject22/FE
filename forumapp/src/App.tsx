import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<Landing />} path='/' />
        <Route element={<SignIn />} path='/signin' />
        <Route element={<SignUp />} path='/signup' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
