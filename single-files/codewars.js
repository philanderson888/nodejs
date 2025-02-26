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
console.log(`2020 ... prep for coding tests`);
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
console.log(`november 2024 ... prep for coding tests`);
encryptNumber(12721);
getArrayOfMismatches('abdgggda', 'abdggda');
getServerLoad([1,0,0,1]);
findMaxSubstrings('abcdeab', 'ab'); 
taskScheduler()
comparePoints([1,2,3],[3,2,1]);
const animal1 = [0, 3];
const animal2 = [4, 2];
circusShow(animal1[0], animal1[1], animal2[0], animal2[1]);
const factorArray1 = [2,6]
const factorArray2 = [24, 36]
findFactors(factorArray1, factorArray2);
const factorArray3 = [2, 4];
const factorArray4 = [16, 32, 96];
findFactors(factorArray3, factorArray4);
fizzBuzz(15);
validateISBN('9780306406');
calculateMeanSquareDifference([1,2,3,4,5],[1,2,3,4,5]);
calculateMeanSquareDifference([1,2,3,4,5],[1,2,3,4,6]);
justifyText('The quick brown fox jumps over the lazy dog.', 10); 
justifyText('a quick a a quicks a a quicker a brown a fox a jumps a over a log a wow a amazing.', 10);
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
justifyText('123 45 6', 7)
justifyText(LIPSUM, 30);
amazon1();
const deploymentData = [{"deployment_id": "d-12345678ab", "status": "Success"},{"deployment_id": "d-09876543cd", "status": "Fail"}]
amazon2(deploymentData);


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

function getArrayOfMismatches(string1, string2) {
    
    console.log(` `);
    console.log(`\n\nfind the indexes of the missing characters`);

    /*

    string 1 is a substring of string 2.  find the index of the missing character.  
    If that missing character is a duplicate in a sequence then get all the indexes of that character, in order.
      
    eg string2 is abdgggda
       string1 is abdgg da
       so any item in string 2 at index 3, 4 or 5 can be removed to satisfy the result
       so return array [3,4,5]
   */    
  
    
    const arrayOfMismatches = [];
    let mismatchedCharacter = ''; 
    let mismatchedCharacterIndex = -1;
    let mismatchFound = false;
    
    for (let index = 0; index < string1.length; index++) {
        const characterString1 = string1[index]
        const characterString2 = string2[index]
        
        if (mismatchFound) {
            if (characterString1 === mismatchedCharacter) {
               console.log(`mismatched character found at index ${index} and it is ${mismatchedCharacter}`);
               arrayOfMismatches.push(index);
               continue;
            } else {
               break; // we are done
            }
        }
        
        if (characterString1 === characterString2) {
            console.log(`character ${characterString1} matches in both strings at index ${index}`);
           continue;
        } else {
            console.log(`mismatched character found at index ${index} and it is ${characterString1}`);
            mismatchFound = true;
            mismatchedCharacter = characterString1;
            mismatchedCharacterIndex = index;
            break;
        }
    }

    // now we have found the first mismatched character
    console.log(' ');
    console.log('... now checking for further mismatches ...');
    if (mismatchFound) {
        for (let index = mismatchedCharacterIndex; index >= 0; index--) {
            const characterString1 = string1[index]
            const characterString2 = string2[index]
            if (characterString1 === mismatchedCharacter) {
                console.log(`mismatched character found at index ${index} and it is ${mismatchedCharacter}`);
                arrayOfMismatches.push(index);
            } else {
                break;
            }
        }
    }
    
    if (arrayOfMismatches.length === 0) {
       arrayOfMismatches.push(-1);
       console.log(' no matches found' );
    } else {
        console.log ('we have found array of matches ... ')
        console.log(arrayOfMismatches);
        console.log(' ');
        console.log('... sorting array of matches ...');
        arrayOfMismatches.sort();
        console.log(arrayOfMismatches);
    }
      
    return arrayOfMismatches



}



