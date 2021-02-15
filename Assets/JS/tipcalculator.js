// GLOBAL VARIABLES
let bill = $('#amount').value;
let quality = $('#qualityOfService').value;
let split = $('#split').value;

// Making sure that the user can't skip crucial
// inputs such as the bill amount and quality of service
if (bill === "" || quality == 0) () => {
    alert("Please fill out the input fields.");
    return;
}