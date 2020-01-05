import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './IndividualFolder.css'
import FolderContext from '../Contexts/FolderContext'

export default class IndividualFolder extends Component {
 
  static contextType = FolderContext;
  
  
  render() {
    const { folder_name, id } = this.props
    
    return (
      <Link to={`/folders/${id}`} className='folder'> 
       <>
       <header>
           <h2>{folder_name}</h2>
       </header>
        </>
        </Link>
        
   ) }
}

  
  
  IndividualFolder.propType = {
    match: PropTypes.object.isRequired
  };