function createEmployeeRecord(array) {
    const obj = {}
    for(let i = 0; i < array.length; i++) {
        obj.append(array[i])
        console.log(obj)
    }
}


createEmployeeRecord([1,2,3,4])