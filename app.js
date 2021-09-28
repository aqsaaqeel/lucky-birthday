var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");

function sumOfDate(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

function compareValues(sum, lNumber){
    if(sum%lNumber === 0 ) {
        outputBox.innerText = "Ooh! Your birthday is luckyyyyy!!!"; 
    }
    else {
        outputBox.innerText = "Sorry your birthday is not Lucky :(";
    }
}
checkNumberButton.addEventListener("click", function checkBirthday(){
    const dob = dateOfBirth.value;
    const lNumber = luckyNumber.value;
    const sum = sumOfDate(dob);
    const comVal = compareValues(sum, lNumber);
});
