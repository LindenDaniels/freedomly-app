import config from '../config'

const FolderService = {
  
  getFolders() {
    return fetch(`${config.API_ENDPOINT}/folders`, {
      headers: {
      },
    })
      .then(res => 
         (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  getFolder(folder_id) {
    
    return fetch(`${config.API_ENDPOINT}/folders/${folder_id}`, {
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

export default FolderService