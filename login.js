function login()
{
    let username = document.getElementById("usr").value;
    let password = document.getElementById("pwd").value;

    console.log(username+" = "+password);

    fetch(`https://68267723397e48c9131630fe.mockapi.io/ecowatt/Pessoa?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]+" = "+password);
            if(data[0].password === password)
            {
                window.location.href = "home.html";
            }
            else
            {
                alert("Senha ou usuário incorreto");
            }
        })
        .catch(error =>
        {
            console.log("Erro ao fazer o login",error);
            alert("Erro ao tentar fazer login");
        });
}