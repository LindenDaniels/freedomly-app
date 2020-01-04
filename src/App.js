import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddRecipe from './Forms/AddRecipeForm/AddRecipeForm';
import CreateGroceryList from './Forms/CreateGroceryList/CreateGroceryList';
import GroceryLists from './GroceryLists/GroceryLists';
import FolderList from './FolderList/FolderList';
import ContainerIndividualGroceryList from './Containers/IndividualListContainer'
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import './App.css';
import IndividualRecipeContainer from './Containers/IndividualRecipeContainer';
import RecipesInFolder from './RecipesInFolder/RecipesInFolder'
import AddFolder from './Forms/AddFolder/AddFolder';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      folders: [],
      lists: [],
      errorBoundaryKey: 0
    };
  }
  render() {
    
    return (
      <div className="App">
        <NavBar className="nav-bar" />

        <div className="content" aria-live="polite">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/add-recipe" component={AddRecipe} />

            <Route exact path="/lists" component={GroceryLists} />
            <Route path="/create-grocery-list" component={CreateGroceryList} />
            <Route
              path="/lists/:list_id"
              component={ContainerIndividualGroceryList}
            />
            <Route
              path="/recipes/:folder_id/:recipe_id"
              component={IndividualRecipeContainer}
            />
            <Route path="/recipes/:folder_id" component={RecipesInFolder} />
            <Route path="/recipes" component={FolderList} />
            <Route path="/add-folder" component={AddFolder} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;