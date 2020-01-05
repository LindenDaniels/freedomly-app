import React, { Component } from 'react'
import './FolderList.css'
import FolderContext from '../Contexts/FolderContext'
import IndividualFolder from '../IndividualFolder/IndividualFolder'
import FolderService from '../Services/FolderService';

export default class FolderList extends Component {

  static contextType = FolderContext;

  componentDidMount() {

    FolderService.getFolders()
      .then(this.context.setFolder)
      .catch(this.context.setError)
  }

  render() {
    const { folders = [] } = this.context;
    console.log(folders[0])

    return (

      folders.map(folder =>
        <IndividualFolder
          id={folder.id}
          key={folder.id}
          folder_name={folder.name}
          aria-controls="Folder List"
          className='folder-list'
        />

    ))
  }

}