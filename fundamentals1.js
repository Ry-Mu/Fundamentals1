console.log('I am running from node');

// Set up array variable
var x =  [3,5,"Dojo", "rocks", "Michael", "Sensei"];

// Print all values in array
for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}

// Push the value of 100 into the array
x.push(100);
console.log(x);
//Push another arrau to array x.

x.push(["hello", "world", "Javascitpt is Fun"]);

console.log(x);

//Print all the sum of numbers from 1-500
var sum = 0;
for(var i = 1; i < 501; i++) {
  sum += i;
}
console.log(sum);


//Find the minimum value of the following array
var arr = [1,5,90,25,-3,0];

var min = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min){
    min = arr[i];
  }
}
console.log(min);

//Find the average value of the arrray
var sum = 0;
for (var i = 1; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum/arr.length);


//code inside node terminal

// Iterate through object
var new_ninja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript',
  dojo: 'Dallas'
};

for (var key in new_ninja){
  console.log(key + " : " + new_ninja[key]);
}
