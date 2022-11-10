import axios from 'axios'
const baseUrl = '/api/notes' //'/api/notes' //http://localhost:3001/notes //
const baseUrl2 = 'http://localhost:3001/api/persons'
const baseUrl3 = 'http://localhost:3001/api/persons/'
const baseUrl4 = './api/persons'
const getAll = () => {
    const request = axios.get(baseUrl2)
    /*
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2022-09-26',
        important: true,
    }
    */
    //return request.then(response => response.data.concat(nonExisting))
    return request.then(response => response.data)
}
const getAll2 = () => {
    const request = axios.get(baseUrl2)
    return request.then(response => response.data)
}
/*
const getAll = () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}
*/

const create = async newObject => {
    const request = axios.post(baseUrl2, newObject)
    return request.then(response => response.data)
}
const replace = async (id, newObject) => {
    const request = axios.put(`${baseUrl2}/${id}`, newObject)
    return request.then(response => response.data) //
}
const update = async (id, newObject) => {
    const request = axios.put(`${baseUrl2}/${id}`, newObject)
    return request.then(response => response.data)
}
const deleteThis = async (id, newObject) => {
    //console.log(JSON.stringify(request.headers))
    const request = axios.delete(baseUrl2 + "/" + id, newObject)
    console.log(request)
    console.log(baseUrl2 + "/" + id)
    return request.then(response => response.data)
}

export default { getAll, create, update, deleteThis, replace, getAll2 }