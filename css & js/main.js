let btn = document.querySelector(".proccess");
let inp_balance = document.querySelector(".inp-balance");
let inp_stopLoss = document.querySelector(".inp-stopLoss");
let inp_risk = document.querySelector(".inp-risk");
let result = document.querySelector(".result");
btn.addEventListener('click', () => {
    if(inp_balance.value && inp_risk.value && inp_risk.value) {
        let mohasebe = inp_risk.value / inp_stopLoss.value * inp_balance.value;
        result.innerHTML = mohasebe.toFixed(2) + "Lot";
    } else {
        alert("لطفا موارد خواسته شده را پر کنید.")
    }
 })