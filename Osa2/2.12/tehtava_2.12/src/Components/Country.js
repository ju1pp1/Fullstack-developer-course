const Country = ({ country }) => {
    
    //{notes.map(x => 
      //  <li key={x.id}> {x.content} </li>
        //)}
    return (
        <div>
            <li>
            {country.name.common}
            </li>
        </div>
    )
}
export default Country