document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Con esto evito que el formulario se envíe

    // Para obtener los valores del formulario
    var dniNumero = document.getElementById('dniNumero').value;
    var dniLetra = document.getElementById('dniLetra').value.toUpperCase();

    // Para definir las letras del DNI
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    // Para validar si el número de DNI es correcto
    if (isNaN(dniNumero) || dniNumero < 0 || dniNumero > 99999999) {
        document.getElementById('resultado').textContent = "El número proporcionado no es válido.";
        return;
    }

    // Para calcular la letra correspondiente
    var letraCalculada = letras[dniNumero % 23];

    // Para comparar la letra calculada con la letra proporcionada
    if (letraCalculada !== dniLetra) {
        document.getElementById('resultado').textContent = "La letra indicada no es correcta.";
    } else {
        document.getElementById('resultado').textContent = "El número y la letra de DNI son correctos.";
    }
});
