import React from 'react'
import IndividualDebt from '../IndividualDebt/IndividualDebt'
import DebtService from '../Services/DebtService'
import FolderService from '../Services/FolderService';
import DebtContext from '../Contexts/DebtContext'
import {Link} from 'react-router-dom'

class IndividualDebtContainer extends React.Component {
    static contextType = DebtContext;

    constructor(props){
      super(props);
      this.state = {
        folder: {}
      }
    }
    
    componentDidMount() {
      DebtService.getDebt(this.props.match.params.debt_id)
        .then(debt => this.context.setDebt([debt]))
        .catch(this.context.setError)

      FolderService.getFolder(this.props.match.params.folder_id)
        .then(folder=>this.setState({folder}))
        .catch(this.context.setError)
    }
  
    render() {
      const debt = this.context.debts.find(debt => debt.id === parseInt(this.props.match.params.debt_id))
      return ( 
        <>
          <IndividualDebt {...debt} />
          <p><Link to={`/folders/${this.props.match.params.folder_id}`}>Back to {this.state.folder.folder_name}</Link></p>
        </>
      )
      
    }
  }

  export default IndividualDebtContainer;