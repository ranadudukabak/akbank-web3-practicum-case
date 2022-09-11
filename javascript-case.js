const number = prompt("Enter a number: ");
var sum = 0;

fnc(number)

function fnc(value){
    while(value > 0){
        var temp = parseInt(value % 10);
        value = parseInt(value / 10);
        sum += temp;
    }
}

if(sum % 2 == 0)
    console.log("Even")
else
    console.log("Odd")
