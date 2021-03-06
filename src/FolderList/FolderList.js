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

    return (
      <section className="folder-list">
      {folders.map(folder =>
        <IndividualFolder
          id={folder.id}
          key={folder.id}
          folder_name={folder.folder_name}
          aria-controls="Folder List"
          className='folder-list'
        />)
      }
      </section>
    )
  }

}