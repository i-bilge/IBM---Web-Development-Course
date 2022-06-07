
let amount = document.getElementById("principal");
let rate = document.getElementById("rate");
let rateValue = document.getElementById("rate_val");
let years = document.getElementById("years");
let button = document.getElementById("btnCompute");
let interest;
let year;
let result = document.getElementById("result");
// For now i defined the variables of html to my JavaScript.
//------------------------------------------------------------

function updateRate() 
{
    rateValue.innerText=rate.value;
}
rate.addEventListener("change", updateRate);
//and here are the function to update the rate value and event listener to do it.
//-------------------------------------------------------------

button.addEventListener("click", () => {
    const a = Number(amount.value);
    const r = Number(rate.value);
    const y = Number(years.value);
    const nY = new Date().getFullYear()+parseInt(y)
    interest = a * y * r /100;

    if (a <= 0) {
        alert("Enter a positive numper");
    }
    else
        result.innerHTML = "If you deposit <mark>"+a+",</mark>\<br\>at an interest rate of <mark>"+r+"%</mark>\<br\>You will receive an amount of <mark>"+interest+",</mark>\<br\>in the year <mark>"+nY+"</mark>\<br\>"

})
// At the end here are the event listener to compute the interest and give it as a result text :)



