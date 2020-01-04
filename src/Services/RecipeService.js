import config from '../config'

const RecipeService = {
  
  getRecipes() {
    return fetch(`${config.API_ENDPOINT}/recipes`, {
      headers: {
      },
    })
      .then(res => 
         (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  getRecipe(recipe_id) {
    
    return fetch(`${config.API_ENDPOINT}/recipes/${recipe_id}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default RecipeService