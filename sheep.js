function countSheep(x) {
    if(x===0){
        return;
    }
    console.log(`${x} - Another sheep over the fence`)
    return countSheep(x-1);
}

countSheep(3)

/*

question one:




*/