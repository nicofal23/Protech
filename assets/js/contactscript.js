
        (function() {
            // Initialize emailjs with your user ID
            emailjs.init('8x6BkW-564iZdIkR5');
        })();

        // Add event listener to the contact form
        document.getElementById('contact_form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Collect the form data
            var name = document.getElementById('nombre').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;

            // Create the email params
            var params = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            // Send the email using emailjs
            emailjs.send('service_eureybs', 'template_7wfbxfs', params)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Mensaje enviado con éxito.');
                    // Reset the form
                    document.getElementById('contact_form').reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Error al enviar el mensaje.');
                });
        });