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


// Definir una lista de productos con sus imágenes y descripciones
const products = [
    { name: "Portaplanos", image: "portaplanos.jpg" },
    { name: "Folder", image: "folder.jpg" },
    // Añade más productos aquí si es necesario
];

// Función para cambiar el producto cada 5 segundos
let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % products.length;
    updateProduct(products[currentIndex]);
}, 5000);

// Función para actualizar la imagen y la descripción del producto
function updateProduct(product) {
    document.getElementById("productImage").src = product.image;
    document.getElementById("productName").innerText = product.name;
}

// Actualizar el primer producto al cargar la página
updateProduct(products[currentIndex]);


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
