document.querySelector('.entry-form').addEventListener("submit", e => {
    e.preventDefault();

    const userName = document.querySelector('.entry-form [name="username"]').value;
    const password = document.querySelector('.entry-form [name="password"]').value;
    const apiUrl = 'http://localhost:5000';

    fetch(apiUrl +'/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName, password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
<<<<<<< HEAD:public/js/login.js
           
            //avoid multiple sessions
           if( sessionStorage.userId == data.user.userId &&
            sessionStorage.userName == data.user.userName
           ){
            document.getElementById("login-error").innerHTML = 'You already have a session.';
            } else {
            sessionStorage.clear();
=======
           //check if session is already initiated
           if( sessionStorage.userId == data.user.userId &&
            sessionStorage.userName == data.user.userName
           ){

            document.getElementById("login-error").innerHTML = 'You already have a session.';
            
            } else {

            sessionStorage.clear();

>>>>>>> 5.1_dev:client/public/js/login.js
            // Store session variables
            sessionStorage.userId = data.user.userId;
            sessionStorage.userName = data.user.userName;
            sessionStorage.accessToken = data.accessToken;
<<<<<<< HEAD:public/js/login.js
            //Go to chat window
            window.location.assign('../html/chat.html');
           }   
=======

            // Go to chat window
            window.location.assign('./html/chat.html');

            }   

>>>>>>> 5.1_dev:client/public/js/login.js
        } else {
            document.getElementById("login-error").innerHTML = data.message;
        }
    }).catch(err => document.getElementById("login-error").innerHTML = err.message);
});
