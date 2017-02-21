import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    
    <FilterLink filter="SHOW_ALL">
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
    </FilterLink>
  </p>
)

export default Footer
