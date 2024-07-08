// Function to check if all required fields are filled
document.getElementById('submitBtn').onclick = function(event) {
    event.preventDefault(); // Prevent the default form submission

    let form = document.getElementById('purchaseForm');
    let inputs = form.querySelectorAll('input[required]');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
        }
    });

    if (allFilled) {
        // All required inputs are filled, proceed to the specified page
        window.location.href = 'thanks.html';
    } else {
        alert('Please fill all required fields.');
    }
};

// Variables for payment options and sections
const paypal = document.getElementById("pay-grn");
const master = document.getElementById("mas-grn");
const paytri = document.getElementById("pat-grn");
const req1 = document.getElementById("req1");
const req2 = document.getElementById("req2");
const req3 = document.getElementById("req3");

const threeDay = document.getElementById("3d");
const sevenDay = document.getElementById("7d");

const inpsec = document.getElementById("inpSec");

// Initial styles
paypal.style.backgroundColor = "#00ee00";
master.style.backgroundColor = "#ededed";
paytri.style.backgroundColor = "#ededed";
    req1.required = "";
    req2.required = "";
    req3.required = "";
inpsec.style.maxHeight = "0px";

threeDay.style.backgroundColor = "#00ee00";
sevenDay.style.backgroundColor = "#ededed";

// Functions to handle changes
const paychange = () => {
    paypal.style.backgroundColor = "#00ee00";
    master.style.backgroundColor = "#ededed";
    paytri.style.backgroundColor = "#ededed";
    req1.required = "";
    req2.required = "";
    req3.required = "";
    inpsec.style.maxHeight = "0px";
};

const maschange = () => {
    paypal.style.backgroundColor = "#ededed";
    master.style.backgroundColor = "#00ee00";
    paytri.style.backgroundColor = "#ededed";
    req1.required = "";
    req2.required = "";
    req3.required = "";
    inpsec.style.maxHeight = "0px";
};

const patchange = () => {
    paypal.style.backgroundColor = "#ededed";
    master.style.backgroundColor = "#ededed";
    paytri.style.backgroundColor = "#00ee00";
    req1.required = "required";
    req2.required = "required";
    req3.required = "required";
    inpsec.style.maxHeight = "300px";
};

const threeDayChange = () => {
    threeDay.style.backgroundColor = "#00ee00";
    sevenDay.style.backgroundColor = "#ededed";
};

const sevenDayChange = () => {
    threeDay.style.backgroundColor = "#ededed";
    sevenDay.style.backgroundColor = "#00ee00";
};