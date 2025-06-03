document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('loggedUser'));

    document.getElementById('avatar').src = userData.avatar
    document.getElementById('username').textContent = userData.username;
    document.getElementById('nome').textContent = userData.name;
    document.getElementById('email').textContent = userData.email;
});