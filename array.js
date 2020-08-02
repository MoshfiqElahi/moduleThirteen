//13.2
///declaring an Array
var friendsAge = [15, 17, 14, 16] //array is called list, collections also. Arrays first element position is 0.
console.log(friendsAge)

//to find out first one
var friendsAge = [15, 17, 14, 16]
console.log(friendsAge[0]) //Arrays first element position is 0.

//take something from array and keep it on var
var sonaliAge = friendsAge[2]
console.log(sonaliAge)

//if want to change the number of 1 position
friendsAge[1] = 21;
console.log(friendsAge)

//find out a number from an array
var position = friendsAge.indexOf(14);
console.log(position)

//find out a number from an array
var position = friendsAge.indexOf(141); //141 is not available in the array friendsAge
console.log(position) //ans will be -1