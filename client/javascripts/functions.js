//jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = (n) => {
   //your code goes here
   let result = "";
   if(n % 3 == 0){
     result = `${result}Bit`;
   }
   if(n % 5 == 0){
     result = `${result}Bat`;
   }
   if(n % 7 == 0){
     result = `${result}Bot`;
    }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0 ) {
    result = `${result}Not`;
  }
  return result;
};

let findAllbitBatBotOrNots2 = (arr) => {
  let forArray = [];
  for (var i = 0; i < arr.length ; i++) {
    forArray1 = `${arr}: ${bitBatBotOrNot(arr)}`;
    forArray.push(forArray1);
    //result = result + bitBatBotOrNot(arr[i]);
  }
  return forArray;
};


let findAllbitBatBotOrNots1 = (arr) => {
  mapArray = [];
  arr.map(elem => {
    elemMap = `${elem}: ${bitBatBotOrNot(elem)}`;
    mapArray =  mapArray + "\"" + elemMap + "\"" + ", ";
   });
   return mapArray;
 };




 let findAllbitBatBotOrNots3 = (arr) => {
   forofArray = [];
   let array = [];
   for (const arr of array){
     forofArray1 = `${arr}: ${bitBatBotOrNot(arr)}`;
     forofArray.push(forofArray1);
     //forofArray = forofArray + "\"" + forofArray1 + "\"" + ", ";
   }
   return forofArray;
 };

 let findAllbitBatBotOrNots4 = (arr) => {
   forEachArray = [];
   let array = [9, 10, 28, 30, 34, 105];
   array.forEach((arr) => {
     forEachArray1 = `${arr}: ${bitBatBotOrNot(arr)}`;
     forEachArray.push(forEachArray1);
   });
   return forEachArray;
 };


//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
