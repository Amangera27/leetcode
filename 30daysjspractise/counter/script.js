let n = 10;

function counter(n){
    return function(){
        return n++;
    }
}