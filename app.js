///////////////// blance using if else ////////

// let blance = 10000;

// let userInput = prompt("Enter your payment");

// if(userInput <= 0){
//     console.log("Please enter postive number");
// } else if(userInput % 500 !== 0){
//    console.log("Plaese enter 500 or greater 1000");
// }else if(userInput > blance){
//     console.log("Your amount is only 10000");
// }else{
//     blance = blance - userInput
//     console.log(`your remaning payment ${blance}`);
// }

//////////////////////// students grades ///////////////

// let studentNumbers = parseInt(prompt("Plaese enter your marks"));

// if( isNaN(studentNumbers) || studentNumbers < 0 || studentNumbers > 100){
//   console.log("Plaese enter correct number and not enter alphbet");
// }else{
//     let grade;
//     if (studentNumbers >= 90){
//        grade = "A";
//     }else if (studentNumbers >= 80){
//         grade = "B";
//     }else if (studentNumbers >= 70){
//         grade = "C";
//     }else if (studentNumbers >= 60){
//         grade = "D";
//     }else{
//         grade = "F";
//     }
//     console.log(`studentNumber: ${studentNumbers} Grade: ${grade}`);
// }


/////////////////////////////////// odd Even /////////////////

// let numbers = parseInt(prompt("Enter a number"));

// if(numbers % 2 ===  0){
//     console.log("Number is Even");
// }else{
//     console.log("Numbers id Odd");
// }

////////////////////////// number comparison ///////////////////////////


// let number1 = parseInt(prompt("Enter a number1"));
// let number2 = parseInt(prompt("Enter a number2"));

// if(number1 > number2){
//     console.log("Number 1 is big");
// }else if (number1 < number2){
//     console.log("Number 2 id big");
// }else{
//     console.log("Numbers are equal");
// }

// //////////////////Sign Up / Login///////////////////////
 
// alert("please signUp");

// let name = prompt("Enter your name");
// let password = prompt("Enter your password");

// if(name === "" || password === ""){
//     console.log("sign up, Please enter name and password");
// }else{
//     alert("sucessfully signup, please login ");
// };

// let checkname = prompt("Please enter your checkname");
// let checkpassword = prompt("Please enter your password");

// if(checkname === name && checkpassword === password){
//     console.log("sucessfully login");
// }else if(checkname === "" && checkpassword === ""){
//     console.log("login fail, plaese enter your checkname and checkpasswrd");
// }else{
//     if(checkname !== name){
//         console.log("login fail, checkname is incorrect");
//     };
//     if(checkpassword !== password){
        
//         console.log("login fail, checkpassword is incorrect");
//     }
// }


////////////////////// //Operators Combined Example //////////////

// let x = 15;
// let y = 20;
// let isValid = (x>10 && y<10) || (x<20 && y>30);
// console.log(`${isValid}`);


/////////////////////////////  Post-Increment////////


// let x = 5;
// console.log("Original value of x:", x); // Output: 5
// let y = x++; // Post-increment
// console.log("Value of x after post-increment:", x); // Output: 6
// console.log("Value assigned to y:", y); // Output: 5



// let x = 5;
// console.log("Original value of x:", x); // Output: 5
// let y = ++x; // pre-increment
// console.log("Value of x after post-increment:", x); // Output: 6
// console.log("Value assigned to y:", y); // Output: 5


// let x = 5;
// console.log("Original value of x:", x); // Output: 5
// let y = x--; // Post-dec
// console.log("Value of x after post-increment:", x); // Output: 6
// console.log("Value assigned to y:", y); // Output: 5


// let x = 5;
// console.log("Original value of x:", x); // Output: 5
// let y = --x; // pre-dec
// console.log("Value of x after post-increment:", x); // Output: 6
// console.log("Value assigned to y:", y); // Output: 5


//////////////////////////////////// Loops in jS /////////


// for(i=0; i<10; i++){ /// for loop
//     console.log(i);
// }

// let i = 0; while loop
// while(i<6){
//     console.log(i);
//     i++;
// }

// let x = 0;  // do while loop
// do{
//     console.log(x);
//     x++;
// }while(x<5);


 ///// for loop using in object

//  const person = {name: "Ali", Age: 17, Class: "I"}
//  for(let i in person){
//     console.log(i,person[i]);
//  }

//// for of loop using array ///

// const Arr1 = ["Ali","Akbar","hussain"];
// for(let i of Arr1){
//     console.log(i);
// }

// for(i=0; i<=10; i++){
//     console.log(`2 * ${i} = ${2*i} `);
// }


///////// create game ///////////
// const secretNumber = 7;
// let guess;
// while(guess !== secretNumber){
//      guess = parseInt(prompt("Guess the number between 1 and 10"));
//     if(guess !== secretNumber){
//         console.log("Try again");
//     }
// };
// console.log("congradulation");

// const str = "world";
// let i = 0;
// do{
//     console.log(str[i]);
//     i++
// }while(i < str.length)