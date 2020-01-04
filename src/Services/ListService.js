import config from '../config'

const ListService = {
  
  getLists() {
    return fetch(`${config.API_ENDPOINT}/lists`, {
      headers: {
      },
    })
      .then(res => 
         (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  getList(list_id) {
    
    return fetch(`${config.API_ENDPOINT}/lists/${list_id}`, {
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

export default ListService