/*
https://www.codewars.com/kata/546c7f89bed2e12fb300056f/train/javascript

Find a substring with wildcards

Already completed in Java first

*/
console.log(find("Once","Once Upon A TimeOO"));
console.log(find("Once","haystack"));
console.log(find("midnight","once upon a time at midnight!"));
console.log(find("_po_","once upon a time at midnight!"));
console.log(find("___night","once upon a time at midnight!"));
console.log(find("google","googgoogleggggoooglxeplexhexflexmexkex"));
console.log(find("ggg","googgoogleggggoooglxeplexhexflexmexkex"));
console.log(find("_g_o_","googgoogleggggoooglxeplexhexflexmexkex"));
console.log(find("mex____","xflexmexkex"));
checkIfSequenceIsValid("1 2 3 4");
checkIfSequenceIsValid("1 2 3 5");
checkIfSequenceIsValid("1 2 a 5");
findBinaryDigitSum(1234);
findMostFrequentlyUsedWords('a a a  b  c c  d d d d  e e e e e');
findMostFrequentlyUsedWords('  , e   .. ');

function find(needle,haystack){
    
    // find all matches of initial letter
    console.log(`Finding all instances of '${needle}' in '${haystack}'`);
    const firstLetter = needle[0];
    let partialMatch=false;
    let fullMatch=false;
    let lastLetter = false;
    // iterate over haystack
    for(let i=0;i<=(haystack.length-needle.length);i++){
        // iterate over needle
        console.log(`\ni = ${i}, Matching letter ${haystack[i]} with needle first letter ${firstLetter}`);
        // match if wildcard or letters match
        if(haystack[i]===firstLetter || firstLetter==='_'){
            // check the rest of the letters
             console.log(`${haystack[i]} matches or first letter is a wildcard`);
            for(let j=0;j<needle.length;j++){
                console.log(`matching letter '${haystack[i+j]}' with '${needle[j]}'`);                
                if(j===needle.length-1) lastLetter = true;
                if(needle[j]==='_'){
                    if(lastLetter) {
                        fullMatch = true;    
                        break;
                    }
                    console.log(`yes, letter match of '${haystack[i+j]}' with '${needle[j]}'`);     
                    partialMatch=true;
                    continue;
                }
                if(needle[j]===haystack[i+j]){
                    if(lastLetter) {
                        fullMatch=true;
                        break;
                    }
                    partialMatch=true;
                    continue;
                };
                // no full match found so move on to next firstLetterMatch
                partialMatch=false;
                lastLetter=false;
                break;            
            }
        }
        if(fullMatch){
            console.log(`match found at index ${i}`);
            return i;
        }
        partialMatch=false;
    }
    if(!fullMatch){
        console.log('Match not found');
        return -1;
    }
    return -1;
}

function checkIfSequenceIsValid(sequence){
    /*
    https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript
    Check if an item is part of a sequence of numbers or not.  Return missing index if not, otherwise 0.  Return 1 if invalid characters present
    */

    console.log(`\n\nFinding out if this is a sequence or not ${sequence}`);
    if(sequence==="") return 0;
    if(sequence.length===0) return 0;
    const numbers = sequence.split(" ");
    let nonNumericDigitPresent = false;
    let missingDigit = 0;
    // return 1 if non numeric digit found
    numbers.forEach(number => {
        if(!(/^\d+$/.test(number))){
            console.log(`Non-numeric character found ${number}`)
            nonNumericDigitPresent=true;
        }
    });
    if(nonNumericDigitPresent) return 1;
    // if first digit not 1 then exit as well
    if(!numbers[0]===1) {
        console.log(`first digit does not match 1`);
        return 1;
    }
    // now check for missing digits starting from 1
    const numberSequence = [0];
    let previousNumber = 0;
    numbers.some(number=>{
        if(number-previousNumber!==1){
            console.log(`previous number is ${previousNumber} and number is ${number}`)
            // missing digit is the previous number + 1
            missingDigit=previousNumber+1;
            return true;
        }
        previousNumber++;
    });
    if(missingDigit===0) {
        console.log(`Numeric sequence is in good order`);
        return 0;
    }
    else {
        console.log(`Sequence is missing digit ${missingDigit}`)
        return missingDigit;
    }
}

function findBinaryDigitSum(n){
    console.log('\n\nConverting ' + n + ' to binary and totalling the sum of the digits');
    // null cases
    if(n<=0) return 0;
    if(n==1) return 1;    
    const binary = (n>>>0).toString(2);
    let totalOfBinaryDigits = 0;
    console.log(n + ' as binary is ' + binary);
    for(let i=0;i<binary.length;i++){
        totalOfBinaryDigits+= parseInt(binary.charAt(i));
    }
    console.log('total of binary digits is ' + totalOfBinaryDigits);
    return totalOfBinaryDigits;
}

function findMostFrequentlyUsedWords(text){
    /*
    https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
    This has already been done in Java!
    Take a string, parse it into substrings and find the top 3 most common substrings
    Return an array with the top 3 substrings in it!
     */
    console.log("\n\nFinding out the top 3 most commonly used substrings in a string")
    console.log(text);
    // first eliminate all undesirable characters and replace them with a space
    var filtered = text.replace(/[^\w\s']/g,' ')
    var filtered = filtered.toLowerCase();''
    console.log(filtered);
    var arrayOfWords = filtered.split(" ");
    arrayOfWords.sort();
    const filteredArray = arrayOfWords.filter(item=>item!=''&&item!='\'');
    console.log(filteredArray);
    // use maps !  https://stackoverflow.com/questions/1144705/best-way-to-store-a-key-value-array-in-javascript/1144737
    // now get count
    const map = new Map();
    filteredArray.forEach((item)=>{
        if(map.has(item)){
            // increment
            map.set(item,map.get(item)+1);
        }
        else{
            map.set(item,1);
        }
    });
    // sort by value descending
    const mapSortedDescending = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));
    console.log(mapSortedDescending);
    const mapTopThreeItems = []
    // get first three entries
    let counter = 0;
    for(let key of mapSortedDescending.keys()){
        mapTopThreeItems.push(key);
        // only want 3 items!
        counter++;
        if(counter==3) break;
    }
    console.log(mapTopThreeItems);
    return mapTopThreeItems;
}
