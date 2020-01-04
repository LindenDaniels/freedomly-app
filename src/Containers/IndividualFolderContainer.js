import React, { Component } from 'react'
import IndividualFolder from '../IndividualFolder/IndividualFolder'
import FolderService from '../Services/FolderService'
import FolderContext from '../Contexts/FolderContext'

class IndividualFolderContainer extends React.Component {
    static contextType = FolderContext;
    
    componentDidMount() {
      FolderService.getFolder(this.props.match.params.folder_id)
        .then(folder => this.context.setFolder([folder]))
        .catch(this.context.setError)
    }
  
    render() {
      const folder = this.context.folders.find(folder => +folder.id === +this.props.match.params.folder_id)
      return <IndividualFolder {...folder} />
    }
  }

  export default IndividualFolderContainer;