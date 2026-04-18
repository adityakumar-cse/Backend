// topics 
// array and object
// function return
// async js coding

//-------------------------------------------------------------------------------------
// Array 
// we must know foreach, map, filter, find, indexOf

// ---------------foreach--------------------------------------
// var arr = [1,2,3,4];
// arr.forEach(function(val){
//    console.log(val + "hello");  
// })

// -------------------map----------------------------
// var arr =[1,2,3,4];
// var newarr = arr.map(val=>{
//     return val*2;
// })
// console.log(newarr);

//----------------------filter-------------------------------
// var arr =[1,2,3,4];
//  var ans= arr.filter(function(val){
//    if(val>=3){return true;} 
//    else return false; 
//      })
// console.log(ans);


// --------------------find-----------------------
// var arr =[1,2,3,4];
//  var ans= arr.find(function(val){
//    if(val===3)return true;
   
//      })
// console.log(ans);

//----------------indexOf--------------------
// run this in browser console 
// arr.indexOf(2)
 // it will give 1 because index 2 value is 1
 //--------------------------------------------------------------------------------

 // Objects

 var obj = {
    name: "Aditya",
    age: 12
 }
    // you can do any ine of them
    // obj.name  //run this in browser console
    // 'Aditya'  //it will give this
    // obj['name'] //run this in browser console
    // 'Aditya'  // it will give this

// freeze

// var obj = {
//     name: "Aditya",
//     age: 12
//  }

//  Object.freeze(obj);  // this line of code freeze obj that no one change it

//  obj.age = 23;

 //----------------------------function---------------------------------------------

 // we can also find length of function 
//  function abcd(){

//  }
 // if we run abcd.length in browser console it show 0
//  function abcd(a,b,c){

//  }

 //---------return----------------------------
 function abcd(){
   return 12;
 }

 var ans = abcd();

 //-----------------------------------