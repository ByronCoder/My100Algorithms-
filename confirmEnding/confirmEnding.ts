// My solution

function confirmEnding(str: string, target: string) {
   
    return str.substring(str.length - target.length) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));

// Dylan Solution
function confirmEnding2(str: string, target: string) {
    const start = str.length - target.length;

    return str.substr(start) === target;

}