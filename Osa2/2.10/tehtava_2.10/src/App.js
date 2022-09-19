import {useState} from 'react'

import Person from './Components/Person'
const Filter = (props) => {
  return (
    <p> Filter shown with {props.filtteri} </p> 
  )
}
const PersonAdd = (props) => {
  return (
    <div> {props.addName} </div>
  )
}
const RenderPerson = (props) => {
  return (
    <div> {props.render} </div> 
  )
}
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
        
        <Filter filtteri={<input value={value} onChange={e => setValue(e.target.value)} ></input> } />

        <h2>Add a new</h2>
        
        <PersonAdd addName={<form onSubmit={addPerson}><p>Name:</p><input value={newPerson} onChange={handlePersonChange} ></input>
        <p>Phone number:</p> <input value={newNumber} onChange={handleNumberChange} ></input> <br></br>
        <button type="Submit">Save </button></form>} />
       
       <div>
        <h2>Numbers</h2>
          <RenderPerson render={ persons.filter(person => {
            if (!value) return true
            if (person.name.toLowerCase().includes(value) || person.name.includes(value)) {
              return true
            }
          }).map(person => <Person key={person.name} person={person} />) 
          }
        />
    </div>
   </div>
  )
}
/*

*/

/*
{persons.map(person =>
              <Person key={person.name} person={person} />
              )}
*/
export default App
