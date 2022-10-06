import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2022-09-26',
        important: true,
    }
    return request.then(response => response.data.concat(nonExisting))
}
/*
const getAll = () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}
*/

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
const replace = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data) //
}
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
const deleteThis = (id, newObject) => {
    const request = axios.delete(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, update, deleteThis, replace }