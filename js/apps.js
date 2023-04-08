let listaTareas = [];
let btnAgregar = document.getElementById(`btnAgregar`)
let btnEliminar = document.getElementById(`btnEliminar`)
let formAgregar = document.getElementById(`formAgregar`)
formAgregar.addEventListener(`submit`, trabajarLista )
let formEliminar = document.getElementById(`formEliminar`)
formEliminar.addEventListener(`submit`, trabajarFormEliminar)

/*
class ListaTareas{
    #tareas
    constructor(tareas){
        this.#tareas = []
    }
    get mostrarTareas(){
        return this.#tareas
    }
    set cambiarListaTareas(nuevaLista){
        this.#tareas = nuevaLista
    }

    agregarTarea(nuevaTarea){
        this.mostrarTareas.push(nuevaTarea)
    }
    eliminarTarea(tareaAEliminar){
        let nuevaListaTareas = this.mostrarTareas.filter(tarea => tarea.mostrarTareas !== tareaAEliminar)
        this.cambiarListaTareas = nuevaListaTareas
    }
}
*/

function trabajarLista(e){
    let contenedorPadreLista = document.getElementById(`contenedorPadreLista`)
//    console.log(contenedorPadreLista)

    e.preventDefault()
    let tareaAgregada = document.getElementById(`inputAgregar`).value
    console.log(tareaAgregada)
    listaTareas.push(tareaAgregada)
    console.log(listaTareas)

    let tareaNueva = document.createElement(`li`)
    tareaNueva.innerHTML = tareaAgregada
    tareaNueva.className = `text-black`
    contenedorPadreLista.appendChild(tareaNueva)
    formAgregar.reset()
}

function trabajarFormEliminar(e){
    let contenedorPadreListaNueva = document.getElementById(`contenedorPadreListaNueva`)

    e.preventDefault();
    let inputEliminar = document.getElementById(`inputEliminar`).value
    console.log(inputEliminar)
    
    let nuevaListaTareas = listaTareas.filter(tarea => tarea !== inputEliminar)
    let listaFiltrada = document.createElement(`li`)
    listaFiltrada.innerHTML = nuevaListaTareas
    listaFiltrada.className = `text-black`
    contenedorPadreListaNueva.appendChild(listaFiltrada)
    formEliminar.reset()
}