function getServerLoad(serverLoadInput) {

    console.log(` `);
    console.log(`============================================================`);
    console.log(`               server load                                  `);
    console.log(`============================================================`);
    
    /*

    // get array of indices where server is under maximum load
    // binary array
    // length n
    // 1 means heavy load
    // 0 normal load
    // circular topology
    // can swap any 2 servers in time period of 1 minute (one iteration)
    // how many iterations does it take to group all the heavy servers together?

    // example
    const serverLoad1 = [1, 0, 1, 0, 1, 0, 1];
    const doubleArray = [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];
    const move1       = [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1];
    const move2       = [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1];

    // we have 2 moves and get our output of 4 consecutive servers under high load

    */

    const serverLoad1 = [1, 0, 1, 0, 1, 0, 1];
    const serverLoad2 = [1, 0, 0, 1];
    const serverLoad3 = [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];

    const option = 3;

    let serverLoad = [];

    if (option === 1) {
        serverLoad = serverLoad1;
    } else if (option === 2) {
        serverLoad = serverLoad2;
    } else if (option === 3) {
        serverLoad = serverLoad3;
    }

    console.log(` `);
    console.log(`input server load array is`)
    console.log(serverLoad);
              

    const highLoadServerCount = serverLoad.reduce((acc, item) => acc + item, 0);
    console.log(`\nnumber of servers is ${serverLoad.length}`); 
    console.log(`number of servers under high load is ${highLoadServerCount}`);
        
   
    console.log(`\nhandle circular case by doubling the original array`);
    const doubleArray = [...serverLoad, ...serverLoad];
    console.log(doubleArray);  

    const maximumLoadArray = [];
    
    for (let i = 0; i < doubleArray.length; i++) {
        if (doubleArray[i] === 1) {
            maximumLoadArray.push(i);
        }
    }

    console.log(`\narray of indexes in double array, where server is high load is ... `)
    console.log(maximumLoadArray);


    console.log(`\nget the consecutive server count in the double array`);

    consecutiveCounts = [];
    consecutiveCount = 0;
    let isHighLoad = false;
    doubleArray.forEach((item, index) => {
        if (isHighLoad && item === 0) {
            isHighLoad = false;
            consecutiveCounts.push(consecutiveCount);
            consecutiveCount = 0;
        }
        if (item === 1) {
            isHighLoad = true;
            consecutiveCount++;
        } 
    });

    console.log(`\n${consecutiveCounts.length} groups of consecutive servers under high load`);
    console.log(consecutiveCounts);

    console.log(`\nget the max number of consecutive servers under high load`);
    maxConsecutiveCount = Math.max(...consecutiveCounts);   
    console.log(`\n${maxConsecutiveCount} servers under high load`);    

    console.log(`\nso the number of swaps will equal highLoadServerCount - initialConsecutiveHighLoadServerCount`);
    const numberOfSwaps = highLoadServerCount - maxConsecutiveCount;
    console.log(`high server count ${highLoadServerCount} - max consecutive server high load count ${maxConsecutiveCount} = ${numberOfSwaps}`);
    console.log(`\nnumber of swaps required to group all high load servers together is ${numberOfSwaps}`);

    return numberOfSwaps;

}




