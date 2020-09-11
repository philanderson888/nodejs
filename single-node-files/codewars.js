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