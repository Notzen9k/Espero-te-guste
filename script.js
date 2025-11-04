let preguntaActual = 1;
let frasesMostradas = 0;
const frases = [
    "Cada vez que pienso en ti, mi corazón late más fuerte. Eres la magia que ilumina mis días grises.",
    "Tu sonrisa es mi sol, tu voz mi melodía favorita. Contigo, el mundo se vuelve un lugar perfecto.",
    "A distancia o cerca, eres mi hogar. Te extraño en cada momento, pero sé que vales la pena.",
    "Eres la razón por la que creo en el amor verdadero. Dulce, cariñosa, y completamente mía en mis sueños.",
    "Tus palabras me sanan, tus risas me alegran. Eres mi refugio, mi amor incondicional.",
    "En tus ojos veo mi futuro, en tu abrazo mi paz. Te amo con cada fibra de mi ser.",
    "Eres la niña de mis ojos, mi princesa encantada. Cada día te quiero más, mi amor eterno.",
    "Tu ternura me desarma, tu amor me fortalece. Juntos somos invencibles, separados somos completos.",
    "Sueño contigo todas las noches, despierto pensando en ti. Eres mi inspiración, mi dulce obsesión.",
    "Te cuidaré como a un tesoro, te amaré como a mi vida. Eres mi razón de ser, mi amor infinito."
];

function responder(pregunta, respuesta) {
    if (respuesta === 'Tú') {
        document.getElementById(`pregunta-${pregunta}`).classList.add('oculto');
        document.querySelectorAll(`#pregunta-${pregunta} + .opcion`).forEach(btn => btn.classList.add('oculto'));
        preguntaActual++;
        if (preguntaActual <= 4) {
            document.getElementById(`pregunta-${preguntaActual}`).classList.remove('oculto');
            document.querySelectorAll(`#pregunta-${preguntaActual} + .opcion`).forEach(btn => btn.classList.remove('oculto'));
        } else {
            // Cambiar a sección de corazones
            document.body.className = 'corazones';
            document.getElementById('seccion-adivinanzas').classList.add('oculto');
            document.getElementById('seccion-corazones').classList.remove('oculto');
        }
    } else {
        alert('¡Piensa de nuevo! Solo hay una respuesta correcta en mi corazón. 😉');
    }
}

function mostrarFrase(index) {
    const display = document.getElementById('frase-display');
    display.textContent = frases[index];
    display.classList.remove('mostrar');
    setTimeout(() => display.classList.add('mostrar'), 10); // Trigger reflow for animation
    frasesMostradas++;
    if (frasesMostradas === 10) {
        document.getElementById('flecha').style.display = 'block';
    }
}

function irAFinal() {
    document.body.className = 'final';
    document.getElementById('seccion-corazones').classList.add('oculto');
    document.getElementById('seccion-final').classList.remove('oculto');
}

function mostrarPedida() {
    document.getElementById('pedida').style.display = 'block';
}
