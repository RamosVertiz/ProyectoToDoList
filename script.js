let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")
let input = document.querySelector(".input")

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea)
  }

  crearDiv(nuevaTarea) {
    let botonEditar = document.createElement("button")
    let botonRemover = document.createElement("button")
    //creando input
    let inputItem = document.createElement("input")
    inputItem.value = nuevaTarea

    inputItem.disabled = true
    inputItem.classList.add("item-input")

    let nuevoDiv = document.createElement("div")
    nuevoDiv.classList.add("item")

    //BOTON EDITAR       
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
    botonEditar.classList.add("boton-editar")

    //BOTON REMOVER       
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
    botonRemover.classList.add("boton-remover")

    //3-juntar todos los elementos en un div y luego en container       
    nuevoDiv.appendChild(inputItem)
    nuevoDiv.appendChild(botonEditar)
    nuevoDiv.appendChild(botonRemover)
    container.appendChild(nuevoDiv)

    botonEditar.addEventListener("click", function () {
      inputItem.disabled = !inputItem.disabled;
      if (inputItem.disabled == false) {
        botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
      } else {
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
      }
    })

    botonRemover.addEventListener("click", () => {
      nuevoDiv.remove()
    })
  }

}

//5. Verificar El input

botonAgregar.addEventListener("click", function chequearInput() {
  if (input.value !== "" || input.value !== " ") {
    new Item(input.value)
    input.value = ""
  }
})


        // inputItem.setAttribute('type', 'text') => no hace falta
        // inputItem.setAttribute("disabled", "true") => no hace falta