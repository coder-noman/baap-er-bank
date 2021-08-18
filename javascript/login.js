// login page JS

document.getElementById('login-submit').addEventListener('click', function () {
    
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if (userEmail == 'baperpola@gmail.com' && userPassword == 'sontan') {
        window.location.href = "bank.html";
    }
    else {
        alert('please give correct Email or Password.')
    }
})
