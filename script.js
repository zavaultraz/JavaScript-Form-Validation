document.getElementById('userForm').addEventListener('submit', function(event) {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let errorMessage = document.getElementById('error-message');

    if (username === "" || email === "") {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});
