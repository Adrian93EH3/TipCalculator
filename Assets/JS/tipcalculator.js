// GLOBAL VARIABLES
(tipCalculator) => {
let bill = document.getElementById("amount").value;
let quality = document.getElementById('qualityOfService').value;
let split = document.getElementById('split').value;

// Making sure that the user can't skip crucial
// inputs such as the bill amount and quality of service
if (bill === "" || quality == 0) () => {
    alert("Please fill out the input fields.");
    return;
}
}