function findMaxSubstrings(mainStringIn, subStringIn) {
     
    console.log(` `);
    console.log(`============================================================`);
    console.log(`               find max substrings                          `);
    console.log(`============================================================`);


    /*

    task is to find the maximum number of substrings which can be made from a string consisting of letters and placeholder characters
    which can represent any letter.

    the string can be shuffled in any order to make as many substrings as possible.

    example ... string of a??gz?b? and substring of ab ... we can created ab and ?? and ?? so 3 substrings 
    ... so return 3

    strategy
    1. create an array of characters only including substring characters and placeholders
    2. sort the array
    3. count the number of each character
    4. find the number of complete substrings
    5. find the number of characters remaining
    6. find the number of placeholders remaining
    7. find the number of complete substrings remaining
    8. find the number of placeholders required to complete a full substring
    9. find the number of placeholders remaining after removing placeholders required
    10. find the number of complete substrings after removing placeholders

    */

    const mainString1 = 'a??gz?b?';
    const mainString2 = 'abcd???????eabc?????'; 
    const mainString3 = 'abcd???????eabca?????'; 
    const mainString4 = 'abcd???????eabcaaaa?????'; 
    const subString = 'abc';

    const option = 4;

    let mainString = '';
    if (option === 1) {
        mainString = mainString1;
    } else if (option === 2) {
        mainString = mainString2;
    } else if (option === 3) {
        mainString = mainString3;
    } else if (option === 4) {
        mainString = mainString4;
    }

    console.log(`\nmain string is ${mainString}`);
    const subStringLength = subString.length;
    console.log(`sub string is ${subString} of length ${subStringLength}`);

    let placeholders = mainString.split('').filter(item => item === '?');
    let placeholdersCount = placeholders.length;
    console.log(`\nplaceholders count is ${placeholdersCount}`);

    console.log(`create an array from the input string but omit characters not in the sub string`);
    const mainStringArray = mainString.split('').filter(item => subString.includes(item));
    console.log(`main string array is`);
    console.log(mainStringArray);

    console.log(`\n... now sort the array ...`);
    mainStringArray.sort();
    console.log(mainStringArray);

    console.log(`\n... now get a count of each letter`);
    const mainStringArrayCount = {};
    mainStringArray.forEach(item => {
        if (item in mainStringArrayCount) {
            mainStringArrayCount[item] += 1;
        }
        else {
            mainStringArrayCount[item] = 1;
        }
    });

    console.log(`\nmain string letter count is`);
    console.log(mainStringArrayCount);

    const completeSubstringCount = Math.min(...Object.values(mainStringArrayCount));
    console.log(`\ncomplete substring count is ${completeSubstringCount}`);

    let charactersRemainingObject = {};
    for (const [key, value] of Object.entries(mainStringArrayCount)) {
        if (value > completeSubstringCount) {
            charactersRemainingObject[key] = value - completeSubstringCount;
        }
    }


    let charactersRemainingArray = Object.keys(charactersRemainingObject);
    let charactersRemainingCount = charactersRemainingArray.length;
    let placeholdersRemaining = placeholdersCount;
    let totalSubstrings = completeSubstringCount;

    while (charactersRemainingCount > 0) {

        console.log(`\n ... remove complete sets of matched characters ...`);
        console.log(`... characters remaining object ... `);
        console.log(charactersRemainingObject);

        charactersRemainingArray = Object.keys(charactersRemainingObject);
        charactersRemainingCount = charactersRemainingArray.length;
        console.log(`\ncount of characters remaining is ${charactersRemainingCount} which are letters ${charactersRemainingArray}`);

        console.log(`\nnow we need to determine if there are enough placeholders to complete a full substring`);
        const placeholdersRequired = subStringLength - charactersRemainingCount;
        console.log(`\nplaceholders required to complete a full substring is ${placeholdersRequired}`);

        placeholdersRemaining = placeholdersRemaining - placeholdersRequired;
        console.log(`\nplaceholders remaining after removing placeholders required is ${placeholdersRemaining}`);

        if (placeholdersRemaining < 0) {
            console.log(`\nnot enough placeholders to complete a full substring`);
            break;
        }

        totalSubstrings = totalSubstrings + 1;
        console.log(`\nthis would make for ${totalSubstrings} total substrings (complete and partial)`);

        console.log(`\nnow have to remove the characters matched with the placeholders`);
        let charactersRemainingObjectTemp = {};

        for (const [key, value] of Object.entries(charactersRemainingObject)) {
            if (value >=2 ) {
                charactersRemainingObjectTemp[key] = value - 1;
            }
        }

        charactersRemainingObject = charactersRemainingObjectTemp;

        console.log(`\ncharacters remaining object after removing placeholders is`);
        console.log(charactersRemainingObject);

        charactersRemainingArray = Object.keys(charactersRemainingObject);
        charactersRemainingCount = charactersRemainingArray.length;
        console.log(`\ncount of characters remaining is ${charactersRemainingCount} which are letters ${charactersRemainingArray}`);

        if (charactersRemainingCount === 0) {
            console.log(`\nno characters remaining`);
        } else {
            console.log(`\ncharacters remaining after removing placeholders are`);
            console.log(charactersRemainingObject);
        }
    }

    console.log(`\n\nthe number of substrings generated so far is ${totalSubstrings}`);

    console.log(`and we have no real characters left to match with placeholders`);

    console.log(`\nbut how many placeholders do we have left?`);
    console.log(`placeholders remaining is ${placeholdersRemaining}`);

    console.log(`\n... now we have to determine how many full substrings of length ${subStringLength} with the remaining ${placeholdersRemaining} placeholders ...`);

    const numbersOfCompleteSubstringsLeftToCreate = Math.floor(placeholdersRemaining / subStringLength);

    if (numbersOfCompleteSubstringsLeftToCreate > 0) {
        console.log(`\nwe can create ${numbersOfCompleteSubstringsLeftToCreate} complete substrings`);
        totalSubstrings = totalSubstrings + numbersOfCompleteSubstringsLeftToCreate;
        console.log(`\ntotal substrings is now ${totalSubstrings}`);
    } else {
        console.log(`\nnot enough placeholders to create a full substring`);
    }

}


