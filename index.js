// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10

let i = 0
while(i<=10){
  console.log(i)
  i++
}

console.log(19%2)


// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40

let i2 = 20
let counter = 20

while(counter<=40){

if(i2%2 == 0){
  console.log(i2)
}
i2++
counter++
  
}



// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1
let userinput = prompt("Give me a number")

userinput = parseInt(userinput)

while(userinput>=1){
  console.log(userinput)
  userinput--
}




// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.

let userprompt2 = prompt("Enter a postive integer")

userprompt2 = parseInt(userprompt2)

let sum = 0

let counter2 = 1

while(counter2<=userprompt2){

  sum = sum + counter2

  counter2++

}

console.log(sum)

// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").

let password = prompt("Enter a password")

let passwordguess = prompt("Enter the correct password")

while(password != passwordguess){
  console.log("Not the correct password try again")
  passwordguess = prompt("Enter the correct password")
    
  }

console.log("You guessed the correct password")



// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after



