// Add money to the account 

document.getElementById('add-money-btn').addEventListener('click', function(event){
    // Prevent page reload
    event.preventDefault();

    //step -1: need Money Value
    const addMoney = document.getElementById('money-value').value;
    // console.log(addMoney);

    //step-2: pin number validation
    const pinValue = document.getElementById('pin-value').value;
    // console.log(pinValue);

    //Step-3: Verify Pin number
    if(pinValue === '1234') {
        // console.log('Done');
        //Get the Current Balance
        const mainBalance = document.getElementById('balance').innerText;
        // console.log(mainBalance);

        //step-5: add money in mainBalance
            //Step-5.1 : String number to number
            const addMoneyNum = parseFloat(addMoney);
            const mainBalanceNum = parseFloat(mainBalance);

            //Step-5.2: Now Get Total Or New Balance
            const newBalance = addMoneyNum + mainBalanceNum;
            // console.log(newBalance);

        //Step-6: Update the Balance in Balance section
        document.getElementById('balance').innerText = newBalance;

        // Add to Transaction 
        const text = document.createElement('p');
        text.innerText = `Add : ${addMoney} Tk. New Balance: ${newBalance}`;

        document.getElementById('transHis').appendChild(text);
    }
    else {
        alert('Get Input Currect Pin');
    }
});


// Cash Out to the account 

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    // Prevent page reload
    event.preventDefault();

    //step -1: need Money Value
    const cashOut = document.getElementById('money-value-out').value;
    // console.log(addMoney);

    //step-2: pin number validation
    const pinOut = document.getElementById('pin-value-out').value;
    // console.log(pinValue);

    //Step-3: Verify Pin number
    if(pinOut === '1234') {
        // console.log('Done');
        //Get the Current Balance
        const mainBalance = document.getElementById('balance').innerText;
        // console.log(mainBalance);

        //step-5: add money in mainBalance
            //Step-5.1 : String number to number
            const cashOutNum = parseFloat(cashOut);
            const mainBalanceNum = parseFloat(mainBalance);

            //Step-5.2: Now Get Total Or New Balance
            const newBalance = mainBalanceNum - cashOutNum;
            // console.log(newBalance);

        //Step-6: Update the Balance in Balance section
        document.getElementById('balance').innerText = newBalance;

        // Add to Transaction 
        const text = document.createElement('p');
        text.innerText = `Add : ${cashOut} Tk. New Balance: ${newBalance}`;

        document.getElementById('transHis').appendChild(text);
    }
    else {
        alert('Get Input Currect Pin');
    }
});


//show by ID 
function showById(id) {
    //get Hidden section
    document.getElementById('cashOut').classList.add('hidden');
    document.getElementById('cashIn').classList.add('hidden');
    document.getElementById('transHis').classList.add('hidden');

    //get Show section
    document.getElementById(id).classList.remove('hidden');
}

// Add Money and Cash out and Transaction Toggle

document.getElementById('addBtn').addEventListener('click', function(){
    showById('cashIn');
});

document.getElementById('cashoutBtn').addEventListener('click', function(){
    showById('cashOut');
});

document.getElementById('transBtn').addEventListener('click', function(){
    showById('transHis');
    document.getElementById('dividerTrans').classList.remove('hidden');
});