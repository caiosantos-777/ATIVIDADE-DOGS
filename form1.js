
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("meuFormulario");


    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nome = document.getElementById("Nome").value.trim();
        const telefone = document.getElementById("Telefone").value.trim();
        const idadeRaw = document.getElementById("Idade").value;
        const cidade = document.getElementById("Cdd").value.trim();


        if (nome === "") {
            alert("⚠️ O campo 'Nome Completo' é obrigatório.");
            return;
        }

        if (telefone === "") {
            alert("⚠️ O campo 'Telefone' é obrigatório.");
            return;
        }

        if (idadeRaw === "") {
            alert("⚠️ O campo 'Idade' é obrigatório.");
            return;
        } else if (Number(idadeRaw) < 16) {
            alert("❌ Desculpe, a idade mínima para doação é 16 anos.");
            return;
        }

        if (cidade === "") {
            alert("⚠️ O campo 'Cidade' é obrigatório.");
            return;
        }

        alert("✅ Tudo pronto! Seu formulário foi preenchido corretamente.");

        this.submit();
    });
});