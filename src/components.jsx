import { useState } from 'react'
import { reorderRandomly } from './game-logic'


export function ScoreBoard({score,bestScore}){
    
    return (
        <>
        <div className='score-board-main'>
            <section className='score-board score'>Score : {score}</section>
            <section className='score-board bestscore'>Best Score : {bestScore}</section>
        </div>
        </>
    )
}



export function MemmoryCards({cardsObject,score, onScore}){
    const cards = Object.keys(cardsObject)
    const [orderOfCards,setOrderOfCards] = useState([...cards])
    const [memmory,setMemmory] = useState([])
    const handleClick = (e)=>{
        const newArray = reorderRandomly(cards)
        console.log(memmory)
        if(isGameOver(e.target.id)){
            onScore(0)
            setMemmory([])
        }
        else{
            onScore(score+1)
            setMemmory([...memmory,e.target.id])
        }
        setOrderOfCards([...newArray])
        
    }

    const isGameOver  = (card)=>{
        return memmory.includes(card)
    }
    return(
        <>
        <div className='cards-main'>
            {orderOfCards.map(card=>{
                return <img src={cardsObject[card]} key={card} id={card} alt="" onClick={handleClick} />
            })}
        </div>
        </>
    )
}

