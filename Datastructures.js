let num;
let arr = new Array();
function randomNum()
{
    return Math.floor(Math.random()*900)+100;
}
for(i=0;i<10;i++)
{
    arr.push(randomNum());
}
size = arr.length;
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("Sorted array is:");
arr.sort();
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("Second largest number in the array is: ");
console.log(arr[size-2]);