let arr = [4,2,9,10,7,5,55,45];

function maxValue(arr){
    let max = arr[0];

    for(let i = 0; i <arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue(arr))