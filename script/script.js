function formatarCPF() {
    const inputCPF = document.getElementById("cpf");
    let cpf = inputCPF.value.replace(/\D/g, ''); // Remover todos os caracteres não numéricos

    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11); // Limitar o CPF a 11 dígitos
    }

    if (cpf.length > 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-'); // Adicionar pontos e hífen
    } else if (cpf.length > 6) {
        cpf = cpf.replace(/(\d{3})(\d{3})/, '$1.$2.'); // Adicionar pontos
    } else if (cpf.length > 3) {
        cpf = cpf.replace(/(\d{3})/, '$1.'); // Adicionar ponto
    }

    inputCPF.value = cpf;
}

function validarCPF() {
    const cpf = document.getElementById("cpf").value;
    if (validarFormatoCPF(cpf) && validarDigitosVerificadores(cpf)) {
        document.getElementById("idResultadoCPF").innerText = "CPF válido!";
    } else {
        document.getElementById("idResultadoCPF").innerText = "CPF inválido!";
    }
}

function validarFormatoCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Formato padrão de CPF: 123.456.789-09
    return regex.test(cpf);
}

function validarDigitosVerificadores(cpf) {
    cpf = cpf.replace(/[^\d]/g, ""); // Remover pontos e traço
    if (cpf.length !== 11) return false;

    const digitos = cpf.split("").map(Number);

    // Verificar o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += digitos[i] * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== digitos[9]) return false;

    // Verificar o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += digitos[i] * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== digitos[10]) return false;

    return true;
}

function formatarRG() {
    const inputRG = document.getElementById("rg");
    let rg = inputRG.value.replace(/\D/g, ''); // Remover todos os caracteres não numéricos

    if (rg.length > 9) {
        rg = rg.slice(0, 9); // Limitar o RG a 9 dígitos
    }

    if (rg.length > 6) {
        rg = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4'); // Adicionar pontos e hífen
    } else if (rg.length > 3) {
        rg = rg.replace(/(\d{2})(\d{3})(\d{1})/, '$1.$2.$3'); // Adicionar pontos
    } else if (rg.length > 2) {
        rg = rg.replace(/(\d{2})(\d{1})/, '$1.$2'); // Adicionar ponto
    }

    inputRG.value = rg;
}




function validarRG() {
    const rg = document.getElementById("rg").value;
    if (rg.length !== 9) {
        alert("O RG deve conter 9 dígitos.");
        return;
    }

    const multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9];
    let soma = 0;

    for (let i = 0; i < 8; i++) {
        soma += parseInt(rg.charAt(i)) * multiplicadores[i];
    }

    const resto = soma % 11;
    let digitoVerificador = 11 - resto;

    if (digitoVerificador === 10) {
        digitoVerificador = "X";
    } else if (digitoVerificador === 11) {
        digitoVerificador = 0;
    }

    if (rg.charAt(8) === digitoVerificador.toString()) {
        alert("RG válido!");
        document.getElementById("idResultadoRG").innerText = "RG válido!";
    } else {
        alert("RG inválido!");
        document.getElementById("idResultadoRG").innerText = "RG inválido!";
    }
}