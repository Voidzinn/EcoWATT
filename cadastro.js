function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const novoUsuario = {
        "name": nome,
        "email": email,
        "password": senha,
        "username": usuario
    };

    fetch('https://68267723397e48c9131630fe.mockapi.io/ecowatt/Pessoa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    })
        .then(res => res.json())
        .then(data => {
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "login.html";
        })
        .catch(error => {
            console.error("Erro ao cadastrar:", error);
            alert("Erro ao cadastrar. Tente novamente.");
        });
}
