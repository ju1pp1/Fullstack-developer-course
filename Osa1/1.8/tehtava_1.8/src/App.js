import {useState } from 'react'

const Statistics = (props) => {

  return (
   <div>
    <h1>Statistics</h1>
    {props.good1} {props.goodClick} <br></br>
    {props.neutral1} {props.neutralClick} <br></br>
    {props.bad1} {props.badClick}<br></br>
    {props.all1} {props.allClick}<br></br>
    {props.average1} {props.averageClick}<br></br>
    {props.positive1} {props.positiveClick}
   </div> 
  )
}
    const App = () => {
        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)
        const [all, setAll] = useState(0)
        const [average, setAverage] = useState(0)

        
        const Button = (props) => (
            <button onClick={props.handleClick} >
                {props.text}
            </button>
        )
          const handleGoodClick = () => {
            setAverage(average + 1)
            setAll(all + 1)
            setGood(good + 1)
          }
          const handleNeutralClick = () => {
            setAverage(average + 0)
            setAll(all + 1)
            setNeutral(neutral + 1)
          }
          const handleBadClick = () => {
            setAverage(average - 1)
            setAll(all + 1)
            setBad(bad + 1)
          }
          

        const Good = "Good"
        const Neutral = "Neutral"
        const Bad = "Bad"
        const All = "All"
        const Average = "Average"
        const Positive = "Positive"
        
        
        return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={handleGoodClick} text="Good" />
            <Button handleClick={handleNeutralClick} text="Neutral"/>
            <Button handleClick={handleBadClick} text="Bad"/>
            
            <Statistics good1={Good} goodClick={good}
            neutral1={Neutral} neutralClick={neutral}
            bad1={Bad} badClick={bad}
            all1={All} allClick={all}
            average1={Average} averageClick={average / all}
            positive1={Positive} positiveClick={good / all * 100}
            />
            

        </div>
            )
    }

export default App
