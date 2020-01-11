import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component {

  render() {

    return (
      <div className='NavBar'>

        <NavLink
          className='nav-link'
          to='/'>
          <img src="https://img.icons8.com/ultraviolet/33/000000/cottage.png" alt=""></img>
          Home
            </NavLink>

        <NavLink
          className='nav-link'
          to='/add-debt'>
          <img src="https://img.icons8.com/ultraviolet/33/000000/add-list.png" alt=""></img>

          Add Debt
            </NavLink>
        <NavLink
          className='nav-link'
          to='/add-folder'>
          <img src="https://img.icons8.com/ultraviolet/33/000000/add-folder.png" alt=""></img>
          Add Folder

            </NavLink>
        <NavLink
          className='nav-link'
          to='/folders'>
          <img src="https://img.icons8.com/ultraviolet/33/000000/folder-invoices.png" alt=""></img>
          Folder List
            </NavLink>
      </div>

    )
  }
}