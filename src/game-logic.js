export function reorderRandomly(array){
    const length  = array.length
    const newArray = new Array(length).fill(0);
    array.forEach(item=>{
        let newIndex = getRandomNumber(length)
        while (newArray[newIndex]!=0){
            newIndex = getRandomNumber(length)
        }
        newArray[newIndex] = item
    })

    return newArray

}


const getRandomNumber = (limit)=>{
    return Math.floor(Math.random()*limit)
}


export function displayGameWon(){
    console.log("YOU Won")
}


export function displayGameLost(){
    console.log('You Lose')
}