function taskScheduler() {

    /*
    task complexity
    given a set of tasks with a complexity, and a difference between tasks, find the maximum number of tasks that can be scheduled
    eg n=7 tasks, k=2, complexity [2, 1, 4, 3, 6, 5, 8] ... output is 4
    steps
    - subtract the complexity of the first task from all the other tasks
    - remove any negative values
    - remove any values which are not divisible by k
    - sort the array  
    - remove duplicates
    - left with [0,2,4,6] (after subtracting 2 the intial value ... 
    - so answer is 4
    */

    console.log(`============================================================`);
    console.log(`               task scheduler                                `);
    console.log(`============================================================`);
  
    const taskComplexity1 = [2, 1, 4, 3, 6, 5, 8];
    const taskComplexity2 = [5, 4, 2];
    const taskComplexity = taskComplexity1;
    const k = 2;
    
    const numberOfTasks = taskComplexity.length;
    console.log(`number of tasks to complete is ${numberOfTasks}`);
    
    if (numberOfTasks === 1 ){
        return 1;
    }
    
    console.log(`task complexities are ${taskComplexity}`);
    console.log(`initial task complexity is ${taskComplexity[0]}`);
    console.log(`k is ${k}`);
    console.log(` `);
    console.log(`... now subtract the first task complexity from all the other tasks ...`);
    const tasksWithInitialComplexityRemoved = taskComplexity.map(item => item - taskComplexity[0]);
    console.log(`tasks with initial complexity removed are ${tasksWithInitialComplexityRemoved}`);
    console.log(` `);
    console.log(`... now remove any negative values ...`);
    const positiveTaskComplexity = tasksWithInitialComplexityRemoved.filter(item => item >= 0);
    console.log(`positive task complexity is ${positiveTaskComplexity}`);
    console.log(` `);
    console.log(`... now remove any values which are not divisible by k ...`);
    const taskComplexityDivisibleByK = positiveTaskComplexity.filter(item => item % k === 0);
    console.log(`task complexity divisible by k is ${taskComplexityDivisibleByK}`);
    console.log(` `);
    console.log(`... now sort the array ...`);
    taskComplexityDivisibleByK.sort(function(a, b){return a - b});
    console.log(`sorted task complexity is ${taskComplexityDivisibleByK}`);
    console.log(` `);
    console.log(`... now remove duplicates ...`);
    const uniqueTaskComplexity = [...new Set(taskComplexityDivisibleByK)];
    console.log(`unique task complexity is ${uniqueTaskComplexity}`);
    console.log(` `);
    console.log(`... now count the number of scheduled tasks ...`);
    const numberOfScheduledTasks = uniqueTaskComplexity.length;
    console.log(`number of scheduled tasks is ${numberOfScheduledTasks}`);

    return numberOfScheduledTasks;
    

}



function comparePoints(pointsA, pointsB) {

    /*

    we have two sets of points
    we compare the points in each set and award a point to the person with the highest score
    we return the total points for each person
    eg     a = [1, 2, 3]       b = [3, 2, 1]    output = [1, 1]
    */

    let scoreA = 0;
    let scoreB = 0;

    for (let i = 0; i < pointsA.length; i++) {
        if (pointsA[i] > pointsB[i]) {
            scoreA++;
        } else if (pointsA[i] < pointsB[i]) {
            scoreB++;
        }
    }

    console.log(`\n\npoints for person A are ${scoreA}`);
    console.log(`points for person B are ${scoreB}`);

    if (scoreA > scoreB) {
        console.log(`person A wins`);
    } else if (scoreA < scoreB) {
        console.log(`person B wins`);
    } else {
        console.log(`it's a draw`);
    }

    return [scoreA, scoreB];

}


