/*

Write a program that takes as input the speed of a car e.g 80. 
If the speed is less than 70, it should print “Ok”. 
Otherwise, for every 5 km/s above the speed limit (70), 
it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. 
If the driver gets more than 12 points, the function should print: “License suspended”.

*/


//Function to give speeding points

function input(speed){
//I used a max speed of 34o assuming the vehicles were very fast
speed<=0 && speed <=340;
const points = (speed-70)/5;

if(speed<70){
console.log("OK");
}
else if(speed>=75 && speed<=130){
console.log("Points:" + points);
}

else if(speed>=131){
    console.log("License suspended");
}
}

//Some speed values to run the code
input(80);
input(100);
input(120);
input(136);