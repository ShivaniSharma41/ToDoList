let bottom2 = document.getElementById("id2");


// function idGenerator(){
//   return randomId; 
// }

let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', function(){
  var div1 = document.createElement("div");
  div1.className = "div1"
  var innerdiv = document.createElement("div");
  innerdiv.className = "innerdiv1"

  let inputfield1 = document.getElementById("inputfield");
  let inputVal = document.abhishek.textview.value;
  //console.log("Input Val", inputVal)
  if(inputVal.length>0)
  {
  innerdiv.innerHTML = inputVal;
  document.abhishek.textview.value = "";

  div1.appendChild(innerdiv);
  var button1 = document.createElement("button");
  div1.appendChild(button1);
  button1.innerHTML = "X";
  bottom2.appendChild(div1);
  }

})
