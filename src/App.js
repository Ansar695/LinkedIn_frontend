import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
const Register = React.lazy(() => import("./Components/Register"))

function App() {
  return (
    <Suspense fallback={<>
      <h1>Loading...</h1>
    </>}>

      <div className="app">
        <h1>Make the most of your professional life</h1>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>

    </Suspense>
  );
}

export default App;
