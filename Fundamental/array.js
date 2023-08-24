// Array
var arr =['seaim','rahim',10,50,60,70];
console.log(arr);
var position = arr.indexOf(50);
console.log(position);
var position1 = arr.indexOf(500);
console.log(position1);
// Before push
console.log(arr);
arr.push(100);
// After push
console.log(arr);
arr.length;
console.log(arr);
arr.pop();
// after pop last theka remove
console.log(arr);
// Using `Shift`
arr.shift();
console.log(arr);
// Using unshift first e kichu add kora
arr.unshift("Kuddos");
console.log(arr);

// Using Slicing biyok kore kaj kore
var s1 = arr.slice(2,5);
console.log(s1);