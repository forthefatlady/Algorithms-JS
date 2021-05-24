var intArray = [];
var size = parseInt(process.argv[2], 10);
for (var i = 0; i < size; i++) {
    intArray.push(Math.floor(Math.random() * size));
}
console.log(intArray);
for (var i = 0; i < size; i++) {
    var minDex = i;
    for (var j = i; j < size; j++) {
        if (intArray[j] < intArray[minDex]) {
            minDex = j;
        }
    }
    var temp = intArray[i];
    intArray[i] = intArray[minDex];
    intArray[minDex] = temp;
    console.log(intArray);
}