import React, { Component } from 'react'
import './DebtList.css'
import DebtContext from '../Contexts/DebtContext'
import IndividualDebt from '../IndividualDebt/IndividualDebt'
import DebtService from '../Services/DebtService';

export default class DebtList extends Component {

  static contextType = DebtContext;

  componentDidMount() {

    DebtService.getDebts()
      .then(this.context.setDebt)
      .catch(this.context.setError)
  }

  render() {
    const { debts = [], folders = [] } = this.context;

    return (
      debts.map(debt =>
        <IndividualDebt
          className='debt-name-link'
          folder_id={folders.id}
          id={debt.id}
          key={debt.id}
          debt_name={debt.debt_name}
          debt_amount={debt.debt_amount}
          aria-controls="individual debt"
          className='debt-list'
        />

      )
    )
  }

}