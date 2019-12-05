import axios from "axios"

const URL = "http://localhost:3003/api/todos"

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
  // const search = description 
  //           ? `&description__regex=/${description}/` 
  //           : ''
  //       axios.get(`${URL}?sort=-createdAt${search}`)
  //           .then(resp => this.setState({...this.state, description, list: resp.data}))
}

export const add = (description) => {
  const request = axios.post(URL, { description })
  return {
    type: 'TODO_ADDED',
    payload: request
  }
}