function circusShow(initialPositionAnimal1, speedAnimal1, initialPositionAnimal2, speedAnimal2) {

    /*

    circus show
    two kangaroos have initial position x and speed of each jump v so input data is [x1, v1] and [x2, v2]
    initial position time t = 0 the are at [x1, x2]
    after time t they are at [x1 + v1*t, x2 + v2*t]
    we have to determine if at any point on the journey they are at the same position ie x1 + v1*t = x2 + v2*t for some t

    so mathematically x1 + v1*t = x2 + v2*t 
    separate out t and we get t = (x2 - x1) / (v1 - v2) has to be an integer

    */

    console.log(`============================================================`);
    console.log(`               circus show                                  `);
    console.log(`============================================================`);

    const x1 = initialPositionAnimal1;
    const v1 = speedAnimal1;
    const x2 = initialPositionAnimal2;
    const v2 = speedAnimal2;

    console.log(`animal 1 has initial position ${x1} and speed ${v1}`);
    console.log(`animal 2 has initial position ${x2} and speed ${v2}`);

    console.log(`\n... now determine if they will meet ...`);

    let willMeet = false;
    let willMeetTime = -1;
    let willMeetPosition = -1;

    if (v1 === v2) {
        if (x1 === x2) {
            willMeet = true;
        }
    } else {
        const t = (x2 - x1) / (v1 - v2);
        if (t >= 0 && Number.isInteger(t)) {
            willMeet = true;
            willMeetTime = t;
        }
    }

    if (willMeet) {
        willMeetPosition = x1 + v1 * willMeetTime;
        console.log(`they will meet at time ${willMeetTime} at position ${willMeetPosition}`);
    } else {
        console.log(`they will not meet`);
    }

    return willMeet;
    
}

function findFactors(factorArray1, factorArray2) {

    /*
    given arrays
    a) the elements of the first array are all factors of the integer n
    b) the integer n is a factor of all elements of the second array
    */

    console.log(`============================================================`);
    console.log(`               find factors                                 `);
    console.log(`============================================================`);

    console.log(`first array is ${factorArray1}`);
    console.log(`second array is ${factorArray2}`);

    console.log(`\n... now find the factors ...`);

    const factors = [];

    const a = factorArray1;
    const b = factorArray2;

    const maxA = Math.max(...a);
    const minB = Math.min(...b);

    console.log(`max of a is ${maxA}`);
    console.log(`min of b is ${minB}`);

    for (let i = maxA; i <= minB; i++) {
        if (a.every(item => i % item === 0) && b.every(item => item % i === 0)) {
            factors.push(i);
        }
    }

    const factorsFound = factors.length;

    if (factorsFound === 0) {
        console.log(`no factors found`);
    } else {
        console.log(`${factorsFound} factors found are ${factors}`);
    }

    return factorsFound;

}

function fizzBuzz(n) {

    console.log(`============================================================`);
    console.log(`               fizz buzz                                    `);
    console.log(`============================================================`);

    console.log(`... now output fizz buzz for numbers up to ${n} ...`);

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`fizz buzz`);
        } else if (i % 3 === 0) {
            console.log(`fizz`);
        } else if (i % 5 === 0) {
            console.log(`buzz`);
        } else {
            console.log(i);
        }
    }

}

