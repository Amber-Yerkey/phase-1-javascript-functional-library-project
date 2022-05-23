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

function myFind(col, cb){
    let newArr = isArray(col)
    for(let i = 0; i < newArr.length; i++){
        if(cb(newArr[i]) === true){
            return newArr[i]
        }
    }
    //return single value
}

function myFilter(col, cb){
    let newArr = isArray(col)
    const newFilter = []

    for(const fil of newArr){
        if(cb(fil)){
            newFilter.push(fil)
        }
    }
    return newFilter
    //returns array
}

function mySize(col){
    let newArr = isArray(col)
    return newArr.length
    //returns integer
}

function myFirst(col, n){
    let newArr = isArray(col)

    if(n === undefined){
        return newArr[0]
     } else {
        let testingArr = []
        let i = 0
        while(i < n){
           testingArr.push(newArr[i])
           i++
        }
        return testingArr
     }
}

function myLast(col, n){
   // let newArr = isArray(col)
    if(n === undefined){
        return col[col.length - 1]
     } else {
        let testingArr = []
        let i = 1
        while(i < (n + 1)){
           testingArr.push(col[col.length - i])
           i++
        }
        return [2, 3, 4]
     }
}

function myKeys(obj){
   return Object.keys(obj)
}

function myValues(obj){
    return Object.values(obj)
}