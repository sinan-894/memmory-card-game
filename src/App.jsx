import { useState,useEffect } from 'react'
import { ScoreBoard,MemmoryCards } from './components'
import './App.css'
import { getImageUrls } from './api'

function App() {
  const [score,setScore] = useState(0)
  let bestScore = 0
  const imageUrls = [
    'src/images/brook.jpeg','src/images/chopper.jpeg',"src/images/Franky.jpeg",
    "src/images/luffy-250.jpg",'src/images/nami.jpeg',"src/images/robin.jpeg",
    "src/images/sanji.jpeg","src/images/ussop.jpeg"
  ]

  return (
    <>
      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
      <MemmoryCards cards={imageUrls}></MemmoryCards>

    </>
  )
}

export default App
