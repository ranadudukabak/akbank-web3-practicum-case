var num = process.argv[2];
var sum = 0;

console.log(process.argv);

myFunc(num)

function myFunc(item){
    while(item > 0){
        var tempNum = parseInt(item % 10);
        item = parseInt(item / 10);
        sum += tempNum;
    }
}

if(sum % 2 == 0)
    console.log(sum + " - Even")
else
    console.log(sum + " - Odd")
