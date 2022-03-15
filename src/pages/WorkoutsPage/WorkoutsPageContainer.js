import React, { useState, useEffect } from 'react'
import workoutService from '../../services/workoutService'
import AddWorkoutForm from './AddWorkoutForm'
import { Link } from 'react-router-dom'

const WorkoutsPageContainer = () => {

  return (
    <div>
      <Link to="/addworkout">Add workout</Link>
    </div>
  )
}

export default WorkoutsPageContainer