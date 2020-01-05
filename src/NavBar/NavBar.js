import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component {

  render() {

    return (
      <div className='NavBar'>
        <NavLink
          className='nav-link'
          to='/'>
          Home
            </NavLink>

        <NavLink
          className='nav-link'
          to='/add-debt'>
          Add Debt
            </NavLink>
        <NavLink
          className='nav-link'
          to='/add-folder'>
          Add Folder

            </NavLink>
        <NavLink
          className='nav-link'
          to='/folders'>
          Folder List
            </NavLink>
      </div>

    )
  }
}