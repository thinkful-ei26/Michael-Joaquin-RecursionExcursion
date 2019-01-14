// 3 + 2 + 1
// 2 + 1
// 1

// 4 3 2 1 = 10
// 5 4 3 2 1 = 15
// 6 5 4 3 2 1 = 21

function triangle(x) {
    if(x === 0){
        return 0; 
    }
    else{
        return x + triangle(x - 1); 
    }
}

console.log(triangle(5));