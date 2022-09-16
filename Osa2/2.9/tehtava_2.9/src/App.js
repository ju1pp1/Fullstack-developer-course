import {useState} from 'react'

import Person from './Components/Person'

const App = () => {
  
  const [persons, setPersons] = useState([
    {name : 'Seppo Taalasmaa',
      phone: '0501234567'},
      {name : 'Ismo Laitela',
      phone: '0504231245'},
      {name : 'Ulla Taalasmaa',
      phone: '0403561231'},
  ])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [value, setValue] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if(persons.findIndex((p) => p.name == newPerson) != -1) {
      alert(`${newPerson} is already in the phonebook`);
      return;
    }
    if(persons.findIndex((p) => p.phone == newNumber) != -1) {
      alert(`${newNumber} is already in the phonebook`);
      return;
    }
    const personObject = {
      name: newPerson,
      phone: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewPerson('')
    setNewNumber('')
    console.log(persons)
    
  }
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
    
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  return (
      <div>
        <h1>Phonebook</h1>
        filter shown with <input 
        value={value}
        onChange={e => setValue(e.target.value)}
        />
        

        <h2>Add a new</h2>
       <form onSubmit={addPerson}>
        <div>
        Name: <input 
        value={newPerson}
        onChange={handlePersonChange}
        />
        </div>
        <div>
          Phonenumber: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
        <button type="Submit">Save </button>
        </div>
       </form>

       <div>
        <h2>Numbers</h2>
          
        {persons.filter(person => {
          if(!value) return true
          if (person.name.toLowerCase().includes(value) || person.name.includes(value)) {
            return true
          }
        })
        .map(person => 
          <Person key={person.name} person={person} /> 
          )
        }
          
        </div>

      </div>
  )
}
/*
{persons.map(person =>
              <Person key={person.name} person={person} />
              )}
*/
export default App
