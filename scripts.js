// Pegar o formulário
const form = document.querySelector('form');

// Quando o formulário for enviado
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que recarregue a página
  Swal.fire({
    title: 'Seu formulário foi enviado com sucesso!',
    icon: 'success',
    confirmButtonColor: '#4C98E3',
    confirmButtonText: 'Ok',
    customClass: {
      popup: 'rounded-4'
    }
  });

  // limpar o formulário depois do envio
  form.reset();
});