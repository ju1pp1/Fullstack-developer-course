const Person = ({ person }) => {
    
    //{notes.map(x => 
      //  <li key={x.id}> {x.content} </li>
        //)}
    return (
        <div>
            <li>
            {person.name}
            </li>
        </div>
    )
}
export default Person