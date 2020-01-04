import React, { Component } from 'react'
import './RecipeList.css'
import RecipeContext from '../Contexts/RecipeContext'
import IndividualRecipe  from '../IndividualRecipe/IndividualRecipe'
import RecipeService from '../Services/RecipeService';

export default class RecipeList extends Component {
  
  static contextType = RecipeContext;
  
  componentDidMount() {
  
    RecipeService.getRecipes()
      .then(this.context.setRecipe)
      .catch(this.context.setError) 
  }
  
  render() {
    const { recipes = [], folders = [] } = this.context;
   
    return ( 
      recipes.map(recipe =>
                <IndividualRecipe
                className= 'recipe-name-link'
                folder_id={folders.id}
                id={recipe.id}
                key={recipe.id}
                name={recipe.name}
                aria-controls="groceryRecipe__recipe"
                className='groceryRecipe__grocery-link'
                />        
                
    )
    )} 
  
}