//  Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (var x=1;x<100;x++){
    if(x%3==0)
    console.log("Fizz")
    else if(x%5==0)
    console.log("Buzz")
    else(x%3==0 && x%5==0)
    console.log("FizzBuzz")
}
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum=0
for (var p=0;p<1000; p++){
    if (p%3===0 && p%5===0){
        sum+=p;
    }

}
console.log(sum)

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
for (var w=0;w<20;w++){
    if(w%2===0){
        console.log(w,"is even");
    }
    else{
        console.log(w,"is odd")
    }
}

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function largest(n,m){
    if(n>m){
        return n
    }
    else{
        return m

    }
}
console.log(10,40)


// . Write a JavaScript program to find leap years from 2000 to 2022
function leap_year(year){
    if(year%4===0 && year%100===0 && year%400===0)
    return year + "is leap year"
    else{
        return year +"is not a leap year"
    }
}
console.log(leap_year(2025))

// number4
const  num = [-2, 4,-5, 6,0]
let largest_num=num[0]
for (var m=0; m<num.length;m++){
    if(num[m]>largest_num){
        largest_num=num[m]
       
    } }
console.log(largest_num)



