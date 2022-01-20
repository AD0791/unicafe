import React, {useState} from 'react';
import Button from './components/Button';
import ContentTable from './components/ContentTable';
import Header from './components/Header';


//TODO: stop at 1.10

function App() {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGood = () =>{
    return setGood(
      good+ 1
    )
  }
  const handleNeutral = () =>{
    return setNeutral(
      neutral+ 1
    )
  }
  const handleBad = () =>{
    return setBad(
      bad+ 1
    )
  }


  
  return (
    <div >
      <Header title={'Give Feedback'}/>
      <Button handler={handleGood} text={'good'}/>
      <Button handler={handleNeutral} text={'neutral'}/>
      <Button handler={handleBad} text={'bad'}/>
      <Header title={'Statistics'}/>
      <ContentTable good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

export default App;