function validateISBN(isbn) {

    console.log(`============================================================`);
    console.log(`                  validate ISBN                             `);      
    console.log(`============================================================`);

    console.log(`... is ${isbn} a valid ISBN number ? ...`);
    console.log(`sum of the digits multiplied by their position, then take modulus 11, is 0`);

    /*
        ISBN is 10 digit string with the last digit being a number or X

        the ISBN is valid if the sum of the digits  multiplied by their position, then take modulus 11, is 0

        eg 0-306-40615-2 is valid

        because 0*1 + 3*2 + 0*3 + 6*4 + 4*5 + 0*6 + 6*7 + 1*8 + 5*9 + 2*10 = 6 + 6 + 24 + 20 + 0 + 42 + 8 + 45 + 18 + 20 = 189 which is divisible by 11
    */

          
  let isValid = false;

  // fail fast 

  // if length is not 10 digits then fail

  if (isbn.length !== 10) {
    return isValid;
  }

  // if X count is not 0 or 1 then fail

  if (isbn.split('').filter(item => item === 'X').length > 1) {
    return isValid;
  }

  // if X is in any other position than the last position then fail

  if (isbn.indexOf('X') !== 9 && isbn.indexOf('X') !== -1) {
      return isValid;
  }

  let total = 0;
  
  for (let i = 0; i < isbn.length; i++) {
    const place = i + 1;
    let value = isbn[i];

    if (value === 'X') {
      value = 10;
    }

    total += value * place;

  }

  const isDivisibleBy11 = total % 11 === 0;

  if (isDivisibleBy11) {
    isValid = true;
  }

  console.log(`ISBN number ${isbn} is ${isValid ? 'valid' : 'invalid'}`);

  return isValid;

}

function calculateMeanSquareDifference(array1, array2) {
    
    /*

        accept 2 integer arrays of equal length

        conpare the value in one array with the corresponding member in the other array

        get the difference between the two values, then square it 

        return the average of all the squared differences

    */

    const arrayLength = array1.length

    console.log(`============================================================`);
    console.log(`               mean square difference                       `);
    console.log(`============================================================`);

    console.log(`array 1 is ${array1}`);
    console.log(`array 2 is ${array2}`);

    let sumOfDifferencesSquared = 0;

    for (let i = 0; i < arrayLength; i++) {
        const difference = array1[i] - array2[i];
        const differenceSquared = difference * difference;
        sumOfDifferencesSquared += differenceSquared;
    }

    const meanSquareDifference = sumOfDifferencesSquared / arrayLength;

    console.log(`mean square difference is ${meanSquareDifference}`);

    return meanSquareDifference;

}

function justifyText(text, width) {

    /* 
    
    single string input 

    given width 

    separate into an array of words

    use \n to seaprate lines

    last line should not terminate with \n

    max word length will not exceed line length

    all lines should end with a word and not a space 

    justification should use spaces to fill in the gaps between words, evenly distributed, with any smaller spaces at the end

    last line should not be justified 

    line with one word will have no gaps

    */

    console.log(`============================================================`);
    console.log(`               justify text                                 `);
    console.log(`============================================================`);

    console.log(`justify text to width ${width}`);

    const words = text.split(' ');
    console.log(`words are ${words}`);

    // single word case

    if (words.length === 1) {
        console.log(`single word case`);
        return text;
    }

    //let line = '';
    //let lines = [];

    /*

    for (let i = 0; i < words.length; i++) {
        
        const newLine = line + words[i] + ' ';
        console.log(`\nnew line is ${newLine}`);

        console.log(`line length is ${newLine.length}`);

        if (newLine.length > width) {
            lines.push(line);
            line = words[i] + ' ';
        } else {
            line = newLine;
        }
    }

    lines.push(line);

    console.log(`lines are`);
    console.log(lines);

    */

    // try this again
    let lines2 = [];
    let line2 = '';
    let cumulativeWordsWithSpaces = '';

    for (let i = 0; i < words.length; i++) {

        line2 = cumulativeWordsWithSpaces + words[i];

        console.log(`\nline is ${line2} with length ${line2.length}`);

        if (line2.length > width) {
            lines2.push(cumulativeWordsWithSpaces);
            line2 = '';
            cumulativeWordsWithSpaces = words[i] + ' ';
            continue;
        }

        cumulativeWordsWithSpaces += words[i] + ' ';
        console.log(`cumulative words with spaces is ${cumulativeWordsWithSpaces}`);

    }

    // last line
    lines2.push(cumulativeWordsWithSpaces.trim());

    console.log(`lines are`);
    console.log(lines2);

    let justifiedLines = lines2.map(item => {
        const itemTrimmed = item.trim();
        console.log(`\n\njustifying line ${itemTrimmed}`);
        const words = item.trim().split(' ');
        console.log(`words are ${words}`);
        const totalWords = words.length;
        console.log(`total words are ${totalWords}`);
        const rawLength = itemTrimmed.length;
        console.log(`raw length is ${rawLength}`);
        const totalSpaces = width - itemTrimmed.length;
        console.log(`total spaces are ${totalSpaces}`);
        const spacesPerWord = Math.floor(totalSpaces / (totalWords - 1));
        console.log(`spaces per word are ${spacesPerWord}`);
        const extraSpaces = totalSpaces % (totalWords - 1);
        console.log(`extra spaces are ${extraSpaces}`);
        let justifiedLine = '';
        for (let i = 0; i < words.length; i++) {
            justifiedLine += words[i];
            if (i < totalWords - 1) {
                justifiedLine += ' ';
                justifiedLine += ' '.repeat(spacesPerWord);
                if (i < extraSpaces) {
                    justifiedLine += ' ';
                }
            }
        }
        console.log(`justified line is ${justifiedLine}`);
        return justifiedLine;
    });

    console.log(`justified lines are`);
    console.log(justifiedLines);

    // undo last line justification
    const lastLine = justifiedLines.pop();
    console.log(`last line before treatment is ${lastLine}`);

    const lastLineWordsJustified = lastLine.split(' ');
    const lastLineWords = lastLineWordsJustified.filter(item => item !== ' ' && item !== '');
    console.log(`last line words are ${lastLineWords}`);

    let lastLineUnjustified = '';

    for (let i = 0; i < lastLineWords.length; i++) {

        lastLineUnjustified += lastLineWords[i];

        if (i < lastLineWords.length - 1) {
            lastLineUnjustified += ' ';
        }
    }

    justifiedLines.push(lastLineUnjustified);
    console.log(`last line is ${lastLineUnjustified}`);

    // now convert back into a string with \n new line character added on every line except the last line

    const justifiedText = justifiedLines.join('\n');
    console.log(`justified text is`);
    console.log(justifiedText);

    return justifiedText

}

