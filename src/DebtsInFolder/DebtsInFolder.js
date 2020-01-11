import React from 'react'
import DisplayDebtsInFolder from './DisplayDebtsInFolder'
import DebtContext from '../Contexts/DebtContext'
import DebtService from '../Services/DebtService'
import FolderService from '../Services/FolderService'
import { Link } from 'react-router-dom'

class DebtsInFolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folder: {}
    }
  }
  static contextType = DebtContext;

  componentDidMount() {
    DebtService.getDebts(this.props.match.params.folder_id)
      .then(debts => this.context.setDebt(debts))
      .catch(this.context.setError);

    FolderService.getFolder(this.props.match.params.folder_id)
      .then(folder => this.setState({ folder }))
      .catch(this.context.setError)
  }

  render() {
    const debts = this.context.debts.filter(debt => +debt.folderid === +this.props.match.params.folder_id)
    return (

      <>
        <h2 className='folder-name'>{this.state.folder.folder_name}</h2>
        <p><Link to={`/folders`}>Back to Folder List</Link></p>
        {debts.map(debt => <DisplayDebtsInFolder key={debt.id} {...debt} />)}

      </>
    )
  }
}

export default DebtsInFolder;