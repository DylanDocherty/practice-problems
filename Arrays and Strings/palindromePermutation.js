/**
 * Dylan Docherty
 * Cracking the Coding Interview
 * Chapter Arrays and String
 * Question 1.4 Palindrome Permutation
 */


/**
 * string1 a string to check if there are and permutations of a palindrome
 */
 function checkPalindromePermutation(string1){
    if(typeof string1 != "string"){
        return "please use a string for string1";
    }
    let charArray1 = string1.split("");

    let stringMap = new Map();
    let mapValue = 0;
    for(let i=0;i<string1.length; i++){
        mapValue = string1Map.get(charArray1[i]);
        // string1Map.set(charArray1[i],1);
        if(mapValue == undefined){
            string1Map.set(charArray1[i],1);
        }else{
            string1Map.set(charArray1[i],mapValue + 1);
        }
    }
    for(let i=0;i<string2.length; i++){
        mapValue1 = string1Map.get(charArray2[i]);
        mapValue2 = string2Map.get(charArray2[i]);
        if(mapValue1 != mapValue2){
            return false;
        }
    }
    return true;
}

console.log(checkPermutation("string1"));//false
