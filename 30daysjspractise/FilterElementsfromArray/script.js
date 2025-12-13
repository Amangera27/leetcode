function filteredArr(value,index){
    return value > 10;
}


function filtering(arr,fn){
    let cloneFilter = [];

    for(let i = 0; i <arr.length; i++){
        if(fn(arr[i],i)){
            cloneFilter.push(arr[i])
        }
    }

    return cloneFilter;
}

console.log(filtering([2,5,6,10,12,45,80], filteredArr))