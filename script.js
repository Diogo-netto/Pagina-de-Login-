// Seleção de elementos
const btn = document.getElementById('btn');  // Botão de alternar para a tela de cadastro
const btn2 = document.getElementById('btn2'); // Botão de alternar para a tela de login
const cadform = document.querySelector('.cadastro'); // Formulário de cadastro
const logueform = document.querySelector('.login'); // Formulário de login
const errorMessage = document.getElementById('error-message'); // Mensagem de erro

// Dados de login (Email e Senha corretos)
const emailCorreto = "usuario@exemplo.com"; // Altere para o email desejado
const senhaCorreta = "senha123"; // Altere para a senha desejada

// Função para alternar entre as telas
function toggleForms(showForm, hideForm) {
  showForm.style.display = "block";  // Torna a tela visível
  hideForm.style.display = "none";   // Torna a tela invisível
}

// Alternar para a tela de cadastro
btn.addEventListener('click', function() {
  toggleForms(cadform, logueform);  // Exibe o formulário de cadastro e oculta o de login
});

// Alternar para a tela de login
btn2.addEventListener('click', function() {
  toggleForms(logueform, cadform);  // Exibe o formulário de login e oculta o de cadastro
});

// Validação de login
document.getElementById('logue').addEventListener('submit', function(event) {
  event.preventDefault();  // Previne o comportamento padrão do formulário (envio)
  
  const email = document.getElementById('emaillogin').value; // Pega o email inserido
  const password = document.getElementById('passwordLogin').value; // Pega a senha inserida

  // Verifica se os campos estão preenchidos
  if (!email || !password) {
    errorMessage.innerText = 'Por favor, preencha todos os campos.';  // Mensagem de erro caso algum campo não tenha sido preenchido
    errorMessage.style.display = 'block';
  } else if (email !== emailCorreto || password !== senhaCorreta) {
    // Verifica se o email ou a senha estão incorretos
    errorMessage.innerText = 'Email ou senha errados.';
    errorMessage.style.display = 'block';  // Exibe a mensagem de erro
    alert("Email ou senha errados!");  // Exibe um alerta de erro
  } else {
    // Se o login for bem-sucedido
    errorMessage.style.display = 'none';  // Esconde qualquer mensagem de erro
    alert("Login realizado com sucesso!");  // Exibe um alerta de sucesso
  }
});

// Validação de cadastro
document.getElementById('cad').addEventListener('submit', function(event) {
  event.preventDefault();  // Previne o envio padrão do formulário
  
  const primeiroNome = document.getElementById('primeiroNome').value;
  const sobreNome = document.getElementById('sobreNome').value;
  const email = document.getElementById('Email').value;
  const senha = document.getElementById('password').value;

  // Verifica se todos os campos estão preenchidos
  if (!primeiroNome || !sobreNome || !email || !senha) {
    errorMessage.innerText = 'Por favor, preencha todos os campos.';
    errorMessage.style.display = 'block';
  } else if (senha.length < 6) {
    // Verifica se a senha tem pelo menos 6 caracteres
    errorMessage.innerText = 'A senha precisa ter pelo menos 6 caracteres.';
    errorMessage.style.display = 'block';
  } else {
    // Se o cadastro for bem-sucedido
    errorMessage.style.display = 'none';  // Esconde qualquer mensagem de erro
    alert("Cadastro realizado com sucesso!");  // Exibe um alerta de sucesso
  }
});
