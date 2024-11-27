function validarFormulario(event) {
    // Obter os valores do formulário
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;
  
    // Verificar se a idade é maior ou igual a 18
    if (idade < 18) {
      alert("Você precisa ter 18 anos ou mais para acessar o site.");
      event.preventDefault(); // Impede o redirecionamento
      return false; // Impede o envio do formulário
    }
  
    // Validar o e-mail: deve conter @gmail.com ou @hotmail.com
    if (!email.includes("@gmail.com") && !email.includes("@hotmail.com")) {
      alert("O e-mail deve ser do tipo @gmail.com ou @hotmail.com.");
      event.preventDefault(); // Impede o redirecionamento
      return false; // Impede o envio do formulário
    }
  
    return true; // Permite o envio do formulário se todas as condições forem atendidas
  }
  