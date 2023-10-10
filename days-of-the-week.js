// Days Of The Week Exercise

// Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

// Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

//     returnDay(1) // "Monday"
//     returnDay(7) // "Sunday"
//     returnDay(4) // "Thursday"
//     returnDay(0) // null

function returnDay(number){
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
 
  if(number < 1 || number > 7){
      console.log(null)
      return null;
  }else{
    console.log(days[number - 1])
     return days[number - 1];
  }
}   
   


  returnDay(1) // "Monday"
  returnDay(2) // "Tuesday"
  returnDay(3) // Wednesday
  returnDay(4) // "Thursday"
  returnDay(5) // "Friday"
  returnDay(6) // "Saturday"
  returnDay(7) // "Sunday"

  returnDay(0) // null