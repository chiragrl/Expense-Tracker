var myBalance = document.getElementById("balance")
var myIncome = document.getElementById("myIncome")
var myExpence = document.getElementById("myExpence")
var amount = document.getElementById("amount")
var text = document.getElementById("text")


var balance;
function addTransaction() {
    // alert("cfgc")
  if (amount.value != '' &&  text.value != '') 
    {
        if (amount.value > 0) 
        {
            var Income = parseInt(myIncome.innerText);//300
            Income += parseInt(amount.value);//200+100
            myIncome.innerText = Income;//300


            balance = parseInt(myBalance.innerText);//300
            balance += parseInt(amount.value);//200+100
            myBalance.innerText = balance;//300
            // alert(income);

        }
        else 
        {
            var Expence = parseInt(myExpence.innerText);
            Expence += Math.abs(parseInt(amount.value));
            myExpence.innerText = Expence;

            balance = parseInt(myBalance.innerText);
            balance -= Math.abs(parseInt(amount.value));
            myBalance.innerText = balance;
        }
    }
    else
    {
        alert("All Fields are manditory")
    }



    amount.value = "";
    text.value = "";
}

function showHistory()
{
    
}