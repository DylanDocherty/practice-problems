function isUnique(stringValue){
    let comparisonString = "";
    for(var i = 0; i < stringValue.length; i++){
        if(comparisonString.includes(stringValue[i])){
            return false
        }else{
            comparisonString += stringValue[i];
        }
    }
    return true;
}

console.log(isUnique("asdasd"));

console.log(isUnique("asd"));