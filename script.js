// === Tema Claro/Escuro com Salvar Preferência ===

// Verifica se existe tema salvo no navegador
const temaSalvo = localStorage.getItem("tema");

// Se existir e for "dark", aplica o tema escuro ao carregar a página
if (temaSalvo === "dark") {
    document.body.classList.add("dark");
}

// Botão de alternar tema
const temaBtn = document.getElementById("temaBtn");

if (temaBtn) {
    temaBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Salva a escolha do usuário
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("tema", "dark");
        } else {
            localStorage.setItem("tema", "light");
        }
    });
}

// Validação do formulário
const form = document.getElementById("formContato");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let nome = document.getElementById("nome").value.trim();
        let email = document.getElementById("email").value.trim();
        let msg = document.getElementById("mensagem").value.trim();
        let status = document.getElementById("msg-status");

        // Verifica se todos os campos foram preenchidos
        if (nome === "" || email === "" || msg === "") {
            alert("Preencha todos os campos!");
            return;
        }

        // Validação simples de e-mail
        let padraoEmail = /\S+@\S+\.\S+/;
        if (!padraoEmail.test(email)) {
            alert("Informe um e-mail válido!");
            return;
        }

        // Simulação de envio
        alert("Mensagem enviada com sucesso!");

        form.reset();
        status.textContent = "Sua mensagem foi enviada!";
    });
}
