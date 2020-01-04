import React, { Component } from 'react'

const RecipeContext = React.createContext({
  recipes: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setRecipe: () => {},
})
export default RecipeContext

export class RecipeProvider extends Component {
  state = {
    recipes: [],
    error: null,
  };

  setRecipe = recipes => {
    this.setState({ recipes })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const contextValue = {
      recipes: this.state.recipes,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRecipe: this.setRecipe,
    }
    return (
      <RecipeContext.Provider value={contextValue}>
        {this.props.children}
      </RecipeContext.Provider>
    )
  }
}