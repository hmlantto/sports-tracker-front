import React from 'react'
import { Button, Form } from 'react-bootstrap'

const AddCategoryForm = ({ categoryName, setCategoryName, handleSubmit }) => {
  return(
    <div>
      <h2>Add category</h2>

      <Form onSubmit={ handleSubmit }>
        <Form.Group>
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={ categoryName }
            onChange={ ( { target } ) => setCategoryName( target.value ) }
          />
        </Form.Group>
        <Button variant="primary" type="submit">Add category</Button>
      </Form>
    </div>
  )
}

export default AddCategoryForm