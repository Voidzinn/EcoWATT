document.addEventListener('DOMContentLoaded', () => {
    const username = 'Joao.Salazar'; // ID fixo do usuário por enquanto
    const apiUrl = `https://68267723397e48c9131630fe.mockapi.io/ecowatt/Pessoa?username=${username}`; // substitua pelo seu endpoint real

    console.log(apiUrl);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados do usuário');
            }
            return response.json();
        })
        .then(usuario => {
            usuario = usuario[0];
            document.getElementById('nome').textContent = usuario.name;
            document.getElementById('username').textContent = usuario.username;
            document.getElementById('email').textContent = usuario.email;
        })
        .catch(error => {
            console.error('Erro ao carregar perfil:', error);
            const dados = document.querySelector('.dados');
            dados.innerHTML = `<p>Erro ao carregar perfil do usuário.</p>`;
        });
});