function amazon1(){

    console.log(`============================================================`);
    console.log(`                    barcode scanner                         `);
    console.log(`============================================================`);

    console.log(`input a config string`);
    console.log(`return an array of strings to send to the barcode scanner for configuration`);

    /*


        barcode scanner

        single string 

        stored as a blob

        request the configuration string

        present configurations in correct order

        encoded configuration string is <main-index> <configuration> pairs

        separator is |

        main-index is 4 digit numeric prefixed with zeros eg 0001

        a) validate configuration string

        b) output the configuration values in the correct order so that the barcode scanner can be configured

        conditions

        - separate configs with |
        - indexes must be sequential eg 1,2,3
        - alphanumeric only a..z..A..Z..0..9
        - config length is 10 characters
        - indices are unique ie 0001 cannot be repeated
        - configurations also are unique and cannot be repeated
        - 0000 is not valid 
        - return ["invalid configuration"] if the incoming config is invalid

        - input STRING
        - output [STRING]


    */

    //const configIn = '0001LAJ5KBX9H8|0003UKURNK403F|0002MO6K1Z9WFA|0004OWRXZFMS2C';

    const configIn = '0001LAJ5KBX9H8^|0003UKURNK403F|0002MO6K1Z9WFA|0004OWRXZFMS2C';

    console.log(`incoming configuration string is ${configIn}`);

    // fail fast - check if non-alphanumeric characters are present

    const nonAlphanumericCharacters = configIn.match(/[^a-zA-Z0-9|]/g);

    if (nonAlphanumericCharacters) {
        console.log(`non-alphanumeric characters found`);
        const invalidString = 'Invalid configuration';
        let invalidOutput = [];
        invalidOutput.push(invalidString);
        console.log(`invalid output is ${invalidOutput}`);
        return invalidOutput
    }

    // firstly parse to obtain pairs

    const pairs = configIn.split('|');

    console.log(`pairs are ${pairs}`);

    // secondly parse each pair to obtain the index and the configuration

    const pairsParsed = pairs.map(item => {
        const index = item.slice(0, 4);
        const configuration = item.slice(4);
        return [index, configuration];
    });

    console.log(`parsed pairs are ${pairsParsed}`);

    // return invalid if blank or empty pairs are present

    const pairsParsedRemoveBlanks = pairsParsed.filter(item => item[0] !== '' && item[1] !== '');

    if (pairsParsedRemoveBlanks.length !== pairsParsed.length) {
        console.log(`parsed pairs removing blanks are ${pairsParsedRemoveBlanks}`);
        const invalidString = "Invalid configuration";
        let invalidOutput = [];
        invalidOutput.push(invalidString);
        console.log(`invalid output is ${invalidOutput}`);
        return invalidOutput
    }

    // now we have to order the pairs 

    const pairsOrdered = pairsParsed.sort((a, b) => a[0] - b[0]);

    console.log(`ordered pairs are [${pairsOrdered}]`);

    // if the sequential ordering is not present then also return invalid

    const sequentialOrdering = pairsOrdered.every((item, index) => {
        return parseInt(item[0]) === index + 1;
    });

    if (!sequentialOrdering) {
        console.log(`sequential ordering not present`);
        const invalidString = "Invalid configuration";
        let invalidOutput = [];
        invalidOutput.push(invalidString);
        console.log(`invalid output is ${invalidOutput}`);
        return invalidOutput
    }

    // return invalid if the output configurations are not unique

    const configurations = pairsOrdered.map(item => item[1]);

    if (new Set(configurations).size !== configurations.length) {
        console.log(`configurations are not unique`);
        const invalidString = "Invalid configuration";
        let invalidOutput = [];
        invalidOutput.push(invalidString);
        console.log(`invalid output is ${invalidOutput}`);
        return invalidOutput
    }

    // prepare the output array

    const outputConfig = pairsOrdered.map(item => item[1]);

    return outputConfig;
}

