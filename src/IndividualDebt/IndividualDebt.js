import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './IndividualDebt.css'
import DebtContext from '../Contexts/DebtContext'

export default class IndividualDebt extends Component {
 
  static contextType = DebtContext;
  
  render() {
    const { debt_name, id, debt_amount } = this.props
    
    return (
       <>
       <header className='individual-debt-header'>
           <h2 className='debt-name'>{debt_name}</h2>
       </header>
        <section className='debts'> 
          <ul>
              <li key={id} className='debt-items'>
               ${debt_amount}
              </li>
          </ul>
        </section>
        </>
        
   ) }
}

  
  
  IndividualDebt.propType = {
    match: PropTypes.object.isRequired
  };