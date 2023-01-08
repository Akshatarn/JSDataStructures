let map = new Map();
let maxCount=10;
let oneCount=0,twoCount=0,threeCount=0,fourCount=0,fiveCount=0,sixCount=0;
bool = true;
while(bool)
{
    let rand = Math.floor(Math.random()*6+1);
    switch(rand)
    {
        case 1:
            if(oneCount == maxCount)
            {
                bool = false;
            }
            else
            {
                oneCount++;
            }
            break;
        case 2:
            if(twoCount == maxCount)
            {
                bool = false;
            }
            else
            {
                twoCount++;
            }
            break;
        case 3:
            if(threeCount == maxCount)
            {
                bool = false;
            }
            else
            {
                threeCount++;
            }
            break;
        case 4:
            if(fourCount == maxCount)
            {
                bool = false;
            }
            else
            {
                fourCount++;
            }
            break;
        case 5:
            if(fiveCount == maxCount)
            {
                bool = false;
            }
            else
            {
                fiveCount++;
            }
            break;
        case 6:
            if(sixCount == maxCount)
            {
                bool = false;
            }
            else
            {
                sixCount++;
            }
            break;      
            
    }
}
map.set(1,oneCount);
map.set(2,twoCount);
map.set(3,threeCount);
map.set(4,fourCount);
map.set(5,fiveCount);
map.set(6,sixCount);
console.log(map)

let minTimes = Math.min(...map.values());
let maxTimes = Math.max(...map.values());
function getKey(values)
{
    return[...map].find(([key,val])=>val==value)
}
console.log("Maximum Times is :"+getKey(maxTimes));
console.log("Minimum Times is :"+getKey(minTimes));