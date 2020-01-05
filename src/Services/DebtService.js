import config from '../config'

const DebtService = {
  
  getDebts() {
    return fetch(`${config.API_ENDPOINT}/debts`, {
      headers: {
      },
    })
      .then(res => 
         (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  getDebt(debt_id) {
    
    return fetch(`${config.API_ENDPOINT}/folders/${debt_id}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default DebtService