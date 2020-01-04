import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './IndividualRecipe.css'
import RecipeContext from '../Contexts/RecipeContext'

export default class IndividualRecipe extends Component {
 
  static contextType = RecipeContext;
  
  render() {
    const { name, id, ingredients, instructions } = this.props
    
    return (
       <>
       <header>
           <h2 className='recipe-name'>{name}</h2>
       </header>
        <section className='recipes'> 
          <ul>
              <li key={id} className='recipe-items'>
               {ingredients}<br />
               {instructions}
              </li>
          </ul>
        </section>
        </>
        
   ) }
}

  
  
  IndividualRecipe.propType = {
    match: PropTypes.object.isRequired
  };