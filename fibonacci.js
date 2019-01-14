//creating a function that displays the nth number of the fibonacci sequence

// base case for 1 and 0
// base case would be that I have reached n
// recursive case would be that I add the two previous numbers 





function fibseq(x) {
    if(x === 0){
        return 0;
    }
    else if(x === 1){
        return 1;
    }
    else {
        return fibseq(x-1) + fibseq(x-2);
    }
    
}

console.log(fibseq(6));

