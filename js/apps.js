let listaTareas = [];
let contenedorForm = document.querySelector(`#contenedorForm`)
let formAgregar = document.getElementById(`formAgregar`)
let contenedorLista = document.querySelector(`#listaDeTareas`)
formAgregar.addEventListener(`submit`, trabajarLista )

function trabajarLista(e){
    e.preventDefault()
    let tareaAgregada = document.getElementById(`inputAgregar`).value
//    console.log(tareaAgregada)
    listaTareas.push(tareaAgregada)
//    console.log(listaTareas)
    agregarTarea(tareaAgregada, listaTareas.length - 1) 
    formAgregar.reset()
}

function agregarTarea(tareaNueva, posicion){
    contenedorLista.innerHTML += `<li class="list-group-item d-flex justify-content-between my-1"><p>${tareaNueva}</p>
    <button class="btn btn-outline-danger" onclick="eliminarTarea(${posicion})"><i class="bi bi-x-square-fill"></i></button>    
    </li>`
}

function eliminarTarea(lugar){
    listaTareas.splice(lugar, 1)
    contenedorLista.innerHTML = ``
    listaTareas.forEach((tareaNueva, posicion) => agregarTarea(tareaNueva, posicion))
}


