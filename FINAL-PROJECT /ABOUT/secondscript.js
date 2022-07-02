let number = document.getElementById("number");
let counter = 0;
setInterval (()=> {
  if (counter == 80){
    clearInterval ();
  }else{
    counter += 1; 
    number.innerHTML = counter + "%";
  }
 
},40);



let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval (()=> {
  if (counter2 == 70){
    clearInterval ();
  }else{
    counter2 += 1; 
    number2.innerHTML = counter + "%";
  }
 
},40);


let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval (()=> {
  if (counter3 == 65){
    clearInterval ();
  }else{
    counter3 += 1; 
    number3.innerHTML = counter3 + "%";
  }
 
},40);