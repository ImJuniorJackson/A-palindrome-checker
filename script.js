const checkBtn = document.getElementById("check-btn");
var textInput;

checkBtn.onclick = checkForPalindrome;


function checkForPalindrome(){
   textInput = document.getElementById("text-input").value;
   var valueToCheck = textInput.toLowerCase().replace(/\W|_/g,"");
   console.log(valueToCheck);
   var reversedValue = valueToCheck.split("").reverse().join("");
   console.log(reversedValue);
   const results = document.getElementById("result");

   if(textInput===''){
      alert("Please input a value")
   }

   else if(valueToCheck===reversedValue){
      results.innerText = textInput +" is a palindrome"
   }

   else{
     results.innerText = textInput +" is not a palindrome!"
   }
}



