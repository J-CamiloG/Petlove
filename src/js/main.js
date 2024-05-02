// creamos la base de datos provicional de nuestra applicacion
const dataBase = [
    {
        nombre:'paco',
        edad:'4',
        raza:'criollo',
        especie:'gato ',
        peso:'33kg',
        estado:true,
        url:'https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg?t=st=1714602025~exp=1714605625~hmac=c4875f21d054ed365f6e9ba57aed74fad925f37ee8cdf2fae414e244c4fba8cc&w=1800',
        datosPropietario :{
            nombre: 'camilo',
            documento: '123453453',
            telefono:'324423453',
            correo:'codeartjc@gamil.com'
        }
    },
    {
        nombre:'paco',
        edad:'5',
        raza:'criollo',
        especie:'gato ',
        peso:'33kg',
        estado:true,
        url:'https://img.freepik.com/foto-gratis/primer-disparo-lindo-gato-blanco-negro-acostado_181624-44821.jpg?t=st=1714598433~exp=1714602033~hmac=77e79a3f0ee41cdaf9b69d95c8e76e72d9ddec27064a39de9323c8b7b02338b9&w=1800',
        datosPropietario :{
            nombre: 'camilo',
            documento: '123453453',
            telefono:'324423453',
            correo:'codeartjc@gamil.com'
        }
    },
    {
        nombre:'paco3',
        edad:'4',
        raza:'criollo',
        especie:'gato ',
        peso:'33kg',
        estado:true,
        url:'https://img.freepik.com/foto-gratis/retrato-hermosa-vaca-marron_268835-4039.jpg?t=st=1714608441~exp=1714612041~hmac=0b0c89b59728218d8b895439ad75df9915a5c3a3c80a8a3ba67925c6efa3d111&w=740',
        datosPropietario :{
            nombre: 'camilo',
            documento: '123453453',
            telefono:'324423453',
            correo:'codeartjc@gamil.com'
        }
    },
    {
        nombre:'paco4',
        edad:'4',
        raza:'criollo',
        especie:'gato ',
        peso:'33kg',
        estado:true,
        url:'https://img.freepik.com/foto-gratis/vista-cachorro-leon-estado-salvaje_23-2150374811.jpg?t=st=1714609223~exp=1714612823~hmac=131587130b7da6c4f201ba7cfcfdd72a87f4395b51f14c4cff49a81c57df94ad&w=740',
        datosPropietario :{
            nombre: 'camilo',
            documento: '123453453',
            telefono:'324423453',
            correo:'codeartjc@gamil.com'
        }
    },
    {
        nombre:'paco5',
        edad:'4',
        raza:'criollo',
        especie:'gato ',
        peso:'33kg',
        estado:true,
        url:'https://img.freepik.com/psd-gratis/lindo-perro-retrato-aislado_23-2150194076.jpg?t=st=1714609295~exp=1714612895~hmac=6ad9e057c8f26a337f940624871a423022d53410d5780374b8c32484e3006cef&w=826',
        datosPropietario :{
            nombre: 'camilo',
            documento: '123453453',
            telefono:'324423453',
            correo:'codeartjc@gamil.com'
        }
    },
    {
        nombre:'paco6',
        edad:'4',
        raza:'criollo',
        especie:'gato ',
        peso:'33kg',
        estado:true,
        url:'https://img.freepik.com/psd-gratis/lindo-perro-retrato-aislado_23-2150194076.jpg?t=st=1714609295~exp=1714612895~hmac=6ad9e057c8f26a337f940624871a423022d53410d5780374b8c32484e3006cef&w=826',
        datosPropietario :{
            nombre: 'camilo',
            documento: '123453453',
            telefono:'324423453',
            correo:'codeartjc@gamil.com'
        }
    },
]

//vamos a generar el codigo html de nuestra pagina web primero
const header = document.querySelector('#app')
header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-primary-subtle >
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Petlove</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
                <a  class="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li class="nav-item">
                <a id="btn-registrar" class="nav-link" href="#">Registrar mascota</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" id='consultar' href="#">Consultar</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Modificar</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Eliminar</a>
            </li>
        </ul>
        <span class="navbar-text">
        </span>
        </div>
    </div>
