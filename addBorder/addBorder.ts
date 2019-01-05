//My Solution

function addBorder(picture: string[]): string[] {
 const wall = '*'.repeat(picture[0].length + 2);

  let arr = [...picture];

 for(let x = 0; x <= arr.length -1; x++) {
     arr[x] = "*" + arr[x];
     arr[x] = arr[x].concat("*");
 }
  arr.unshift(wall)
  arr.push(wall);
  
  return arr;
}

 console.log(addBorder(["abc", "ded"]));

 console.log(addBorder(["ehrh", "defdhfdhdd", "blah"]));

 //Dylan's solution
 function addBorder2(picture: string[]): any {
    const wall = "*".repeat(picture[0].length + 2);

    picture.unshift(wall);
    picture.push(wall);

    for (let i = 1; i < picture.length -1; i++) {
        picture[i] = '*'.concat(picture[i], '*')
    }
    return picture;
 }


 console.log(addBorder2(["abc", "ded"]));
