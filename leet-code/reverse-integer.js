/**
 * Dylan Docherty
 * Find the question here https://leetcode.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    let isNeg = false;
    if(x < 0){
        isNeg = true;
        x *= -1;
    }
    
    let num = x.toString();//int to string
    let numReverse = "";
    for(let i=num.length-1;i>=0;i--){    //for loop reversing the string
        numReverse += num[i];
    }

    numReverse = isNeg? -parseInt(numReverse) : parseInt(numReverse);
    
    if(numReverse >= (Math.pow(2,31) -1)  || numReverse <= -(Math.pow(2,31))){
        return 0;
    }
    return numReverse;
};



console.log(reverse(1534236469));