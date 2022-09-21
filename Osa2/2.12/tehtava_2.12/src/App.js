import {useState, useEffect} from 'react'
import Country from './Components/Country'
import Country2 from './Components/Country2'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [value, setValue] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('Promise fulfilled')
      setCountries(response.data)
  })
}, [])
  console.log('render', countries.length, 'countries')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newCountry,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: countries.length + 1,
    }
    setCountries(countries.concat(noteObject))
    setNewCountry('')
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewCountry(event.target.value)
  }
  const handleCountryChange = (event) => {
    event.preventDefault()
    setValue(event.target.value)
    setNewFilter(event.target.value)
    //console.log()
  }
  const countriesToShow = !newFilter
  ? countries
  : countries.filter(countries => countries.name.common.toLowerCase().includes(newFilter.toLocaleLowerCase()))

  let fyi = "Too many matches."

if (countriesToShow.length > 10)
return (
  <div>
    Find countries Step 1 <input value={newFilter} onChange={handleCountryChange} />
    <ul>
      {fyi}
    </ul>
  </div>
)
 else if (countriesToShow.length < 10 && countriesToShow.length > 1)
  return (
      <div>
        
          <p>Find countries Step 2 </p>
          <input value={newFilter} onChange={handleCountryChange } >
          </input>
        <ul>
          {countriesToShow.map(country => (
            <Country key={country.id} country={country} />
          ))}
        </ul>
        </div>
  )
  else if (countriesToShow.length === 1)
  return (
       <div>
        <p>Find countries Step 3</p>
        <input value={newFilter} onChange={handleCountryChange } ></input>
        <ul>
      {countriesToShow.map(country2 => (
        <Country2 key={country2.name} country2={country2} />
        ))
      }
       </ul>  
          
        

      </div>
  )
}
/*
 
*/
export default App