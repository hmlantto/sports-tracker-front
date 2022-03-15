import React, { useState, useEffect, useRef } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import categoryService from '../../services/categoryService'
import workoutService from '../../services/workoutService'

const AddCategoryForm = () => {
  const [ categoryName, setCategoryName ] = useState( '' )
  const [ checkedState, setCheckedState ] = useState( [] )
  
  const workoutTypes = useRef( [] )
  const navigate = useNavigate()

  const handleCheckedStateChange = ( position ) => {
    const updatedCheckedState = checkedState.map(( item, index ) =>
      index === position ? !item : item
    )

    setCheckedState( updatedCheckedState )
  }

  const handleSubmit = async ( event ) => {
    event.preventDefault()

    const selectedTypes = new Array( workoutTypes.current.length )

    for ( let i = 0; i < workoutTypes.current.length; i++ ) {
      selectedTypes[ i ] = { [ workoutTypes.current[ i ].name ]: checkedState[ i ] }
    }

    try {
      await categoryService.addCategory({ name: categoryName, types: selectedTypes })
      navigate( '/categories' )

    } catch ( exception ) {
      console.log( exception.message )
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await workoutService.getWorkoutTypes()
      workoutTypes.current = data
      const checkedStateArray = new Array( data.length ).fill( false )
      setCheckedState( checkedStateArray )
    }

    fetchData()
      .catch( console.error )
  }, [])

  return(
    <div>
      <h2>Add category</h2>

      <Form onSubmit={ handleSubmit }>
        <Form.Group as={ Row } className="mb-3">
          <Col sm={ 3 }>
            <Form.Label>name</Form.Label>
          </Col>
          <Col sm={ 9 }>
            <Form.Control
              type="text"
              name="name"
              value={ categoryName }
              onChange={ ( { target } ) => setCategoryName( target.value ) }
            />
          </Col>
        </Form.Group>
        <Form.Group as={ Row } className="mb-3">
          <Col sm={ 3 }>
            <Form.Label>type</Form.Label>
          </Col>
          <Col sm={ 9 }>
            { workoutTypes.current.map( ( type, index ) =>
              <Form.Check
                key={ index }
                type="checkbox"
                name="type"
                label={ type.name }
                value={ type.name }
                checked={ checkedState[ index ] }
                onChange={ () => handleCheckedStateChange( index ) }
              />
            )}
          </Col>
        </Form.Group>
        <Form.Group as={ Row } className="mb-3">
          <Col sm={{ span: 9, offset: 3 }}>
            <Button variant="primary" type="submit">Add category</Button>
          </Col>
         </Form.Group>
      </Form>
    </div>
  )
}

export default AddCategoryForm