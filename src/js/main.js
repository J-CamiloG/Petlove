// creamos la base de datos provicional de nuestra applicacion
const dataBase = [
    {
        nombre:'paco',
        edad:'4',
        raza:'criollo',
        especie:'gato ',
        peso:'33kg',
        estado:true,
        url:'https://img.freepik.com/foto-gratis/vista-superior-dueno-acariciando-perro_23-2149872902.jpg?t=st=1714591690~exp=1714595290~hmac=c7e78956dcf48db831ab773ed7461c8b80199bbeba538e39fc2943b2a17b0e04&w=826',
        datosPropietario :{
            nombre: 'camilo',
            documento: '123453453',
            telefono:'324423453',
            correo:'codeartjc@gamil.com'
        }
    },
    {
        nombre:'paco',
        edad:'4',
        raza:'criollo',
        especie:'gato ',
        peso:'33kg',
        estado:true,
        url:'https://img.freepik.com/foto-gratis/vista-superior-dueno-acariciando-perro_23-2149872902.jpg?t=st=1714591690~exp=1714595290~hmac=c7e78956dcf48db831ab773ed7461c8b80199bbeba538e39fc2943b2a17b0e04&w=826',
        datosPropietario :{
            nombre: 'camilo',
            documento: '123453453',
            telefono:'324423453',
            correo:'codeartjc@gamil.com'
        }
    },
]

//traemos los elementos del html, las eqtiquetas a las que le vamos a meter el codigo
const main = document.getElementById('main');

//traemos el boton de registrar para posteriormente agregarle la funcion de mostrar el menu
const btnRegistrar = document.querySelector('#btn-registrar');


// el main que pescamos acteriormenten le vamos a meter el html
main.innerHTML = `
    <section>
        <form >
            <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationDefault01">Nombre mascota</label>
                <input type="text" class="form-control" id="nombre-mascota" value="" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault01">Ingresa Url foto</label>
                <input type="text" class="form-control" id="url-mascota" value="" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Especie</label>
                <input type="text" class="form-control" id="especie"  value="" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Raza</label>
                <input type="text" class="form-control" id="raza"  value="" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Edad</label>
                <input type="text" class="form-control" id="edad" value="" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Peso</label>
                <input type="text" class="form-control" id="peso" value="" required>
            </div>  
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Estado</label>
                <input type="text" class="form-control" id="estado"  value="" required>
            </div>  
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Nombre Propietario</label>
                <input type="text" class="form-control" id="nombre-propietario"  value="" required>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Documento Propietario</label>
                <input type="text" class="form-control" id="documetno-propietario"  value="" required>
            </div>  
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Telefono</label>
                <input type="text" class="form-control" id="telefono"  value="" required>
            </div> 
            <div class="col-md-4 mb-3">
                <label for="validationDefault02">Correo</label>
                <input type="text" class="form-control" id="correo"  value="" required>
            </div>  
            <button id="button-submit" class="btn btn-primary" type="submit">Registrar</button>
        </form>
    </section>
    `

// cremos una variable para que en el formulario que metimos al html
const form = document.querySelector('form');

// lre agregamos la clase de Bootstrap d-none para el que el menu
//no se vaya a mostrar hasta que yo le de la orden
form.classList.toggle('d-none');

//creamor las variables para almacenar los datos del form
let nombreMascota = document.getElementById('nombre-mascota');
let urlMascota = document.getElementById('url-mascota')
let especieMascota = document.getElementById('especie');
let razaMascota = document.getElementById('raza');
let edadMascota = document.getElementById('edad');
let pesoMascota = document.getElementById('peso');
let estadoMascota = document.getElementById('estado');
let nombrePropietario = document.getElementById('nombre-propietario');
let documentoPropietario = document.getElementById('documetno-propietario');
let telefonoPropietario = document.getElementById('telefono');
let correoPropietario = document.getElementById('correo');

// llamamos al boton del formulario para escuchar el avento
let buttonSubmit = document.getElementById('button-submit')

//cremos el evento de el boton submit 
// funcion para enviar el form
buttonSubmit.addEventListener('click',()=>{
    let nuevoUsuario = {
        nombre:nombreMascota.value,
        url:urlMascota.value,
        edad:especieMascota.value,
        raza:razaMascota.value,
        especie:especieMascota.value,
        peso:pesoMascota.value,
        estado:estadoMascota.velue,
        datosPropietario :{
            nombre:nombrePropietario.value,
            documento:documentoPropietario.velue,
            telefono:documentoPropietario.value,
            correo:correoPropietario.value
        }
    }

    //enviamos los nuevos adtos a nuestro array
    dataBase.push(nuevoUsuario);

    //limpiamos el valor del html de los form
    nombreMascota.value = "";
    especieMascota.value = "";
    razaMascota.value = "";
    edadMascota.value = "";
    pesoMascota.value = "";
    estadoMascota.value = "";
    nombrePropietario.value = "";
    documentoPropietario.value = "";
    telefono.value = "";
    correo.value = "";
})

//funcion para desplegar menu
btnRegistrar.addEventListener('click', ()=>{
    form.classList.toggle('d-none');
})

//------------------------------------------------------------section para consultar ------------

// pescamos el boton del header consultar
const btnConsultar = document.getElementById('consultar');


//  creamso una etiqueta html  section que necesitaremos 
const sectionCard = document.createElement('section')
// le agregamos un id a la eqiqueta que acabamos de crear
sectionCard.id ='container-cards'
// agregamos a section al main para que esa section sea el padre de cada carta
main.appendChild(sectionCard)

//iteramos la data base para saber cuntas carta debe crear el programa para mostrar los datos
for (let index = 0; index < dataBase.length; index++) {
    // le agregamos el =+ para que no se sobre escriba la carta en cada vuelta
    console.log('estoy por entrar');
    sectionCard.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src='${index.url}' class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    `
}
//ocultamos  las section que acabamos de crear para que de inicio no se muestre
sectionCard.classList.add('d-none')

//creamso el avento para ocultar todo con el evento click
btnConsultar.addEventListener('click', ()=>{
    sectionCard.classList.toggle('d-none')
})




