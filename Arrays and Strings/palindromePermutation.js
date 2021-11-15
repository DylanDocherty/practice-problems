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
    let freq = {};
    charArray1.map((value)=>{
        if(!freq[value]){
            freq[value] = 1;
        }else{
            freq[value] += 1;
        }
    });

    let centreValue = false; // If there is exactly 1 letter without a match, it can be in the centre of the palindrome.
    let isPalindromePermutation = true;
    
    
    Object.keys(freq).forEach((value)=>{
        if((freq[value]/2) !=1){
            if(!centreValue){
                centreValue = true;
            }else{
                isPalindromePermutation = false;
            }
        }
    });
    
    return isPalindromePermutation;
}

console.log(checkPalindromePermutation("dogazgod"));//false

console.log(checkPalindromePermutation("dogagod"));//false

console.log(checkPalindromePermutation("doggod"));//false
