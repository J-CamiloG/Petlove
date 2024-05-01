const header = document.querySelector('#app')

header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
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
                <a class="nav-link" href="#">Consultar</a>
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