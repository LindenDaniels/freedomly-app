import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import App from './App';
import { ListProvider } from './Contexts/ListContext';
import { FolderProvider } from './Contexts/FolderContext';
import { RecipeProvider } from './Contexts/RecipeContext';
import './index.css';

ReactDOM.render(
    <FolderProvider>
    <RecipeProvider>
    <ListProvider>
    <BrowserRouter>
    <App />,
    </BrowserRouter>
    </ListProvider>
    </RecipeProvider>
    </FolderProvider>,
    document.getElementById('root')
  );