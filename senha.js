function verifyPassword() {
    const passwordInput = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
    const loginScreen = document.getElementById('login-screen');
    const bankScreen = document.getElementById('bank-screen');

    // Validação da senha exigida
    if (passwordInput === "nathilinda67") {
        errorMsg.style.display = "none";
        loginScreen.style.display = "none"; // Oculta login
        bankScreen.style.display = "flex";   // Exibe interface do banco com perfil
    } else {
        errorMsg.style.display = "block";   // Alerta erro
        document.getElementById('password-input').value = ""; // Reseta o campo
    }
}

// Vincula o clique da tecla Enter no campo de entrada à função de validação
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verifyPassword();
    }
});