</nav>
`
//------------------------------------------logica e inyeccion de codigo section Form----------------------------
//pescamos el main desde el html
const main = document.getElementById('main');
//creamos una vandera para formulario, para saber si esta visible o no,
//la inicializamos en false
let formularioVisible = false;

//creamos la funcion que se va ejecutar cuando hagamos click en el btn de la navbar
function toggleConsulta() {
    //creamos fomulario exixtente como una especie de bandera para determianr si el form ya fue creado o no
    // si no se ha creado, la variable tomara el valor de null  porque no tiene nada y null == false
    //si  el form si fue creado entonces su valor sera true
    const formularioExistente = document.getElementById('container-registrar');

    //comenzamos a condicionar

    if (formularioVisible) { //si formulario visible es true (actualmente es false porque antes lo inicializamos false)
        if (formularioExistente) {
            formularioExistente.remove();
        }
        formularioVisible = false;
    } else { //en la primera activacion del evento este se ejecuta, ya que el anterior es false
        if (!formularioExistente) {
            const containerRegistrar = document.createElement('section'); // creamos el elemento con create element
            containerRegistrar.id = 'container-registrar'; // agregamos el id al elemento para poder manipularlo luego
            main.appendChild(containerRegistrar); //  agragamos el elemento como hijo del main que pescamos anteriormente

            const sectionRegistrar = document.getElementById('container-registrar');
            sectionRegistrar.innerHTML = `
            <p>Formulario registro usuario </p>
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
                </form>` //aca estamos incertando todo el form a nuestro html, 
        }
        formularioVisible = true; // camvbiasmo el valor de visible ya que si llego a este punto significa que se mostro 
    }

    const buttonSubmit = document.getElementById('button-submit');// btn del envio del form

    if (formularioVisible) {//verificamos si el menu esta desplegado para llamar ahi si al evento porque si no daria un error
        buttonSubmit.addEventListener('click',enviarDatos); // escuchamos el evento y ejecutamos su respectiva function
    }
    
}


//creamos la funcion para envair los datos del form y limpiar los inputs
function enviarDatos() {
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
    // funcion para enviar el form
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
    telefonoPropietario.value = "";
    correo.value = "";

}

const btnRegistrar = document.querySelector('#btn-registrar');//btn del navbar seccion registrar 
btnRegistrar.addEventListener('click', toggleConsulta);// escuchamos el evento y ejecutamos su respectiva function


console.log(dataBase);

//------------------------------------------------------------section para consultar ------------

// pescamos el boton del header consultar
const btnConsultar = document.getElementById('consultar');


//  creamso una etiqueta html  section que necesitaremos 
const sectionCard = document.createElement('section')
// le agregamos un id a la eqiqueta que acabamos de crear
sectionCard.id ='container-cards'
sectionCard.classList.add('gap-5','personalizada','d-flex','justify-content-center' ,'align-items-center' ,'vh-100', 'w-100', 'flex-wrap')
// agregamos a section al main para que esa section sea el padre de cada carta
main.appendChild(sectionCard)



//iteramos la data base para saber cuntas carta debe crear el programa para mostrar los datos
for (let index = 0; index < dataBase.length; index++) {
    // le agregamos el =+ para que no se sobre escriba la carta en cada vuelta
    let nombreMascota = dataBase[index]['nombre'];
    let urlMascota = dataBase[index]['url'];
    let edadMascota = dataBase[index]['edad'];
    let razaMascota = dataBase[index]['raza'];
    let especieMascota = dataBase[index]['especie'];
    let pesoMascota = dataBase[index]['peso'];
    let estadoMascota = dataBase[index]['estado'];


        sectionCard.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src='${urlMascota}' class="card-img-top" alt="..." style="object-fit: cover; width: 100%; height: 250px;">
            <div class="card-body">
            <h5 class="card-title">Nombre: <span class="text-danger"> ${nombreMascota} </span></h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bold">Estado: <span class="text-primary"> ${estadoMascota} </span> </li>
                <li class="list-group-item fw-bold">Peso: ${pesoMascota}</li>
                <li class="list-group-item fw-bold"> Especie: ${especieMascota}</li>
                <li class="list-group-item fw-bold"> Raza: ${razaMascota}</li>
                <li class="list-group-item fw-bold"> Edad: ${edadMascota}</li>
            </ul>
        </div>
    `
}
//ocultamos  las section que acabamos de crear para que de inicio no se muestre
sectionCard.classList.add('d-none')

//creamso el avento para ocultar todo con el evento click
btnConsultar.addEventListener('click', ()=>{
    sectionCard.classList.toggle('d-none')
})

//------------------------------------------------------------------------------función actualizar-------------- 

function actualizar() {
    // creamos una sección dentro del main
    let sectionModificar = document.createElement("section")
    main.appendChild(sectionModificar)
    // agregamos la barra de busqueda
    sectionModificar.innerHTML= `
        <form class="d-flex" role="search" >
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
            <button class="btn btn-outline-success" type="submit" id="btn-search">Search</button>
        </form>`
        // buscamos al botón de buscar
        let btnSearch = document.getElementById("btn-search");

        // por medio del click extraemos el valor del input
        btnSearch.addEventListener("click", (e) => {
            e.preventDefault();
            let search = document.querySelector("#search").value
            buscarParametro(search,sectionModificar)
        })
}

function buscarParametro(search,sectionModificar) {
    const mascotaEncontrada = dataBase.find(mascota => mascota.nombre === search)
        if (mascotaEncontrada) {
            let cardMacotaEncotrada = document.createElement("section")

            cardMacotaEncotrada.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src=' class="card-img-top" alt="..." style="object-fit: cover; width: 100%; height: 250px;">
                    <div class="card-body">
                        <h5 class="card-title">Nombre: <span class="text-danger">  </span></h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item fw-bold">Estado: <span class="text-primary"> </span> </li>
                        <li class="list-group-item fw-bold">Peso: </li>
                        <li class="list-group-item fw-bold"> Especie:</li>
                        <li class="list-group-item fw-bold"> Raza: </li>
                        <li class="list-group-item fw-bold"> Edad: </li>
                    </ul>
                </div>
            `
            sectionModificar.appendChild(cardMacotaEncotrada)
        }
}



actualizar()
console.log(search.value);
