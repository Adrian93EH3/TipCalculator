// GLOBAL VARIABLES
(tipCalculator) => {
    let bill = document.getElementById("amount").value;
    let quality = document.getElementById('qualityOfService').value;
    let split = document.getElementById('amountOfPeople').value;

    // Making sure that the user can't skip crucial
    // inputs such as the bill amount and quality of service
    if (bill === "" || quality == 0) () => {
        alert("Please fill out the input fields.");
        return;
    }
    // If the variable of split has no content or is less than
    // or equal to 1
    if (split === "" || split <=1) () => {
        // If nobody is splitting the bill, there's no reason to display 'each'
        // on the bill amount
        document.getElementById("tip").style.display = "none";
    }
    tipCalculator();
}