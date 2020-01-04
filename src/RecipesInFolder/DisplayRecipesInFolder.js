import React, { Component } from 'react'
import RecipeContext from '../Contexts/RecipeContext'
import FolderContext from '../Contexts/FolderContext'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './DisplayRecipesInFolder.css'

export default class DisplayRecipesInFolder extends Component {
  
  static contextType = RecipeContext;
  static contextType = FolderContext;
  
  render() {
    const { name, id, folderid} = this.props
    
    return (
      <Link to={`/recipes/${folderid}/${id}`} className='recipe-name'> 
       <>
       <header>
           <h2 className='recipe-name-link'>{name}</h2>
       </header>
        </>
        </Link>
        
   ) }
}

  
  DisplayRecipesInFolder.propType = {
    match: PropTypes.object.isRequired
  };