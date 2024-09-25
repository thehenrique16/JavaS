//Seleciona o botão e o elemento body*/
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

//Adiciona um evenro de clique ão botão para alternar entre os temas
themeToggleBtn.addEventListener('clic',function(){
  //Alterna entre as classes 'light-theme' e 'dark-theme' no body
  body.classList.toggle('dark-theme');

// ALTERA o texto do botão com base no tema atual
 if(body.classList.contains('dark-theme')) {
    themeToggleBtn.textContent = 'Mudar para Tema Claro';
}else{
    themeToggleBtn.textContent = 'Mudar para Tema Escuro';
 }
});
