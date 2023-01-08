let arr = new Array();
let i,n=100;
for(i=1;i<n;i++)
{
    if(i%11==0)
    {
        arr.push(i);
    }
}
console.log("Repeated numbers are:"+arr);