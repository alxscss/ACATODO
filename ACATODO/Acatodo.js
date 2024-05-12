// Este código maneja el inicio de sesión existente
document.getElementById('login-button').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (email.endsWith("@pcpuma.acatlan.unam.mx")) {
        // Redirige a la página principal
        window.location.href = "index.html";
    } else {
        alert("El correo electrónico no es válido. Por favor, ingrese un correo de la UNAM.");
    }
});

// Manejador de eventos para el botón de registro, si existe en la misma página
if (document.getElementById('register-button')) {
    document.getElementById('register-button').addEventListener('click', function() {
        window.location.href = "registro.html";
    });
}

//REPORTES
function confirmarEnvio() {
    if (confirm('¿Estás seguro de enviar el reporte?')) {
        var form = document.getElementById('form-reporte');
        // Aquí podrías enviar el formulario, por ejemplo:
        // form.submit();
        // Por ahora, solo mostraremos un mensaje
        alert('Reporte enviado.');
    }
}

// ENCARGOS


document.addEventListener('DOMContentLoaded', function() {
    window.cambiarCantidad = function(articulo, cambio) {
        var inputCantidad = document.getElementById('cantidad-' + articulo);
        var nuevaCantidad = parseInt(inputCantidad.value, 10) + cambio;
        if (nuevaCantidad < 0) {
            nuevaCantidad = 0;
        }
        inputCantidad.value = nuevaCantidad;
    };

    document.getElementById('boton-comprar').addEventListener('click', function() {
        console.log("El botón fue presionado."); // Verifica que el clic es detectado
        alert('Orden enviada.');
    });
    
});

// pumabus

document.addEventListener('DOMContentLoaded', function() {
    const timers = [
        { id: 'timer1', seconds: 5 * 60 },
        { id: 'timer2', seconds: 12 * 60 },
        { id: 'timer3', seconds: 22 * 60 },
        { id: 'timer4', seconds: 30 * 60 + 1 } // Un poco más de 30 minutos
    ];

    timers.forEach(timer => {
        setInterval(() => {
            if (timer.seconds > 0) {
                timer.seconds--;
                const minutes = Math.floor(timer.seconds / 60);
                const seconds = timer.seconds % 60;
                const timeString = `${minutes} min ${seconds} sec`;
                document.getElementById(timer.id).textContent = `Hora de salida: en ${timeString}`;
            } else {
                document.getElementById(timer.id).textContent = "El bus ha salido.";
            }
        }, 1000);
    });
});
