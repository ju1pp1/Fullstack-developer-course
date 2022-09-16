import {useState} from 'react'

import Person from './Components/Person'

const App = () => {
  
  const [persons, setPersons] = useState([
    {name : 'Seppo Taalasmaa'}
  ])
  const [newPerson, setNewPerson] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    
    if(persons.findIndex((p) => p.name == newPerson) != -1) {
      alert(`${newPerson} is already in the phonebook`);
      return;
    }
    const personObject = {
      name: newPerson,
    }
    setPersons(persons.concat(personObject))
    setNewPerson('')
    
    
  }
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
    
  }
  
  return (
      <div>
        <h1>Phonebook</h1>
        
       <form onSubmit={addPerson}>
        <div>
        Name: <input 
        value={newPerson}
        onChange={handlePersonChange}
        />
        </div>
        <div>
        <button type="Submit">Save </button>
        </div>
       </form>

       <div>
        <h2>Numbers</h2>
          
            {persons.map(person =>
              <Person key={person.name} person={person} />
              )}
          
        </div>

      </div>
  )
}
export default App
