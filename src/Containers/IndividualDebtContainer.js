import React from 'react'
import IndividualDebt from '../IndividualDebt/IndividualDebt'
import DebtService from '../Services/DebtService'
import DebtContext from '../Contexts/DebtContext'

class IndividualDebtContainer extends React.Component {
    static contextType = DebtContext;
    
    componentDidMount() {
      DebtService.getDebt(this.props.match.params.debt_id)
        .then(debt => this.context.setDebt([debt]))
        .catch(this.context.setError)
    }
  
    render() {
      const debt = this.context.debts.find(debt => +debt.id === +this.props.match.params.debt_id)
      return <IndividualDebt {...debt} />
      
    }
  }

  export default IndividualDebtContainer;