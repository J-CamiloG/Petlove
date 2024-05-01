//traemos los elementos del html, las eqtiquetas a las que le vamos a meter el codigo
const main = document.getElementById('main');
//traemos el boton de registrar para posteriormente agregarle la funcion de mostrar el menu
const btnRegistrar = document.querySelector('#btn-registrar');


// el main que pescamos acteriormenten le vamos a meter el html
main.innerHTML = `
        <form >
            <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationDefault01">Nombre mascota</label>
                <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Especie</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Raza</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Edad</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Peso</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div>  
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Estado</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div>  
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Nombre Propietario</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Documento Propietario</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div>  
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Telefono</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div> 
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Correo</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div>  
            <button class="btn btn-primary" type="submit">Registrar</button>
        </form>
    `

// cremos una variable para que en el formulario que metimos al html
const form = document.querySelector('form');
// lre agregamos la clase de Bootstrap d-none para el que el menu
//no se vaya a mostrar hasta que yo le de la orden
form.classList.toggle('d-none')

btnRegistrar.addEventListener('click', ()=>{
    form.classList.toggle('d-none')
})

