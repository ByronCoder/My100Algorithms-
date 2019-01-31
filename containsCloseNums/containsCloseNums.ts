// My solution

function containsCloseNums(nums: number[], k: number): boolean {
    let firstIndex = 0;
    let lastIndex = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                console.log(`${nums.indexOf(nums[i])} ${nums.lastIndexOf(nums[j])}`);
                firstIndex = nums.indexOf(nums[i]);
                lastIndex = nums.lastIndexOf(nums[j]);

            }
        }
    }

    return Math.abs(firstIndex - lastIndex) === k;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));

// Dylan solution
function containsCloseNums2(nums: number[], k: number): boolean {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i !== j) {
                if(nums[i] === nums[j]) {
                    if(Math.abs(i - j) <= k) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}


console.log(containsCloseNums2([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums2([0, 1, 2, 3, 5, 2], 2));