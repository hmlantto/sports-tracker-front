import React, { useState, useEffect } from 'react'
import categoryService from '../../services/categoryService'
import AddCategoryForm from './AddCategoryForm'

const CategoriesPageContainer = () => {
  const [ categoryName, setCategoryName ] = useState( '' )
  const [ categories, setCategories ] = useState( [] )

  const addCategory = async ( event ) => {
    event.preventDefault()

    const sortFunction = ( a, b ) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()

      if ( nameA < nameB ) {
        return -1
      }

      if ( nameA > nameB ) {
        return 1
      }

      return 0
    }

    try {
      await categoryService.addCategory({ name: categoryName })
      const updatedCategories = [ ...categories, { name: categoryName } ]
      updatedCategories.sort( sortFunction )
      setCategoryName( '' )
      setCategories( updatedCategories )

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

  return (
    <div>
      <AddCategoryForm categoryName={ categoryName } setCategoryName={ setCategoryName } handleSubmit={ addCategory } />

      <h2>Categories</h2>
      <ul>
        { categories.map( category => 
          <li key={ category.name }>
            { category.name }
          </li>
        )}
      </ul>
    </div>

  )
}

export default CategoriesPageContainer