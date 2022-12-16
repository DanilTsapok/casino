const btn = document.getElementById('btn');
const restart = document.getElementById('restart');
let div1 = document.createElement('div'); 
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let showResult = document.querySelector('#showRes');
let steps=0 
restart.style.display="none";
function func() {
    steps++

   var random_start = 1; // От какого генерировать
   var random_end = 3; // До какого генерировать

   allСycles = 3;

   var array = []
   let array1 = []
   let array2 = []
   let array3 = []

   setArray(array, array1)
   setArray(array, array2)
   setArray(array, array3)

   function setArray(arr, array) {
      for(i=random_start;i<=random_end;i++){
         arr.push(i) //мы заполняем массив, необходимыми данными в диапозоне
      }

      for(countCycles=1;countCycles<=allСycles;countCycles++){
         let a = arr.splice(Math.random()*arr.length,1)[0] //генерация рандомных чисел с уникальными значениями, где размера масстива равна AllCycle
         newArray(array, a)
      }
   }
   function newArray(array, element) {
      array.push(element)
   }

   console.log(array1)
   console.log(array2)
   console.log(array3)


   let a = array1[1];
   let b = array2[1];
   let c = array3[1];
  
 
   let resP11 = document.querySelector('.resP11')
   let resP12 = document.querySelector('.resP12')
   let resP13 = document.querySelector('.resP13')

   let resP21 = document.querySelector('.resP21')
   let resP22 = document.querySelector('.resP22')
   let resP23 = document.querySelector('.resP23')

   let resP31 = document.querySelector('.resP31')
   let resP32 = document.querySelector('.resP32')
   let resP33 = document.querySelector('.resP33')

   resP11.innerHTML = array1[0];
   resP12.innerHTML = array1[1];
   resP13.innerHTML = array1[2];

   resP21.innerHTML = array2[0];
   resP22.innerHTML = array2[1];
   resP23.innerHTML = array2[2];

   resP31.innerHTML = array3[0];
   resP32.innerHTML = array3[1];
   resP33.innerHTML = array3[2];



   let answerRes = document.querySelector(".answerRes");

   if(a === b && b === c && c === a) {
      console.log('YOU WON')
      answerRes.innerHTML = 'YOU WON'
      answerRes.style.color="green"
      answerRes.style.fontSize="30px"
   } else if (a === b && a != c) {
      console.log('ALREADY')
      answerRes.innerHTML = 'ALREADY'
      answerRes.style.color="yellow"
      answerRes.style.fontSize="30px"
   } else if (b === c && a != c) {
      console.log('ALREADY')
      answerRes.innerHTML = 'ALREADY'
      answerRes.style.color="yellow"
      answerRes.style.fontSize="30px"
   } else {
      console.log('YOU LOSE')
      answerRes.innerHTML = 'YOU LOSE'
      answerRes.style.color="red"
      answerRes.style.fontSize="30px"
   }

   showResult.style.display = 'block';
   if(steps===3){
      btn.style.display="none"
      restart.style.display ="block";
   }


}


 
 function auth(){
    let name = document.getElementById('name-user').value;
     document.getElementById('name').innerHTML = name;    
 }
