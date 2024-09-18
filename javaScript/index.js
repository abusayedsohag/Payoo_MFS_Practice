// console.log('Connected');

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault(); //for reload stop

    const phoneNumber = document.getElementById('mobile-get').value;
    const pinNumber = document.getElementById('pin-get').value;

    console.log(phoneNumber, pinNumber);

    if (phoneNumber === '5' && pinNumber === "1234") {
        console.log('Go login');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong');
    }
})