// CALCULATOR FUNCTIONALITY //
function tipCalculator() {
    // LOCAL VARIABLES
    var bill = document.getElementById("amount").value;
    var quality = document.getElementById('qualityOfService').value;
    var split = document.getElementById('amountOfPeople').value;
    var total = (bill * quality) / split;
    // Making sure that the user can't skip crucial
    // inputs such as the bill amount and quality of service
    if (bill === "" || quality == 0) {
        alert("Please fill out the input fields.");
        return;
    }
    // If the variable of split has no content or is less than
    // or equal to 1
    if (split === "" || split <=1) {
        document.getElementById("each").style.display = "block";
    }

    // LOGIC FOR THE TIP //
    // Rounding the math to the hundredths
    total = Math.round(total * 100) / 100;
    // Makes sure we always have two digits after the decimal
    total = total.toFixed(2);
    // Display the tip
    document.getElementById("tip").style.display = "block";
    // Swap through the DOM to the value of the 'total' variable
    document.getElementById("tip").innerHTML = total;
    // END LOGIC OF TIP //

}
// BUTTON FUNCTIONALITY, CALLS THE FUNCTION OF 'tipCalculator' SO EVERYTHING ABOVE CAN FIRE OFF UPON CLICK
    document.getElementById("calculate").onclick = function() {
        console.log("hello")
        tipCalculator();
    
}