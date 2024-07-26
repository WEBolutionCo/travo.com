document.getElementById('submitBtn').onclick = function(event) {

    let form = document.getElementById('purchaseForm');
    let inputs = form.querySelectorAll('input[required]');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
        }
    });

    if (allFilled) {
        window.location.href = 'thanks';
    } else {
        alert('Please fill all required fields to Proceed');
    }
};

const paypal = document.getElementById("pay-grn");
const master = document.getElementById("mas-grn");
const paytri = document.getElementById("pat-grn");
const req1 = document.getElementById("req1");
const req2 = document.getElementById("req2");
const req3 = document.getElementById("req3");
const planSec = document.getElementById("plan-sec");

const threeDay = document.getElementById("3d");
const sevenDay = document.getElementById("7d");

const inpsec = document.getElementById("inpSec");

paypal.style.backgroundColor = "#00ee00";
master.style.backgroundColor = "#ededed";
paytri.style.backgroundColor = "#ededed";
req1.required = "";
req2.required = "";
req3.required = "";
inpsec.style.maxHeight = "0px";

threeDay.style.backgroundColor = "#00ee00";
sevenDay.style.backgroundColor = "#ededed";

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
    inpsec.style.maxHeight = "350px";
};

const vanish = () => {
    planSec.style.maxHeight = "0px";
}

const threeDayChange = () => {
    threeDay.style.backgroundColor = "#00ee00";
    sevenDay.style.backgroundColor = "#ededed";
};

const sevenDayChange = () => {
    threeDay.style.backgroundColor = "#ededed";
    sevenDay.style.backgroundColor = "#00ee00";
};