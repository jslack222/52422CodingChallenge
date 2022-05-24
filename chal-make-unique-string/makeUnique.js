// Write your solution below:
function makeUnique(arr) {
    let uniqArr = ""
    for (let i = 0; i < arr.length; i++) {
        if (uniqArr.includes(arr[i])) {
            continue 
        } else {
            uniqArr += arr[i]
        }
    }
    return uniqArr
}

console.log(makeUnique('helloworld'), "*succesful*")
console.log(makeUnique("iwanttoclimbamountain"), "*succesful*")
