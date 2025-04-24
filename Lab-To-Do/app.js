const inputTarea = document.getElementById("input_tarea");
const bntAgregar = document.getElementById("agregarbnt");
const listaTareas = document.getElementById("lista_tareas");
const mjsError = document.getElementById("mjserror");

bntAgregar.addEventListener("click", () => { /* => es = a function() */
    const texagregar = inputTarea.value.trim();

    if (texagregar === "") {   /*Con este if le digo a la texagregar que si esta vacio muestre el letrero*/
        mjsError.style.display = "block";
        return;
    }
    mjsError.style.display = "none"

    const newtarea = document.createElement("li");
    const texspan = document.createElement("span");
    texspan.textContent = texagregar

    texspan.addEventListener("click", () => {
        texspan.classList.toggle("completa");
    });

    const bntX = document.createElement("button");
    bntX.textContent = "❌";
    bntX.style.margin = "10px";

    bntX.addEventListener("click", () => {
        listaTareas.removeChild(newtarea);
    });

    newtarea.appendChild(texspan);
    newtarea.appendChild(bntX);
    listaTareas.appendChild(newtarea);

    inputTarea.value = "";
});