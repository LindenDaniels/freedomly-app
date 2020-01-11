import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import App from './App';
import { FolderProvider } from './Contexts/FolderContext';
import { DebtProvider } from './Contexts/DebtContext';
import './index.css';

ReactDOM.render(
    <FolderProvider>
    <DebtProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </DebtProvider>
    </FolderProvider>,
    document.getElementById('root')
  );