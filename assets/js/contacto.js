/* =========================================================
   PROTECH ARGENTINA - Formulario de contacto (EmailJS)
   Necesita que antes se carguen EmailJS y SweetAlert2.
   ========================================================= */

const EMAILJS = {
    clavePublica: '8x6BkW-564iZdIkR5',
    servicio: 'service_eureybs',
    plantilla: 'template_7wfbxfs',
};

emailjs.init(EMAILJS.clavePublica);

const formulario = document.getElementById('contact_form');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const datos = {
        name: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send(EMAILJS.servicio, EMAILJS.plantilla, datos)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado!',
                text: 'Tu mensaje ha sido enviado con éxito.',
                confirmButtonText: 'Aceptar',
            });
            formulario.reset();
        })
        .catch((error) => {
            console.log('Error al enviar:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
                confirmButtonText: 'Aceptar',
            });
        });
});
