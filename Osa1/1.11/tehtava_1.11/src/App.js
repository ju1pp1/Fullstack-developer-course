import {useState } from 'react'
const StatisticLine = (props) => { 
   return(
    <div>{props.texti} {props.value}</div>
   )
  }
const Button = (props) => (
<button onClick={props.handleClick} >
                {props.text}
            </button>
)
const Statistics = (props) => {
  if (props.allClickz.length === 0){
    return (
      <div><br></br>
        No feedback given.
      </div>
    )
  }
  return (
   <div>
    

    <h1>Statistics</h1>
    <StatisticLine texti="Good" value={props.goodStat} /> 
    <StatisticLine texti="Neutral" value={props.neutralStat} />
    <StatisticLine texti="Bad" value={props.badStat} />
    <StatisticLine texti="All" value={props.allStat} />
    <StatisticLine texti="Average" value={props.averageStat} />
    <StatisticLine texti="Positive" value={props.positiveStat} />
    
    
   </div> 
  )
}
    const App = () => {
        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)
        const [all, setAll] = useState(0)
        const [average, setAverage] = useState(0)
        const [allClicks, setAllClicks] = useState([])
        
          const handleGoodClick = () => {
            setAllClicks(allClicks.concat('Good'))
            setAverage(average + 1)
            setAll(all + 1)
            setGood(good + 1)
            
          }
          const handleNeutralClick = () => {
            setAllClicks(allClicks.concat('Neutral'))
            setAverage(average + 0)
            setAll(all + 1)
            setNeutral(neutral + 1)
            
          }
          const handleBadClick = () => {
            setAllClicks(allClicks.concat('Bad'))
            setAverage(average - 1)
            setAll(all + 1)
            setBad(bad + 1)
            
          }
          const handleAllClicks = () => {
            setAllClicks(allClicks + 1)
          }

        return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={handleGoodClick} handleAllClicks={handleAllClicks} text="Good" />
            <Button handleClick={handleNeutralClick} text="Neutral"/>
            <Button handleClick={handleBadClick} text="Bad"/>
            <table>
              <thead>
                <tr className='good'>
                  <th>
                    Good
                  </th>
                  </tr>
                  </thead>
                  <tbody>
                <tr>
                  <td>{good}</td>
                </tr>
              </tbody>
              <thead>
              <tr className='neutral'>
                  <th>
                    Neutral
                  </th>
                  </tr>
                  </thead>
                  <tbody>
                <tr>
                  <td>{neutral}</td>
                </tr>
              </tbody>
              <thead>
              <tr className='bad'>
                  <th>
                    Bad
                  </th>
                  </tr>
                  </thead>
                  <tbody>
                <tr>
                  <td>{bad}</td>
                </tr>
              </tbody>
              <thead>
              <tr className='all'>
                  <th>
                    All
                  </th>
                  </tr>
                  </thead>
                  <tbody>
                <tr>
                  <td>{all}</td>
                </tr>
              </tbody>
              <thead>
              <tr className='average'>
                  <th>
                    Average
                  </th>
                  </tr>
                  </thead>
                  <tbody>
                <tr>
                  <td>{average / all}</td>
                </tr>
              </tbody>
              <thead>
              <tr className='positive'>
                  <th>
                    Positive
                  </th>
                  </tr>
                  </thead>
                  <tbody>
                <tr>
                  <td>{good / all * 100 + " %"}</td>
                </tr>
              </tbody>
              
            </table>
            <Statistics allClickz={allClicks}
            goodStat={good}
            neutralStat={neutral}
            badStat={bad}
            allStat={all}
            averageStat={average / all}
            positiveStat={good / all * 100 + " %"} 
            
            />
            </div>
            )

    }

export default App
