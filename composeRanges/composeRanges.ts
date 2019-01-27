// My solution (unfinished)

function composeRanges(nums: number[]): string[] {
    let ranges: number[] = [];
     ranges[0] = nums[0];

    for(let i = 1; i < nums.length; i++) {
    
        if(nums[i+1] === nums[i] + 1) {
            console.log(i);
            ranges.push(nums[i]);
            
        }
            
        }
        console.log(ranges);
    }

    



console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));