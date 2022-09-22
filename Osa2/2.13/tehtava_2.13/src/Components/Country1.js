import {useState} from 'react'
const Country1 = ({ country1 }) => {
    const [showAll, setShowAll] = useState(false)
    //{notes.map(x => 
      //  <li key={x.id}> {x.content} </li>
        //)}
        let [first] = Object.values(country1.languages)
        
        console.log(first)
        
        const flagi = country1.flags.png
        let url = `${flagi}`
        console.log(url)

        const SingleCountry = () => {
            return (
                <div>
                <p>{country1.capital} </p>
                <p>Capital: {country1.capital}</p>
            <p>Area: {country1.area}</p>

            <h2><b>Languages</b></h2>
            <li key={country1.id} > {Object.values(country1.languages) + " "} </li> <br></br>
            <img src={url} ></img>
            </div>
            )
        }
    return (
        <div>
            <li>
            {country1.name.common} <button onClick={() => setShowAll(!showAll)} >
                {showAll ? 'hide' : 'show'}
            </button>
            {showAll && <SingleCountry
            
            />
            }
            
            </li>
        </div>
    )
}
export default Country1