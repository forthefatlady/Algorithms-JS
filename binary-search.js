var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
var max = arr.length - 1
var min = 0

function recursiveBinarySearch(target, myArr) {
    console.log("min ", min, "max ", max)
    var gIndex = Math.floor((max + min) / 2)
    var gValue = arr[gIndex]
    if (gValue === target) {
        return gIndex;
    }
    if (gValue < target) {
        min = gIndex + 1
    } else {
        max = gIndex - 1
    }
    if (max < min) {
        return -1
    } else {
        return recursiveBinarySearch(target, myArr)
    }
}

console.log(recursiveBinarySearch(parseInt(process.argv[2], 10), arr))
console.log(typeof parseInt(process.argv[2], 10))
console.log(typeof 1)
