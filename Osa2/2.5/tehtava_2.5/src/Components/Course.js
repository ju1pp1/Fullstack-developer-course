const Courses = ({ courses }) => {
    const Header = () => {
        return (
        <div>
            <h1>Web development curriculum</h1>
        </div>
            )
        }
    const Content = () => {
        return(
            <div>
                <h2>{courses[0].name}</h2>
                        {courses[0].parts.map(x => 
                            <li key={x.id} > {x.name} {x.exercises} </li>
                    )}
        <p>Total sum of exercises is</p> {courses[0].parts.reduce((sum, exercise) => sum + exercise.exercises, 0)}

        <h2> {courses[1].name} </h2>
        {courses[1].parts.map(x => 
        <li key={x.id} > {x.name} {x.exercises} </li>
        )}
        <p> Total sum of exercises is</p> {courses[1].parts.reduce((sum, exercise) => sum + exercise.exercises, 0)}
            </div>
            )    
        }
    return (
        <div>
            <Header  />
            <Content  />
            
        </div>
    )
}
export default Courses