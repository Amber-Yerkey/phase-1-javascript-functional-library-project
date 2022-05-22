// isArray is helper
function isArray(col) {
    let newArr
    if (Array.isArray(col)) {
        newArr = col
    } else {
        newArr = Object.values(col);
    }
    return newArr
}

function myEach(collection, callback) {
    let newArr = isArray(collection)
    for (let i = 0; i < newArr.length; i++) {
        callback(newArr[i])
    }

    return collection
}

function myMap(col, cb) {
    let newArr = isArray(col)
    const anArray = []

    for (let i = 0; i < newArr.length; i++){
        let final = cb(newArr[i])
        anArray.push(final)
    }
    return anArray
}

function myReduce(col, cb, acc){
    let newArr = isArray(col)

    if(acc === undefined) {
        acc = newArr[0]
        for (let i = 1; i< newArr.length; i++){
            acc = cb(acc, newArr[i], col)
        }
    } else {
        for(let i = 0; i < newArr.length; i++){
            acc = cb(acc, newArr[i], col)
        }
    }
    return acc
}

function myFind(){

}

function myFilter(){

}

function mySize(){

}

function myFirst(){

}

function myLast(){

}

function myKeys(){

}

function myValues(){
    
}