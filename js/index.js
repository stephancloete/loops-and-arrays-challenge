//Activity 1 - Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat'] 
//Using the "for" loop display the value of each of these items
//"console.log" the output, separated by a space
//Add your code below

const tasks = ['swim', 'study', 'eat', 'play', 'run', 'walk', 'sleep', 'stand', 'type', 'slide'];

    
let display = "";

for (x of tasks){
    display += x + " "; 
}
console.log(display);

//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6
//console.log your output
//Add your code below
console.log(" ");

var counter = 1;
var counterTwo = 0;

for (x of tasks){
    let sum = counterTwo + counter;
    console.log(counterTwo + " + " + counter + " = " +sum);
    counter++;
    counterTwo = sum; 
}

//Activity 3 - Using the tasks variable created above
//Create a loop that performs the 15 times table
//Leading up to the "length" of your tasks variable
//Add your code below
console.log(" ");

let multi = 1;
let answer = 0;

for (x of tasks){
    answer = multi * 15;
    console.log(multi + " x " + "15" + " = " + answer);
    multi++
}

//Activity 4 - Edit your code in activity 3, by creating an array called timesTable
//And store each value of the your fifteen times table in it
//Add your code below
console.log(" ");

let timesTable = [];
let multiTwo = 1;
let answerTwo = 0;

for (x of tasks){
    answerTwo = multiTwo * 15;
    timesTable.push(answerTwo);
    multiTwo++
}
console.log(timesTable);

//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.
//Add your code below

for (x of timesTable){
    document.getElementById("update").innerHTML += x + "<br>";
}

//Activty 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.
//Add your code below

const average = timesTable.reduce((a, b) => a + b, 0) / timesTable.length;
document.getElementById("update").innerHTML += "The average is: " + average + "<br>";

//Bonus Activity
//Repeat the output of what you produced in activity 6, this time by not using the .reduce function
//Add your code below

    /* This section is not working!!

    var counterThree = 15;
    var counterFour = 0;
    var sumAll = 0;

    for (x of timesTable){
        let sumAlt = sumAll;
        
        
        var sumAll = counterFour + counterThree;
        console.log(counterFour + " + " + counterThree + " = " +sumAll);
        counterThree + 15;
        counterFour = sumAll;
        
        var total = sumAlt + sumAll;
        console.log("total " + total + "= sumAlt " + sumAlt + "+ sumAll " + sumAll);
    }
    document.getElementById("update").innerHTML += "The average is: " + total/10;
    */

//Create a "for of" loop, looping through the values of your tasks variable created in activity 1
//console.log the output
//Add your code below

//Try to replicate the above activity by using a "for in" loop instead
//Does this work? can you understand and explain why it displays what it displays?
//Add your code below