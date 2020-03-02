//function
/*
function test(){
for(var i=0; i<10; i++){
  console.log(i);
  }
}
//call
test();
//test var i in external scope function
console.log(i); //in console it gets error, referenceError
*/


//this is the scope function
//IIFE - Immediately Invoked Function Expression (sebuah function expression yg dipanggil ketika dibuat)
//SIAF - Self Invoking Anonymous Function (sebuah fungsi tidak bernama) 
(function () //--function anonymous-- create inside ()
{
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}()) //--call function with () doesn't need to declare like test();