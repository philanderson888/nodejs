/*
https://www.codewars.com/kata/546c7f89bed2e12fb300056f/train/javascript

Find a substring with wildcards

Already completed in Java first

*/
console.log(find("Once", "Once Upon A TimeOO"));
console.log(find("Once", "haystack"));
console.log(find("midnight", "once upon a time at midnight!"));
console.log(find("_po_", "once upon a time at midnight!"));
console.log(find("___night", "once upon a time at midnight!"));
console.log(find("google", "googgoogleggggoooglxeplexhexflexmexkex"));
console.log(find("ggg", "googgoogleggggoooglxeplexhexflexmexkex"));
console.log(find("_g_o_", "googgoogleggggoooglxeplexhexflexmexkex"));
console.log(find("mex____", "xflexmexkex"));
checkIfSequenceIsValid("1 2 3 4");
checkIfSequenceIsValid("1 2 3 5");
checkIfSequenceIsValid("1 2 a 5");
findBinaryDigitSum(1234);
findMostFrequentlyUsedWords('a a a  b  c c  d d d d  e e e e e');
findMostFrequentlyUsedWords('  , e   .. ');
animal({ name: "dog", legs: 4, color: "white" });
saleHotDogs(1);
saleHotDogs(4);
saleHotDogs(5);
forLoops({ Our: "earth", is: "a", beautyful: "world" });
colorOf(255, 0, 0);
colorOf(1, 2, 3);
colorOf(10, 0, 198);
moveLeftOrRight([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "left", 1);
moveLeftOrRight([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "right", 1);
mapAndAddSymbol(["abcd", "efgh", "cdefg"]);
filterGrade([50, 60, 70, 80, 90, 100]);
mirrorImage([11, 22, 33, 33, 22, 11]);
mirrorImage([454, 86, 57, 75, 16, 88]);
mirrorImage([454, 0, 57, 0, 16, 88]);
reduceHeadsAndTails([1, 2, 3, 4, 5]);
reduceHeadsAndTails([123, 456, 789, 12, 34, 56, 78]);
arrayFlatten([[1, 2], [3, 4], [5, 6]]);
firstNonRepeatingLetter('stress');
firstNonRepeatingLetter('sTress');
firstNonRepeatingLetter('moonmen');
findInterestingNumbers(4000, []);
findInterestingNumbers(4000, []);
findInterestingNumbers(12345, []);
findInterestingNumbers(654321, []);
findInterestingNumbers(1234321, []);
findInterestingNumbers(123321, []);
findInterestingNumbers(4532, [4532]);
findInterestingNumbers(3, [4532]);
findInterestingNumbers(1336, [4532]);
findInterestingNumbers(1336, [1337, 256]);
findInterestingNumbers(12322, []);
findInterestingNumbers(3208, []);
findInterestingNumbers(1232, []);
findInterestingNumbers(67888, []);
findPrimeFactors(7775460);
findPrimeFactors(86240);
findPrimeFactors(7919);
encryptNumber(12721);


function find(needle, haystack) {

    // find all matches of initial letter
    console.log(`Finding all instances of '${needle}' in '${haystack}'`);
    const firstLetter = needle[0];
    let partialMatch = false;
    let fullMatch = false;
    let lastLetter = false;
    // iterate over haystack
    for (let i = 0; i <= (haystack.length - needle.length); i++) {
        // iterate over needle
        console.log(`\ni = ${i}, Matching letter ${haystack[i]} with needle first letter ${firstLetter}`);
        // match if wildcard or letters match
        if (haystack[i] === firstLetter || firstLetter === '_') {
            // check the rest of the letters
            console.log(`${haystack[i]} matches or first letter is a wildcard`);
            for (let j = 0; j < needle.length; j++) {
                console.log(`matching letter '${haystack[i + j]}' with '${needle[j]}'`);
                if (j === needle.length - 1) lastLetter = true;
                if (needle[j] === '_') {
                    if (lastLetter) {
                        fullMatch = true;
                        break;
                    }
                    console.log(`yes, letter match of '${haystack[i + j]}' with '${needle[j]}'`);
                    partialMatch = true;
                    continue;
                }
                if (needle[j] === haystack[i + j]) {
                    if (lastLetter) {
                        fullMatch = true;
                        break;
                    }
                    partialMatch = true;
                    continue;
                };
                // no full match found so move on to next firstLetterMatch
                partialMatch = false;
                lastLetter = false;
                break;
            }
        }
        if (fullMatch) {
            console.log(`match found at index ${i}`);
            return i;
        }
        partialMatch = false;
    }
    if (!fullMatch) {
        console.log('Match not found');
        return -1;
    }
    return -1;
}

function checkIfSequenceIsValid(sequence) {
    /*
    https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript
    Check if an item is part of a sequence of numbers or not.  Return missing index if not, otherwise 0.  Return 1 if invalid characters present
    */

    console.log(`\n\nFinding out if this is a sequence or not ${sequence}`);
    if (sequence === "") return 0;
    if (sequence.length === 0) return 0;
    const numbers = sequence.split(" ");
    let nonNumericDigitPresent = false;
    let missingDigit = 0;
    // return 1 if non numeric digit found
    numbers.forEach(number => {
        if (!(/^\d+$/.test(number))) {
            console.log(`Non-numeric character found ${number}`)
            nonNumericDigitPresent = true;
        }
    });
    if (nonNumericDigitPresent) return 1;
    // if first digit not 1 then exit as well
    if (!numbers[0] === 1) {
        console.log(`first digit does not match 1`);
        return 1;
    }
    // now check for missing digits starting from 1
    const numberSequence = [0];
    let previousNumber = 0;
    numbers.some(number => {
        if (number - previousNumber !== 1) {
            console.log(`previous number is ${previousNumber} and number is ${number}`)
            // missing digit is the previous number + 1
            missingDigit = previousNumber + 1;
            return true;
        }
        previousNumber++;
    });
    if (missingDigit === 0) {
        console.log(`Numeric sequence is in good order`);
        return 0;
    }
    else {
        console.log(`Sequence is missing digit ${missingDigit}`)
        return missingDigit;
    }
}

function findBinaryDigitSum(n) {
    console.log('\n\nConverting ' + n + ' to binary and totalling the sum of the digits');
    // null cases
    if (n <= 0) return 0;
    if (n == 1) return 1;
    const binary = (n >>> 0).toString(2);
    let totalOfBinaryDigits = 0;
    console.log(n + ' as binary is ' + binary);
    for (let i = 0; i < binary.length; i++) {
        totalOfBinaryDigits += parseInt(binary.charAt(i));
    }
    console.log('total of binary digits is ' + totalOfBinaryDigits);
    return totalOfBinaryDigits;
}

function findMostFrequentlyUsedWords(text) {
    /*
    https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
    This has already been done in Java!
    Take a string, parse it into substrings and find the top 3 most common substrings
    Return an array with the top 3 substrings in it!
     */
    console.log("\n\nFinding out the top 3 most commonly used substrings in a string")
    console.log(text);
    // first eliminate all undesirable characters and replace them with a space
    var filtered = text.replace(/[^\w\s']/g, ' ')
    var filtered = filtered.toLowerCase(); ''
    console.log(filtered);
    var arrayOfWords = filtered.split(" ");
    arrayOfWords.sort();
    const filteredArray = arrayOfWords.filter(item => item != '' && item != '\'');
    console.log(filteredArray);
    // use maps !  https://stackoverflow.com/questions/1144705/best-way-to-store-a-key-value-array-in-javascript/1144737
    // now get count
    const map = new Map();
    filteredArray.forEach((item) => {
        if (map.has(item)) {
            // increment
            map.set(item, map.get(item) + 1);
        }
        else {
            map.set(item, 1);
        }
    });
    // sort by value descending
    const mapSortedDescending = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    console.log(mapSortedDescending);
    const mapTopThreeItems = []
    // get first three entries
    let counter = 0;
    for (let key of mapSortedDescending.keys()) {
        mapTopThreeItems.push(key);
        // only want 3 items!
        counter++;
        if (counter == 3) break;
    }
    console.log(mapTopThreeItems);
    return mapTopThreeItems;
}
function animal(obj) {
    /* simple manipulation of an object */
    let output = `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
    console.log(output);
    return output;
}

function saleHotDogs(n) {
    /*
    https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
    Just use ternarys to get a result
    */
    let price = (n < 5) ? 100 : (n >= 5 && n < 10) ? 95 : (n >= 10) ? 90 : null;
    console.log(n * price);
    return n * price;
}

function forLoops(obj) {
    /*
    https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
    */
    console.log('\n\nusing for..in over this object ' + obj);
    for (let key in obj) {
        console.log(`${key}:${obj[key]}`)
    }
    var output = [];
    for (let key in obj) {
        if (key.length == 5) {
            output.push(key);
        }
        if (obj[key].length == 5) {
            output.push(obj[key])
        }
    }
    console.log(output);
    return output;
}

function colorOf(r, g, b) {
    /*
    https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
    */
    console.log(`returning hex from rgb given r,g,b ${r} ${g} ${b}`)
    if (r == 0) r = '00';
    if (g == 0) g = '00';
    if (b == 0) b = '00';
    if (r.toString(16).length == 1) r = '0' + r.toString(16);
    if (g.toString(16).length == 1) g = '0' + g.toString(16);
    if (b.toString(16).length == 1) b = '0' + b.toString(16);
    let output = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    console.log(output);
    return output;
}

function moveLeftOrRight(arr, d, n) {
    /*
    https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript
    have to move elements left or right by given number of items
    */
    array = '';
    arr.forEach(item => array += "[" + item + "],");
    console.log(`moving ${n} elements ${d} given initial array ${array}`);
    if (d != "left" && d != "right") return arr;
    if (n == 0) return arr;
    if (arr.length == 0) return arr;
    let leftmostItem = '';
    let rightmostItem = '';
    let nextItem = '';
    if (d == "left") {
        for (let i = 0; i < n; i++) {
            // want to shift from start of each array element and push() onto the end
            leftmostItem = arr[0].shift();
            console.log(`first item shifted out is ${leftmostItem}`)
            for (let j = 1; j < arr.length; j++) {
                // next have to shift the item from the next array and push it onto this array
                nextItem = arr[j].shift();
                // push this onto first array (which has index 0)
                arr[j - 1].push(nextItem);
            }
            // finally add the first item on the end!
            arr[arr.length - 1].push(leftmostItem);
            printArray(arr)
        }
    }
    // direction is right
    else {
        // just repeat the above code but move right
        for (let i = 0; i < n; i++) {
            rightmostItem = arr[arr.length - 1].pop();
            console.log(`item popped of the end of the array is ${rightmostItem}`);
            // count down this time
            for (let j = arr.length - 2; j >= 0; j--) {
                nextItem = arr[j].pop();
                arr[j + 1].unshift(nextItem);
            }
            // finally add the last item on at the beginning
            arr[0].unshift(rightmostItem);
            printArray(arr);
        }
    }
    return arr;
}
function printArray(arr) {
    array = '';
    arr.forEach(item => array += "[" + item + "],");
    console.log(`array is ${array}`);
}

function mapAndAddSymbol(arr) {
    /*
    https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript
    pass in array of strings
    insert the | symbol in the middle of each string abcd=ab|cd and abc = a|c
    */
    console.log(`\n\nentering the | symbol into each element of the array [${arr}]`);
    let output = arr.map(item => {
        // if even string
        if (item.length % 2 == 0) {
            firstHalf = item.slice(0, item.length / 2);
            lastHalf = item.slice(item.length / 2);
            item = [firstHalf, '|', lastHalf].join('');
            console.log(item);
            return item;
        }
        // odd string
        else {
            firstHalf = item.slice(0, item.length / 2);
            lastHalf = item.slice(item.length / 2 + 1);
            item = [firstHalf, '|', lastHalf].join('');
            console.log(item);
            return item;
        }
    });
    console.log(output);
    return output;
}

function filterGrade(scores) {
    /*
    https://www.codewars.com/kata/573023c81add650b84000429/train/javascript
   filters an array and only maps the relevant scores
    */
    var output = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 }
    scores.forEach(score => {
        if (score == 100) output.S += 1;
        else if (score < 100 && score >= 90) output.A += 1;
        else if (score < 90 && score >= 80) output.B += 1;
        else if (score < 80 && score >= 60) output.C += 1;
        else if (score < 60 && score >= 0) output.D += 1;
        else if (score = -1) output.X += 1;
    })
    console.log(output);
    return output;

}

function mirrorImage(arr) {
    /*
    https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript
    search consecutive pairs to see if they are a mirror image of each other and return that pair if so,
    otherwise array with -1 in it
    */
    console.log(`\n\nensuring a pair of items exist such that one is a mirror of the other in array [${arr}]`)
    // null cases
    if (arr.some(item => item === -1)) return [-1, -1];
    let mirror1 = 0;
    let mirror2 = 0;
    let match = false;
    for (let i = 1; i < arr.length; i++) {
        mirror1 = arr[i - 1];
        mirror2 = arr[i];
        mirror1string = mirror1.toString();
        mirror2string = mirror2.toString().split('').reverse().join('');
        match = (mirror1string === mirror2string)
        console.log(`two mirror items are ${mirror1string} and ${mirror2string} and do they match? ${match}`)
        if (match) break;
    }
    let output = [];
    if (match) {
        output.push(mirror1);
        output.push(mirror2);
    }
    else {
        output.push(-1);
        output.push(-1);
    }
    console.log(`output is ${output}`)
    return output;
}

function reduceHeadsAndTails(arr) {
    /*
    https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript
    given an array of numbers, remove the first and last digits and create a new array, and so on until a final number
    is reached
    */
    console.log(`\n\ntaking the first and last digits of each array element, adding then getting the joint product given array ${arr}`);
    const sums = [];
    for (let i = 1; i < arr.length; i++) {
        let a = arr[i - 1];
        let b = arr[i];
        let lastLetter = a.toString()[a.toString().length - 1];
        let firstLetter = b.toString()[0];
        let sum = parseInt(lastLetter) + parseInt(firstLetter);
        console.log(`a is ${a} and b is ${b}, lastletter is ${lastLetter}, first letter ${firstLetter} and sum ${sum}`)
        sums.push(sum);
    }
    console.log(sums);
    const product = sums.reduce((a, b) => a * b);
    console.log(`product is ${product}`)
    return product;
}

function arrayFlatten(arr) {
    /*
    https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
    Flatten the array then sort descending using the '>' character in between element
    to return a string
    */
    // flatten to 1D array

    let printArray = '';
    arr.forEach(item => printArray += (`[${item}],`))
    console.log(`\n\nFlatten this array of arrays then sort by order ${printArray}`);
    var flatten = [].concat(...arr);
    console.log(`Array flattened but not sorted ${flatten}`);
    flatten.sort((a, b) => b - a);
    console.log(`Now sorted ${flatten}`);
    // now add '>' between elements
    var output = flatten.join('>');
    console.log(`flattened, sorted, now adding '>' character ${output}`)
    return output
}

function firstNonRepeatingLetter(s) {
    /*
    Date: 3 October 2020
    https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
    Given string s find the first letter which does not repeat
    */
    console.log(`\n\nfinding first letter which is unique in string ${s}`)
    // convert to lower case
    const lower = s.toLowerCase();
    let uniqueLetter = '';
    for (let i = 0; i < lower.length; i++) {
        let match = false;
        let letter = lower[i];
        console.log(`checking letter ${letter}`);
        for (let j = 0; j < lower.length; j++) {
            if (i != j) {
                console.log(`checking ${letter} against ${lower[j]}`);
                if (lower[j] == letter) {
                    match = true;
                    break;
                }
            }
        }
        if (match === false) {
            // letter is unique so break and get case of letter from original string
            uniqueLetter = s[i];
            break;
        }
    }
    console.log(`unique letter is ${uniqueLetter}`)
    return uniqueLetter;
}

function findInterestingNumbers(number, awesomePhrases) {
    /*
    3 October 2020 - Philip Anderson
    https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
    a number is interesting if 
    - single digit followed by zeros
    */
    console.log(`\n\nfinding intesting numbers a) all zeros? b) same digits? c) sequential? in ${number}`)
    // null cases
    if (number < 98) return 0;
    if ((number == 98) || (number == 99)) return 1;
    // all zeros
    let allZeros = true
    for (let i = 1; i < number.toString().length; i++) {
        //  console.log(`checking for zeros - digit ${number.toString()[i]}`)
        if (number.toString()[i] === '0') {
            continue;
        }
        allZeros = false;
        break;
    }
    if (allZeros) {
        console.log(`All zeros found in number ${number}`)
        return 2;
    }
    // next case - look at every digit being the same
    const firstDigit = number.toString()[0];
    const sameDigits = number.toString().split('').every(digit => digit === firstDigit);
    if (sameDigits) {
        console.log(`All digits the same ${number}`);
        return 2;
    }
    // check out sequential digits
    const firstNumber = parseInt(firstDigit);
    console.log(`first digit in ${number} is ${firstNumber}`)
    let sequentialAscending = true;
    for (let i = 1; i < number.toString().length; i++) {
        if (parseInt(number.toString()[i]) === firstNumber + i) {
            continue;
        }
        if (parseInt(number.toString()[i]) === 0 && parseInt(number.toString()[i - 1]) === 9) {
            // special case of sequential number being in order ...8,9,0 which is correct
            continue;
        }
        else {
            sequentialAscending = false;
        }
    }
    if (sequentialAscending) {
        console.log(`number is sequential ascending ${number}`);
        return 2;
    }
    let sequentialDescending = true;
    for (let i = 1; i < number.toString().length; i++) {
        if (parseInt(number.toString()[i]) === firstNumber - i) {
            continue;
        }
        else {
            sequentialDescending = false;
        }
    }
    if (sequentialDescending) {
        console.log(`number is sequential descending ${number}`);
        return 2;
    }


    console.log(`checking number ${number} to see if it's a palindrome`)
    let palindrome = true;
    // check first and last digits, and so on, into the middle
    for (let i = 0; i < number.toString().length / 2; i++) {
        const firstNum = number.toString()[i];
        console.log(`first number is ${firstNum}`);
        let lastNum = number.toString()[number.toString().length - 1 - i];
        console.log(`last number is ${lastNum}`);
        console.log(`palindrome check - i = ${i}, check ${firstNum} against ${lastNum}`)
        if (firstNum === lastNum) {
            continue;
        }
        palindrome = false;
        break;
    }
    if (palindrome) {
        console.log(`number ${number} is a palindrome`)
        return 2;
    }

    //  do they match a phrase in the awesome array!
    console.log(`now checking for a match of number ${number} in array ${awesomePhrases} of length ${awesomePhrases.length}`)
    const matchAPhrase = awesomePhrases.some(item => item === number)
    if (matchAPhrase) {
        console.log(`number ${number} matches a phrase in array ${awesomePhrases}`)
        return 2;
    }
    // check for partial matches
    const partialMatch = awesomePhrases.some(item => Math.abs(number - item) <= 2);
    if (partialMatch) {
        console.log(`number ${number} has a partial match in array ${awesomePhrases}`);
        return 1;
    }


    console.log(`looking for a palindrome partial match within 2 numbers - from ${number - 2} to ${number + 2}`)
    for (let close = number - 2; close <= number + 2; close++) {
        // don't check the exact number as that has been done
        let partialPalindrome = true;
        if (close !== number) {
            // now for each number check if it is a palindrome.  
            for (let i = 0; i < close.toString().length / 2; i++) {
                const firstNum = close.toString()[i];
                const lastNum = close.toString()[close.toString().length - 1 - i];
                console.log(`palindrome check ${i} on first ${firstNum} and last ${lastNum} `)
                if (firstNum === lastNum) {
                    continue;
                }
                partialPalindrome = false;
                break;
            }
            if (partialPalindrome) {
                console.log(`partial palindrome has been found in number ${close} nearly matching ${number}`)
                return 1;
            }
        }
    }

    // now have to check out ascending or descending numbers within 2 of the exact number
    for (let close = number - 2; close <= number + 2; close++) {
        console.log(`checking ${close} for a partial match for ascending numbers`)
        let partialAscendingMatch = true;
        // don't check the exact number as it's been done
        if (close !== number) {
            for (let i = 0; i < close.toString().length; i++) {
                let a = parseInt(close.toString()[i]);
                let b = firstNumber + i;
                if (b === 10) b = 0;
                console.log(`checking ${a} against ${b} for a match in ascending numbers partially`)
                if (a === b) {
                    continue;
                }
                // special case of 9 then 0
                if (parseInt(close.toString()[i] === 0) && parseInt(close.toString()[i - 1] === 9)) {
                    continue;
                }
                else {
                    partialAscendingMatch = false;
                }
            }
            if (partialAscendingMatch) {
                console.log(`partial ascending match has been found in ${number}`)
                return 1;
            }
        }
    }
    // repeat this for descending sequences
    for (let close = number - 2; close <= number + 2; close++) {
        console.log(`checking ${close} for a partial match on descending numbers`);
        let partialDescendingMatch = true;
        if (close !== number) {
            for (let i = 0; i < close.toString().length; i++) {
                let a = parseInt(close.toString()[i]);
                let b = parseInt(firstNumber - i);
                console.log(`comparing ${parseInt(close.toString()[i])} to ${firstNumber - i}`)
                if (a === b) {
                    continue;
                }
                // special case of 3.2.1.0
                if (parseInt(close.toString()[i] === 0) && parseInt(close.toString()[i - 1] === 1)) {
                    continue;
                }
                partialDescendingMatch = false;
            }
            if (partialDescendingMatch) {
                console.log(`partial descending match has been found in ${number}`)
                return 1;
            }
        }
    }
    return 0;
}

function findPrimeFactors(n){
    /*
    4 October 2020
    https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript
    Output prime factors in form "(p1**n1)(p2**n2)" eg 86240 = "(2**5)(5)(7**2)(11)"
    */
    console.log(`\n\nFinding prime factors of ${n}`);
    let number = n;
    let divisor = 2;
    const output = [];
    while(divisor<=n/2+1){
        if(number%divisor==0){
            output.push(divisor);
            number = number / divisor;
        }
        else{
            divisor++;
        }
    }
    // case of prime number
    if(number===n) output.push(n);
    console.log(`prime numbers are ${output}`);
    // now output as pairs
    const outputPairs = {};
    output.forEach(item=>{
        if(item in outputPairs){
            outputPairs[item]+=1;
        }
        else{
            outputPairs[item]=1;
        }
    });
    console.log(`output pairs are`);
    console.log(outputPairs);
    // create output string
    let outputString = '';
    for(const[key,value] of Object.entries(outputPairs)){
        if(value===1){
            outputString+=`(${key})`;
        }
        else{
            outputString += `(${key}**${value})`
        }
    }
    console.log(`output string is ${outputString}`);
    return outputString;

}

function encryptNumber(inputNumber) {

    /*

    given input string of digits only encrypt it in this fashion

    1. turn the string into an array of characters
    2. for each character in the array, parse the rest of the array and find out how many instances of that same digit exist (including itself)
    3. create a mapping of that digit to the number of instances of that digit
    4. the encrypted output is the digit followed by the number of instances of that digit
    5. return the encrypted string
    6. example input 12721 creates the interim mapping 22111 and the output 12 22 71 21 11
    */
    const inputString = inputNumber.toString();
    console.log(`\n\nEncrypting string ${inputString}`);
    const inputArray = inputString.split('');
    const outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        const digit = inputString[i];
        //console.log(`\n\nFinding out how many instances of ${digit} exist in the string`);
        let counter = 0;
        for (let j = i; j < inputString.length; j++) {
            if (inputString[j] === digit) {
                counter++;
            }
        }
        outputArray.push(digit + counter);
    }
    const outputString = outputArray.join(' ');
    console.log(`\n\nEncrypted output string is ${outputString}`);
}