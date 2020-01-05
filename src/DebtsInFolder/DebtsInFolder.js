import React from 'react'
import DisplayDebtsInFolder from './DisplayDebtsInFolder'
import FolderContext from '../Contexts/FolderContext'
import DebtContext from '../Contexts/DebtContext'
import DebtService from '../Services/DebtService'

class DebtsInFolder extends React.Component {
    static contextType = FolderContext;
    static contextType = DebtContext;
    
    componentDidMount() {
        DebtService.getDebts(this.props.match.params.folder_id)
          .then(debts => this.context.setDebt(debts))
          .catch(this.context.setError);
      }
  
    render() {
        const debts = this.context.debts.filter(debt => +debt.folderid === +this.props.match.params.folder_id )
        return debts.map(debt =>  <DisplayDebtsInFolder key={debt.id} {...debt} /> )
      }
  }

  export default DebtsInFolder;