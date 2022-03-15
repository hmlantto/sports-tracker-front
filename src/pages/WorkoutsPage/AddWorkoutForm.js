import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import categoryService from '../../services/categoryService'
import workoutService from '../../services/workoutService'

const AddWorkoutForm = () => {
  const [ categoryId, setCategoryId ] = useState( '' )
  const [ duration, setDuration ] = useState( '' )
  const [ notes, setNotes ] = useState( '' )
  const [ categories, setCategories ] = useState( [] )

  const navigate = useNavigate()

  const handleSubmit = async ( event ) => {
    event.preventDefault()

    const newWorkout = {
      category_id: categoryId,
      duration_mins: duration,
      notes
    }

    try {
      await workoutService.addWorkout( newWorkout )
      navigate( '/workouts' )
    } catch ( exception ) {
      console.log( exception.message )
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await categoryService.getCategories()
      setCategories( data )
    }

    fetchData()
      .catch( console.error )
  }, [])
  
  return(
    <div>
      <h2>Add workout</h2>

      <Form onSubmit={ handleSubmit }>
        <Form.Group as={ Row } className="mb-3">
          <Col sm={ 3 }>
            <Form.Label>category</Form.Label>
          </Col>
          <Col sm={ 9 }>
            <Form.Select aria-label="Select category" onChange={ ( { target } ) => setCategoryId( target.value ) }>
              <option>-----</option>
              { categories.map( category => 
                <option key={ category.id } value={ category.id }>{ category.name }</option>
                )}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={ Row } className="mb-3">
          <Col sm={ 3 }>
            <Form.Label>duration (minutes)</Form.Label>
          </Col>
          <Col sm={ 9 }>
            <Form.Control
              type="number"
              name="duration"
              value={ duration }
              onChange={ ( { target } ) => setDuration( target.value ) }
              />
          </Col>
        </Form.Group>
        <Form.Group as={ Row } className="mb-3">
          <Col sm={ 3 }>
            <Form.Label>notes</Form.Label>
          </Col>
          <Col sm={ 9 }>
            <Form.Control
              as="textarea"
              name="notes"
              value={ notes }
              onChange={ ( { target } ) => setNotes( target.value ) }
              />
          </Col>
        </Form.Group>
        <Form.Group as={ Row } className="mb-3">
          <Col sm={{ span: 9, offset: 3 }}>
            <Button variant="primary" type="submit">Add workout</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddWorkoutForm