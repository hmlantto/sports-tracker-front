import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <div>
        <Link to="/auth/login">Log in</Link><br />
        <Link to="/auth/register">Register</Link>
      </div>

      <div>
        <Link to="/profile">Profile</Link><br />
        <Link to="/categories">Categories</Link><br />
        <Link to="/addcategory">Add category</Link><br />
        <Link to="/workouts">Workouts</Link><br />
        <Link to="/addworkout">Add workout</Link>
      </div>

      <div>
        <Link to="/users/1/timeline">Timeline</Link> | 
        <Link to="/users/1/calendar">Calendar</Link>
      </div>
    
    </div>
  )
}

export default Home