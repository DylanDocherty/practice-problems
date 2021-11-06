/**
 * Takes two strings.  Returns true if they are permutations.  False if they are not.
 */
function checkPermutation(string1,string2){
    if(string1.length != string2.length){
        return false;
    }
    let charArray1 = string1.split("");
    let charArray2 = string2.split("");

    let string1Map = new Map();
    let string2Map = new Map();
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
        // console.log(mapValue);
        mapValue = string2Map.get(charArray2[i]);
        if(mapValue == undefined){
            string2Map.set(charArray2[i],1);
        }else{
            string2Map.set(charArray2[i],mapValue + 1);
        }
    }
    let mapValue1 = 0;
    let mapValue2 = 0;

    for(let i=0;i<string2.length; i++){
        mapValue1 = string1Map.get(charArray2[i]);
        mapValue2 = string2Map.get(charArray2[i]);
        if(mapValue1 != mapValue2){
            return false;
        }
    }
    return true;
}

console.log(checkPermutation("string1","string2"));//false

console.log(checkPermutation("string1","string1"));//true