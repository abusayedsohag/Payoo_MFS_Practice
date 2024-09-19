// Add money to the account 

document.getElementById('add-money-btn').addEventListener('click', function(event){
    // Prevent page reload
    event.preventDefault();

    //step -1: need Money Value
    const addMoney = document.getElementById('money-value').value;
    console.log(addMoney);

    //step-2: pin number validation
    const pinValue = document.getElementById('pin-value').value;
    console.log(pinValue);
});