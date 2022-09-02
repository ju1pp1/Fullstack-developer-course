const App = () => {
    const course = 'Half Stack application development'
    const parts = [{
        name: 'Fundamentals of React',
        exercises: 10
    },
    {
        name: 'Using props to pass data',
        exercises: 7
    },
    {
        name: 'State of a component',
        exercises: 14
        }]

const Content = () => {
    //Kurssin osat ja tehtävämäärät
    
    return (
        <div>
            <p>Kurssin osan nimi on: <b>{parts[0].name}</b> ja tehtavia on: <b>{parts[0].exercises}</b> </p>
            <p>Kurssin osan nimi on: <b>{parts[1].name}</b> ja tehtavia on: <b>{parts[1].exercises}</b> </p>
            <p>Kurssin osan nimi on: <b>{parts[2].name}</b> ja tehtavia on: <b>{parts[2].exercises}</b> </p>
        </div>
    )
}

const Total = () => {
    //Kurssin tehtävien yhteismäärä
    return (
        <div>
            <p> Tehtavien yhteismaara on: <b>{parts[0].exercises + parts[1].exercises + parts[2].exercises} </b> </p>
        </div>
    )


}

const Header = () => {
    //Kurssin nimien renderöinti
    return <h2>Kurssin nimi on: {course}</h2>
}
    return (

        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}
export default App
