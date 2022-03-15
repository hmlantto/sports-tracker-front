import React         from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Navigation from './common/Navigation'
import ProfilePageContainer from './pages/ProfilePage/ProfilePageContainer'
import RegisterPageContainer from './pages/RegisterPage/RegisterPageContainer'
import Timeline from './components/users/Timeline'
import Calendar from './components/users/Calendar'
import LoginPageContainer from './pages/LoginPage/LoginPageContainer'
import CategoriesPageContainer from './pages/CategoriesPage/CategoriesPageContainer'
import WorkoutsPageContainer from './pages/WorkoutsPage/WorkoutsPageContainer'
import AddWorkoutForm from './pages/WorkoutsPage/AddWorkoutForm'
import AddCategoryForm from './pages/CategoriesPage/AddCategoryForm'

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
            <Route path="/addcategory" element={ <AddCategoryForm /> } />
            <Route path="/workouts" element={ <WorkoutsPageContainer /> } />
            <Route path="/addworkout" element={ <AddWorkoutForm /> } />
            <Route path="/users/:id/calendar" element={ <Calendar /> } />
            <Route path="/users/:id/timeline" element={ <Timeline /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
