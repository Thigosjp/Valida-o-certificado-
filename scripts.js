<html>
 <head></head>
 <body>
<script type="text/javascript" id="dcoder_script">// Simulação de armazenamento em memória para os certificados válidos
let certificadosValidos = ['123456', '654321', '111111'];

function validarCertificado() {
    const documento = document.getElementById('documento').value;

    if (certificadosValidos.includes(documento)) {
        window.location.href = 'valid.html';
    } else {
        window.location.href = 'invalid.html';
    }

    return false;  // Evita o envio do formulário
}

function cadastrarCertificado() {
    const novoDocumento = document.getElementById('documento').value;

    if (novoDocumento.trim() === '') {
        alert('Por favor, informe um número de certificado válido.');
        return false;
    }

    if (certificadosValidos.includes(novoDocumento)) {
        alert('Este certificado já está cadastrado.');
        return false;
    }

    certificadosValidos.push(novoDocumento);
    alert('Certificado cadastrado com sucesso!');
    document.getElementById('documento').value = ''; // Limpa o campo após o cadastro

    return false;  // Evita o envio do formulário
}</script></body></html>