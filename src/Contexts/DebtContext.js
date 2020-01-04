import React, { Component } from 'react'

const DebtContext = React.createContext({
  debts: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setDebt: () => { },
})
export default DebtContext

export class DebtProvider extends Component {
  state = {
    debts: [],
    error: null,
  };

  setDebt = debts => {
    this.setState({ debts })
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
      debts: this.state.debts,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDebt: this.setDebt,
    }
    return (
      <DebtContext.Provider value={contextValue}>
        {this.props.children}
      </DebtContext.Provider>
    )
  }
}