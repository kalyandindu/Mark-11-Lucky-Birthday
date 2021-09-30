const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-no");
const buttonClick = document.querySelector("#btn-click");
const outputText = document.querySelector("#output-text");

buttonClick.addEventListener("click", dobLuckyCheck);

function dobLuckyCheck(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumber.value)
}

function calculateSum(dob){
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let digit of dob) {
    sum = sum + Number(digit);
  }
  return sum;
}

function compareValues(sum, luckyNumber){
if(sum%luckyNumber===0){
    outputText.innerText = "Your birthday is lucky!";
}
else{
    outputText.innerText = "Ooop's!, Your birthday is not lucky";
}

}