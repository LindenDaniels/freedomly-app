import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddDebt from './Forms/AddDebtForm/AddDebtForm';
import FolderList from './FolderList/FolderList';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import './App.css';
import IndividualDebtContainer from './Containers/IndividualDebtContainer';
import DebtsInFolder from './DebtsInFolder/DebtsInFolder'
import AddFolder from './Forms/AddFolder/AddFolder';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debts: [],
      folders: [],
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
            <Route path="/add-debt" component={AddDebt} />
            <Route
              path="/folders/:folder_id/:debt_id"
              component={IndividualDebtContainer}
            />
            <Route path="/folders/:folder_id" component={DebtsInFolder} />
            <Route path="/folders" component={FolderList} />
            <Route path="/add-folder" component={AddFolder} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;