let num=7;
let factor=1;
let factorArr = new Array();
while(factor<=num)
{
    if(num%factor == 0)
    {
        factorArr.push(factor);
        num=num/factor;
    }
    factor=factor+1;
}
console.log("Prime factors are:");
console.log(factorArr);