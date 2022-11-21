
// Implementar un buscador de datos, donde los resultados se muestren tan 
// pronto el usuario escriba el texto en el imput disponible

const input = document.getElementById('input');
const resultados = document.getElementById('resultados');

input.addEventListener('input', ()=>{
    resultados.innerHTML = '';
    const valor = input.value.toLowerCase();
    const datosFiltrados = DATOS.filter(dato=> dato.nombre.toLowerCase().indexOf(valor) > -1);
    const fragmento = document.createDocumentFragment();
    for(const dato of datosFiltrados){
        fragmento.appendChild(generarElemento(dato));
    }
    resultados.appendChild(fragmento);
})

function generarElemento(info) {

    const span = document.createElement('span');
    span.innerHTML = `<b>id:</b> ${info.id}<br>
        <b>nombre:</b> ${info.nombre}<br>
        <b>compania</b> ${info.compania}<br>
        <b>fecha de nacimiento:</b> ${info.fdn}<br>
        <b>direccion:</b> ${info.direccion}<br>
        <b>acerca:</b> ${info.acerca}`;

        return span;
}

