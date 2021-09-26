const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo')


function cargarEventos() {

    // Agregar productos a la compra
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra())

    // Eliminar producto de la compra
    carrito.addEventListener('click', (e) => {compra.eliminarProducto(e)});

    // Calculo de los productos en la compra
    compra.calcularTotal()

    // Procesar compra
    procesarCompraBtn.addEventListener('click', procesarCompra);
}
cargarEventos();


function procesarCompra(e) {
    e.preventDefault() 

    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Seleccione un producto',
            timer: 1000,
            showConfirmButton: false
    }).then(function() {
        window.location = 'index.html'
    })} else if(cliente.value === '' || correo.value === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese los campos requeridos',
            timer: 1000,
            showConfirmButton: false
    })} else {
        const cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = 'block';

        const enviado = document.createElement('img');
        enviado.src = '../imagenes/mail.gif';
        enviado.style.display = 'block'
        enviado.width = '150';

        setTimeout(() => {
            cargandoGif.style.display = "none";
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(() => {
                enviado.remove();
                compra.vaciarLocalStorage();
                window.location = 'index.html'
            , 2000});
        }, 3000)
    }
}