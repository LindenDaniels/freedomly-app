import React, { Component } from 'react'
import './GroceryLists.css'
import ListContext from '../Contexts/ListContext'
import GroceryList from '../IndividualGroceryList/IndividualGroceryList'
import ListService from '../Services/ListService';

export default class GroceryLists extends Component {

  static contextType = ListContext;

  componentDidMount() {

    ListService.getLists()
      .then(this.context.setList)
      .catch(this.context.setError)
  }

  render() {
    const { lists = [] } = this.context;

    return (

      lists.map(list =>
        
        <GroceryList
          id={list.id}
          key={list.id}
          name={list.name}

          aria-controls="groceryList__list"
          className='groceryList__grocery-link'
        />

      )

    )
  }

}