function replaceEmptySpace(inputString, length){
    console.log(inputString.replace(/ /g,"%20"));
}

replaceEmptySpace("This string has spaces in it", 0);

replaceEmptySpace("A string with spaces", 0);