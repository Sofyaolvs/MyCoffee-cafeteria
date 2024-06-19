// voltar para o topo da página
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; // para Safari
    document.documentElement.scrollTop = 0; //  Chrome, Firefox, IE e Opera
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // evita o comportamento padrão de envio do formulário
    let email = document.getElementById('emailInput').value.trim();
    if (email === "") {
        alert("Para receber novidades é preciso preencher o E-mail!");
    } else {
        console.log('E-mail cadastrado: ' + email);
    }
});

//scroll suave
document.querySelectorAll(' a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
