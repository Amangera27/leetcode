let x = 121;


function isPalindrome(x){
    let reverseX = +x.toString().split("").reverse().join("");
    if(reverseX === x){
        return true
    }else{
        return false
    }
}