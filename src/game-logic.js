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


export const getRandomNumber = (limit,start=0)=>{
    return Math.floor(Math.random()*limit)+start
}


export function displayGameWon(){
    const modal = document.querySelector('#win');
    modal.showModal()
}


export function displayGameLost(){
    const modal = document.querySelector('#lose')
    modal.showModal()
}

export function closeMessageBox(){
    const modal  = document.querySelector('dialog[open]')
    modal.close()
}