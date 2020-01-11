import React, { Component } from 'react'
import DebtContext from '../Contexts/DebtContext'
import FolderContext from '../Contexts/FolderContext'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './DisplayDebtsInFolder.css'

export default class DisplayDebtsInFolder extends Component {
  
  static contextType = DebtContext;
  static contextType = FolderContext;
  
  render() {
    const { debt_name, id, folderid} = this.props
    
    return (
      <Link to={`/folders/${folderid}/${id}`} className='debt-name'> 
       <>
       <header className='debt-header'>
           <h2 className='debt-name-link'>{debt_name}</h2>
       </header>
        </>
        </Link>
        
   ) }
}

  
  DisplayDebtsInFolder.propType = {
    match: PropTypes.object.isRequired
  };