function amazon2(deployments){

    /* 
    
    given array of 'deployment results'

    parse data 

    determine if deployment was successful or not

    ensure json input is valid 

    if not valid mark as an error

    return the number of successful deployments, failed deployments and errors 

    input is deployments[n] an array of JSON string data with 2 required fields 
    - deployment_id = 12 character string starting 'd-' followed by 10 alphanumeric characters
    - status = string 'Success' or 'Fail'

    goal is to enumerate the number of 'success' objects, number of 'fail' objects and determine if the JSON is valid and if so mark that as an error object

    return [success, fail, error]
    
    */

    console.log(`============================================================`);
    console.log(`                      deployments                          `);
    console.log(`============================================================`);

    console.log(`validate deployments fed in as JSON`);
    console.log(`return the number of successful, failed and error deployments as a numeric array [success, fail, error]`);

    console.log(` `);

    console.log(`deployments input data is ${deployments}`);

    // firstly parse into JSON

    const deploymentsParsed = deployments.map(item => {
        try {
            return JSON.parse(item);
        } catch (error) {
            return 'error';
        }
    });

    console.log(`deployments parsed are`);
    console.log(deploymentsParsed);

    // create the output integer totals

    let success = 0;
    let fail = 0;
    let error = 0;

    // parse through the data and count the number of 'Success' or 'Fail' or if an object does not match 'Success' or 'Fail' ie it is an error

    deploymentsParsed.forEach(item => {

        let isError = false;
        let isSuccess = false;
        let isFail = false;

        if (item.status === 'Success') {
            isSuccess = true;
        } else if (item.status === 'Fail') {
            isFail = true;
        } else {
            isError = true;
        }

        // also check if the 8 characters after the 'd-' are alphanumeric and if not mark as an error

        console.log(`item is ${item}`);
        console.log(`deployment_id is ${item.deployment_id}`);
        console.log(`status is ${item.status}`);
        console.log(`slice is ${item.deployment_id.slice(2)}`);
        console.log(`is it alphanumeric ${item.deployment_id.slice(2).match(/[^a-zA-Z0-9]+$/) === null}`);
            
        if (item.deployment_id.slice(2).match(/[^a-zA-Z0-9]+$/) !== null) {
            isError = true;
        }

        // increment the success, fail or error counters

        if (isSuccess) {
            success++;
        } else if (isFail) {
            fail++;
        } else if (isError) {
            error++;
        }

    });

    const output = [success, fail, error];

    return output;
    
}