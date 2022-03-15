import React, { useState, useEffect } from 'react'
import categoryService from '../../services/categoryService'

const CategoriesPageContainer = () => {
  const [ categories, setCategories ] = useState( [] )

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