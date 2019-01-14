function splitTime(str, splitter) {
    
    if(str.indexOf(splitter) === -1){
        return [str];
    }else{
        let temp = str.indexOf(splitter);
        let tempString = str.slice(0,temp);
        return [tempString, ...splitTime(str.slice(temp+1),splitter) ]
    }

}


console.log(splitTime('hel/lo/hey', '/'));

// hel   split (lo/hey)

// lo  split(hey)

//