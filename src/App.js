import React         from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Navigation from './common/Navigation'
import ProfilePageContainer from './pages/ProfilePage/ProfilePageContainer'
import RegisterPageContainer from './pages/RegisterPage/RegisterPageContainer'
import Timeline from './components/users/Timeline'
import Calendar from './components/users/Calendar'
import AddWorkout from './components/workouts/AddWorkout'
import LoginPageContainer from './pages/LoginPage/LoginPageContainer'
import CategoriesPageContainer from './pages/CategoriesPage/CategoriesPageContainer'

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />

        <div>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/auth/login" element={ <LoginPageContainer /> } />
            <Route path="/auth/register" element={ <RegisterPageContainer /> } />
            <Route path="/profile" element={ <ProfilePageContainer /> } />
            <Route path="/categories" element={ <CategoriesPageContainer /> } />
            <Route path="/users/:id/calendar" element={ <Calendar /> } />
            <Route path="/users/:id/timeline" element={ <Timeline /> } />
            <Route path="/users/:id/addworkout" element={ <AddWorkout /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
