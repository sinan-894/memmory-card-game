import { useState,useEffect } from 'react'
import { ScoreBoard,MemmoryCards,WinLoseMessage } from './components'
import './App.css'
import { getImageUrlsObject } from './api'
import { getRandomNumber } from './game-logic'

function App() {
  const [score,setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  const cid = getRandomNumber(10);
  
  const updateScore = (isScore)=>{
    if(isScore){
      const newScore = score+1
      setScore(newScore)
      if(newScore>bestScore) setBestScore(newScore)
    }
    else{
      setScore(0)
    }
    
  }

  const [imageUrlsObject,setImageUrlsObject] = useState({})

  useEffect(()=>{
    getImageUrlsObject(8  ).then(result=>{
      setImageUrlsObject(result)
    })
  },[])
  return (
    
      (Object.keys(imageUrlsObject).length===0)?
      <div>waiting {cid}</div>:
      <>  
        <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
        <MemmoryCards cardsObject={imageUrlsObject} score={score} setScore={updateScore}></MemmoryCards>
        <WinLoseMessage></WinLoseMessage>
      </>
  )
}

export default App
