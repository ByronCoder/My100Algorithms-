// Nazereth solution

function composeRanges(nums: number[]): string[] {
    let ranges: any[] = [];
    
    let result: any[] = [];


     for (let i = 0; i < nums.length; i++) {

        if(nums[i+1] === nums[i] + 1) {
            result.push(nums[i]);
            
        } else {
            result.push(nums[i]);
            ranges.push(result);
            result = [];
        }

    }

    for(let i = 0; i < ranges.length; i++) {
        let start: number[] = ranges[i][0];
        let end : number[]  = ranges[i][ranges[i].length -1];
        ranges[i] = (ranges[i].length > 1) ?  `${start}->${end}` : `${start}`;

    }

    return ranges;
}
        
        
         
    
  

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));

// Dylan solution

function composeRanges2(nums: number[]): string[] {

    if(nums.length < 1) {
        return [];
    }

    const ranges: any[] = [{start: nums[0], end: nums[0]}];

    for(let i = 1; i < nums.length; i++) {
        if(ranges[ranges.length -1].end + 1 === nums[i]) {
            ranges[ranges.length -1].end = nums[i];
        } else {
            ranges.push({start: nums[i], end: nums[i]});
        }
    }

    for(let i = 0; i < ranges.length; i++) {
        if(ranges[i].start !== ranges[i].end) {
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        } else {
            ranges[i] = ranges[i].start.toString();
        }
    }

    return ranges;

}


 

console.log(composeRanges2([-1, 0, 1, 2, 6, 7, 9]));