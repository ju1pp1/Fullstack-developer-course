const Country2 = ({ country2 }) => {
    
    //{notes.map(x => 
      //  <li key={x.id}> {x.content} </li>
        //)}
        //console.log(country2[Object.keys(country2)[15]])
        let [first] = Object.values(country2.languages)
        
        console.log(first)
        
        const flagi = country2.flags.png
        let url = `${flagi}`
        console.log(url)
        
    return (
        <div>
            
            <h1><b>{country2.name.common}</b></h1>
            <p>Capital: {country2.capital}</p>
            <p>Area: {country2.area}</p>

            <h2><b>Languages</b></h2>
            <li key={country2.id} > {Object.values(country2.languages) + " "} </li> <br></br>
            <img src={url} ></img>
        </div>
        
    )
    
}
export default Country2