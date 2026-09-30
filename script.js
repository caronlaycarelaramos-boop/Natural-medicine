let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

/* ======================================================= */

function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    /*const email = document.getElementById('email').value;*/
    const number = document.getElementById('number').value;
    const date = document.getElementById('date').value;

    if(name === "") {
        alert("Por favor, escribe al menos tu nombre antes de enviar.");
        return;
    }

    // Tu número con código de país (Dominicana es 1 o 1809/1829/1849)
    // Es vital que el número empiece con el código de país sin el "+"
    const myNumber = "8298088882"; 

    const text = "Hola! Quiero agendar una cita:%0A" + 
                 "*Nombre:* " + encodeURIComponent(name) + "%0A" +
                 /*"*Email:* " + encodeURIComponent(email) + "%0A" +*/
                 "*Teléfono:* " + encodeURIComponent(number) + "%0A" +
                 "*Fecha:* " + encodeURIComponent(date);

    const whatsappUrl = "https://api.whatsapp.com/send?phone=" + myNumber + "&text=" + text;

    window.open(whatsappUrl, '_blank');
}