function ulang(){
    var array1 = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

    var filter = array1.filter((item)=>{
        return item>15
    })

    return filter
}

console.log(ulang())
