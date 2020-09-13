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
CheckIfSequenceIsValid("1 2 3 4");
CheckIfSequenceIsValid("1 2 3 5");
CheckIfSequenceIsValid("1 2 a 5");
FindBinaryDigitSum(1234);


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
function CheckIfSequenceIsValid(sequence){
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
function FindBinaryDigitSum(n){
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