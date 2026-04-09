
document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("Nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("casa").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let cidade = document.getElementById("Cdd").value;

    if (nome.length < 3) return alert("Nome Inválido");
    if (email.length < 3) return alert("Email Inválido");
    if (moradia.length < 3) return alert("Moradia Inválido");
    if (quintal.length < 3) return alert("Quintal Inválido");
    if (cidade.length < 3) return alert("Cidade Inválido");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;

});