const { func, element } = require("prop-types");

ex1 = function (a, b) {
  let sum = a + b;
  console.log(sum);
};
ex1(355, 654);

ex2 = function (num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    console.log(true);
  } else {
    console.log(false);
  }
};
ex2(50, 2);

myString = "lelum polelum";
const ex3 = function (myString, pos) {
  let ABC = myString.substring(0, pos);
  let DEF = myString.substring(pos + 1, myString.length);
  console.log(ABC + DEF);
};

ex3(myString, 5);

/*

4)
 Create a function to find the largest of three given integers.
*/
ex4 = function (abc, def, ghi) {
  if (abc > def && abc > ghi) {
    console.log("the largest is " + abc);
  } else if (def > abc && def > ghi) {
    console.log("the largest is " + def);
  } else {
    console.log("largest is " + ghi);
  }
};
ex4(58, 668, 6);

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
ex5 = function (num1, num2) {
  if (num1 > 40 && num1 < 60 && num2 > 40 && num2 < 60) {
    console.log("both are between 40 and 60");
  } else if (num1 > 70 && num1 < 100 && num2 >= 70 && num2 <= 100) {
    console.log("both are between 70 and 100");
  } else if ((num1 > 40 && num1 < 60) || (num2 > 40 && num2 < 60)) {
    console.log("one of two are between 40 and 60");
  } else if ((num1 > 70 && num1 < 100) || (num2 >= 70 && num2 <= 100)) {
    console.log("one of two are between 70 and 100");
  } else console.log("none of the numbers are between 40-60 or 70-100");
};
ex5(55, 55);
ex5(2, 80);

/*
6) Create a function to create a new string of specified copies (positive number) of a given string.
*/
ex6 = function (num) {
  let str2 = " lelum polelum ";
  console.log(str2.repeat(num));
};
ex6(33);

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
ex7 = function (city) {
  if (city.slice(0, 3) === "Los" || city.slice(0, 3) === "New") {
    console.log(city);
  } else {
    return false;
  }
};

ex7("Los angeles");
ex7("Stavanger");
ex7("NewHampshire");
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
ex8 = function (num1, num2, num3) {
  let myArr = [num1, num2, num3];
  let sum = myArr[0] + myArr[1] + myArr[2];
  console.log(sum);
};
ex8(2, 2, 2);

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

ex9 = function (num1, num2) {
  if (num1 === 1 || num1 === 3 || num2 === 1 || num2 === 3) {
    console.log("yea");
  } else console.log("neeh");
};
ex9(5, 6);

ex9v1 = function () {
  const found = array1.find((element) => element === 1 || element === 3);
  console.log("does it contain --->" + found);
};

console.log("ex9_________________");
const array1 = [5, 12, 3, 130, 44];
ex9v1(array1);
console.log("___________________");
const array12 = [5, 12, 8888, 130, 3];
ex9v1(array12);

/* 10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/
ex10 = function (array) {
  if (array.find((element) => element != 1 || element != 3)) {
    console.log("does not contain 1 or a 3");
  } else {
    console.log("does  contain 1 or a 3");
  }
};

console.log("ex10_________________");
let array = [5, 12, 8888, 130, 44];
ex10(array);
console.log("___________________");
const array10 = [5, 12, 8888, 130, 3];
ex10(array10);

/* 11)  Create a function to find the longest string from a given array of strings. */

let ex11 = function (str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
};
console.log("ex11_________________");
console.log(ex11("sjsjfsodjsjf", "sofjsojfajPSOAPAJISDJOSKøkaas"));

/* 12) Create a function to find the types of a given angle. */

const ex12 = function(angle){
if (angle > 0 && angle < 90 ) {console.log(' acute angle')}
else if(angle === 90 ){console.log(' right angle')}
else if(angle > 90 && angle < 180  ){console.log(' btuse angle')}
else if(angle === 180 ){console.log(' straight angle')}
else(console.log('upsss '))

    
    }
    console.log("ex12_________________");
    ex12(120)
    ex12(90)
    ex12(188)
/*

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers*/

arrrrrr = [4564, 41, 264, 2, 86, 26 ]

const ex13 =function(){

let largest = (element) => element =  Math.max(...arrrrrr)
//console.log('largest number is ' + largest)
console.log('index of largest  number is ' + (arrrrrr.findIndex(largest)))
       
   //let max_num_index = max_number[i]
  // console.log(max_num_index)
   //return max_number.findIndex(a,b,c,d,e,f)    
   }
     console.log('____________13')
   ex13() 

/* 14)Create a function to get the largest even number from an array of integers.*/
arrrrrr2 = [4564, 41, 264, 2, 86, 26, 586855 ]

ex14 = function(){
  let superBigNum =  Math.max(...arrrrrr2)
  console.log(superBigNum)
}
console.log('_________ 14')
ex14()


/*
16) Create a function to check from two given integers, whether one is positive and another one is negative.*/
ex16 = function(num1, num2) {
  if (num1 <0  || num2 < 0){
    console.log('one of numbers id negative')
  }
  else if(num1 < 0 && num2 <0){ console.log('both are --')}
  else{console.log('Both are ++')}
}
console.log('__________16')
ex16(58,-58)




/* 17) 
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/

const ex17 = function(myStr){
let helloStr  ="Hello"
    let new_string = helloStr.toLowerCase()
    let small = new_string.slice(0,3)
    //let new_string2 = new_string.toUpperCase[3,4]
    let cut = new_string.slice(3)
    console.log(small + cut.toUpperCase()    ) 
       
   
    
}
console.log('_____17')
ex17()



/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/
ex18 = function(num1, num2){
  let sum = num1 + num2 
  if(sum > 50 && sum < 80){return 65 }
  else{ return 80}
  }
console.log('________18')
ex18(558,5)



/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".*/




/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
ex20 = function(string){ 
    let cut = string.split(" ")
    let mapit = string.map((word) => word.charAt(0).toUpperCase())
    let connect = string.join('')
    
}

    