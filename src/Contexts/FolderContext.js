import React, { Component } from 'react'

const FolderContext = React.createContext({
  folders: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setFolder: () => {},
})
export default FolderContext

export class FolderProvider extends Component {
  state = {
    folders: [],
    error: null,
  };

  setFolder = folders => {
    this.setState({ folders })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }


  render() {
   
    const contextValue = {
      folders: this.state.folders,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFolder: this.setFolder,
    }
    return (
      <FolderContext.Provider value={contextValue}>
        {this.props.children}
      </FolderContext.Provider>
    )
  }
}