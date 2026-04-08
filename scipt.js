let doadores = [];

document.getElementById("formDoacao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = parseInt(document.getElementById("idade").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let tipoSanguineo = document.getElementById("tipoSanguineo").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();
    let erro = "";

    if (!nome.includes(" ")) {
        erro = "Digite o nome e o sobrenome.";
    } else if (!email.includes("@") || !email.includes(".")) {
        erro = "Email inválido.";
    } else if (idade < 16) {
        erro = "Idade mínima é 16 anos.";
    } else if (peso < 50) {
        erro = "Peso mínimo é 50kg.";
    } else if (tipoSanguineo === "") {
        erro = "Selecione o tipo sanguíneo.";
    } else if (!/^[0-9]+$/.test(telefone)) {
        erro = "Telefone deve conter apenas números.";
    } else if (
        nome === "" || email === "" || cidade === "" || estado === ""
    ) {
        erro = "Preencha todos os campos.";
    }
    let mensagemErro = document.getElementById("mensagemErro");

    if (erro !== "") {
        alert(erro);
        return;
    }
    mensagemErro.textContent = "";

    let doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    };

    doadores.push(doador);
    mostrarDoadores();
    document.getElementById("formDoacao").reset();
    alert("Cadastro realizado com sucesso!")
});

function mostrarDoadores() {
    let lista = document.getElementById("listaDoadores");

    lista.style.display = "block";
    lista.innerHTML = "<h3>Doadores cadastrados:</h3>";

    doadores.forEach(function (d) {
        lista.innerHTML += `
        <p> 
        <strong>${d.nome}</strong> - ${d.tipoSanguineo} <br>
        ${d.cidade} - ${d.estado} 
        </p>
        `;
    });
}
