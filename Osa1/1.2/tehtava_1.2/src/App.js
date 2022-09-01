const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header header={course} />
            <Content contentParts1={part1} contentParts2={part2} contentParts3={part3}
                contentExercises1={exercises1} contentExercises2={exercises2} contentExercises3={exercises3} />
            
            <Total total={exercises1 + exercises2 + exercises3} />

        </div>
    )
}
const Content = (props) => {
    //Kurssin osat ja tehtävämäärät
    return (
        <div>
            <Part parts={props.contentParts1} exercises={props.contentExercises1} />
            <Part parts={props.contentParts2} exercises={props.contentExercises2} />
            <Part parts={props.contentParts3} exercises={props.contentExercises3} />
        </div>
    )
}

const Total = (props) => {
    //Kurssin tehtävien yhteismäärä
    return (
        <div>
            <p> Tehtavien yhteismaara on: <b> {props.total}</b> </p>
        </div>
    )


}

const Header = (props) => {
    //Kurssin nimien renderöinti
    return (
        <div>
            <h1>{props.header}</h1>
        </div>
    )
}
const Part = (props) => {
    return (
        <div>
            <p> Osan nimi: <b> {props.parts} </b> ja osan tehtavamaara: <b> {props.exercises}</b> </p>
        </div>
    )
}

export default App
