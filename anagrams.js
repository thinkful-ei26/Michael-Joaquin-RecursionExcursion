// create an empty object to hold the key value pairs
// create an iffy function to recursively call anagrams
// create a for loop that will increment one each time and recursively call the anagram function
// when the str passed into the function is "" we know an anagram was created and we will put it in the key value pairs
// 

let allAnagrams = function(string) {

    let output = {};
    (function anagram(ana, str) {
        if(str === ""){
            output[ana] = 1;
        }

        for (let i = 0; i < str.length; i++) {
            return anagram(ana + str[i] , str.slice(0,i) + str.slice(i + 1)); 
            
     }
    })('',string)
    
}




let anagrams = allAnagrams('abcd');
console.log(anagrams); 
