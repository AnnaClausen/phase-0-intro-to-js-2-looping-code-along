let newArr = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        newArr.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    } 

return newArr;
}

function countDown(number) {
    while(number >= 0) {
        console.log(number)
        number--
    }
}
