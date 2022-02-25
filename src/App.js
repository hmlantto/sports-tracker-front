import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/common/Home';
import Login from './components/auth/Login';
import Navigation from './components/common/Navigation';
import Profile from './components/users/Profile';
import Register from './components/auth/Register';
import Timeline from './components/users/Timeline';
import Calendar from './components/users/Calendar';
import AddWorkout from './components/workouts/AddWorkout';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <div>

          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/auth/login" element={ <Login /> } />
            <Route path="/auth/register" element={ <Register /> } />
            <Route path="/users/:id" element={ <Profile /> } />
            <Route path="/users/:id/calendar" element={ <Calendar /> } />
            <Route path="/users/:id/timeline" element={ <Timeline /> } />
            <Route path="/users/:id/addworkout" element={ <AddWorkout /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
