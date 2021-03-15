document.body.onload = function() {
    setTimeout(function(){
        let preloader = document.getElementById("page-preloader");
        if(!preloader.classList.contains("done")){
            preloader.classList.add("done");
        }
    }, 1500);

}

const input = document.getElementById("num");
const button = document.getElementById("equal");
const select = document.getElementById("select-option");
const total = document.getElementById("total");

const currency= {
    EUR: "",
    USD: "",
    CHF: ""
}
axios("http://api.nbp.pl/api/exchangerates/rates/a/usd")
.then((res) => {
    currency.USD = res.data.rates[0].mid
        
})
.catch((error) =>{
    alert(error)
})
axios("http://api.nbp.pl/api/exchangerates/rates/a/chf/")
.then((res) => {
    currency.CHF = res.data.rates[0].mid     
})
.catch((error) =>{
    alert(error)
})
axios("http://api.nbp.pl/api/exchangerates/rates/a/eur/")
.then((res) => {
    currency.EUR = res.data.rates[0].mid   
})
.catch((error) =>{
    alert(error)
})

button.addEventListener("click", ()=>{
    let valueSelect = select.value;
    let valueInput = Number(input.value);
    if(valueSelect === "EUR"){
        total.textContent = "TO " + Math.round(valueInput * currency.EUR) + " PLN";
    } else if (valueSelect ==="USD"){
        total.textContent = "TO " + Math.round(valueInput * currency.USD) + " PLN";
    }else if (valueSelect ==="CHF"){
        total.textContent = "TO " + Math.round(valueInput *  currency.CHF) + " PLN";
    } 
})




   
    