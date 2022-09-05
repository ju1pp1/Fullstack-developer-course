const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
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
            }
        ]
    }
    
    const Content = () => {
        //Kurssin osat ja tehtävämäärät

        return (
            <div>
                <p>Kurssin osan nimi on: <b>{course.parts[0].name}</b> ja tehtavia on: <b>{course.parts[0].exercises}</b> </p>
                <p>Kurssin osan nimi on: <b>{course.parts[1].name}</b> ja tehtavia on: <b>{course.parts[1].exercises}</b> </p>
                <p>Kurssin osan nimi on: <b>{course.parts[2].name}</b> ja tehtavia on: <b>{course.parts[2].exercises}</b> </p>
            </div>
        )
    }

    const Total = () => {
        //Kurssin tehtävien yhteismäärä
        return (
            <div>
                <p> Tehtavien yhteismaara on: <b>{course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </b> </p>
            </div>
        )


    }

    const Header = () => {
        //Kurssin nimien renderöinti
        return <h2>Kurssin nimi on: {course.name}</h2>
    }
    return (

        <div>
            <Header course={course} />
            <Content parts={course} />
            <Total parts={course} />
        </div>
    )
}
export default App
