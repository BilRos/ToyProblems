/*

Write a program that prompts the user to input student marks. 
The input should be between 0 and 100. Then output the correct grade:

- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40.

*/

//Function to check for grades
function input (marks){
  
marks>=1 && marks<=100;

    if (marks>79){
        console.log("A");
    }
    else if(marks>=60 && marks<=79){
        console.log("B");
    }
    else if(marks >=50 && marks<=59){
        console.log("C");
    }
    else if(marks >=40 && marks<=49){
        console.log("D");
    }
    else if (marks<39){
        console.log("E");
    }
}
//Some marks to show grade 
input(5);
input(45);
input(61);
input(76);
input(90);
