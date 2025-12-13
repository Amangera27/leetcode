// binary searching is the searching which works on the sorted array and easy searching is done!
// concept of the binary searching:-Given a sorted array and work only on sorted array:

//1.Check the middle element

//2 .If target < middle → search left half

//3. If target > middle → search right half

//4. Repeat until found or left > right

function BinarySearch(arr,target){
   let left = 0;
   let right = arr.length - 1;


   while(left <= right){
    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === target){
        return mid;
    }

    if(arr[mid] < target){
        left = mid + 1
    }else{
        right = mid - 1;
    }
   }
   return -1
}


console.log(BinarySearch([2,5,7,9,15,17,25], 7))