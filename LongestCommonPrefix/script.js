function longestCommonPrefix(str){
    if(!str.length) return "";

    for(let i = 1; i<str.length; i++){
        while(str[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length - 1);
            if(prefix === "") return "";
        }
    }
    return prefix;
}