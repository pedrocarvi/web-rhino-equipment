class Carrito {

    // Añadir producto al carrito
    comprarProducto(e) {
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.parentElement.parentElement.parentElement;
            this.leerDatosProducto(producto)
            // console.log(producto)
        }
    }

    // Mostrar los datos del producto en el carrito de compras
    leerDatosProducto(producto) {
        const infoProducto = {
            imagen : producto.querySelector('.imagenCarrito').src ,
            titulo: producto.querySelector('h4').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('.mainCompras__comprar a').getAttribute('data-id'),
            cantidad: 1
        }

        // Repeticion del producto en el carrito
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage(); 
        productosLS.forEach(function(productoLS) {
            if(productoLS.id === infoProducto.id) {
                productosLS = productoLS.id
            }
        });
        if (productosLS === infoProducto.id) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'El producto ya esta agregado al carrito',
                timer: 1000,
                showConfirmButton: false,
        })} else {
            this.insertarCarrito(infoProducto)
            }
    }

    insertarCarrito(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>  <img src="${producto.imagen}" width=100>  </td>

        <td> ${producto.titulo} </td>
        
        <td>  ${producto.precio} </td>
        
        <td> <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"> </a> </td>
        `;
        listaProductos.appendChild(row)
        this.guardarProductosLocalStorage(producto);
    }

    // Eliminar carrito
    eliminarProducto(e) {
        e.preventDefault();
        let producto;
        let productoID;
        if(e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        // LS
        this.eliminarProductoLocalStorage(productoID)
        this.calcularTotal()
    }

    // Vaciar carrito
    vaciarCarrito(e) {
        e.preventDefault();
        while(listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        // LS
        this.vaciarLocalStorage();
        return false;
    }

    
    // Guardar en LS
    guardarProductosLocalStorage(producto) {
        let productos ;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage() {
        let productoLS;

        if(localStorage.getItem('productos') === null) {
            productoLS = [];
        } else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        } 
        return productoLS; 
    }


    // Eliminar productos de LS
    eliminarProductoLocalStorage(productoID) {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS, index) {
            if (productoLS.id === productoID) {
                productosLS.splice(index,1);
            }
        });

        localStorage.setItem('productos', JSON.stringify(productosLS))
    }


    // Leer productos del LS
    leerLocalStorage() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>  <img src="${producto.imagen}" width=100>  </td>

        <td> ${producto.titulo} </td>
        
        <td>  ${producto.precio} </td>
        
        <td> <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"> </a> </td>
        `;
        listaProductos.appendChild(row)
        })
    }

    // Vaciar local storage
    vaciarLocalStorage() {
        localStorage.clear()
    }


    // Procesar pedido
    procesarPedido(e) {
        e.preventDefault();

        if (this.obtenerProductosLocalStorage().length === 0) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'El carrito esta vacio',
                timer: 1000,
                showConfirmButton: false
        })} else {
            location.href = 'compra.html';
        }
    }

    leerLocalStorageCompra () {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>  <img src="${producto.imagen}" width=100> </td>

        <td> ${producto.titulo} </td>
        
        <td>  ${producto.precio} </td>
        
        <td> <input type="number" class="form-control cantidad" min="1" value="${producto.cantidad}" </td>

        <td> ${producto.precio * producto.cantidad} </td>
        
        <td> <a href="#" class="borrar-producto fas fa-times-circle" style="font-size: 28px" data-id="${producto.id}"> </a> </td>
        `;
        listaCompra.appendChild(row)
        });
    }

    calcularTotal() {
        let productoLS;
        let total = 0;
        let subtotal = 0;
        let igv = 0;

        productoLS = this.obtenerProductosLocalStorage();
        for (let i = 0; i < productoLS.length; i++){
            let element = Number(productoLS[i].precio * productoLS[i].cantidad )
            total = total + element;
        }
        igv = parseFloat(total * 0.21).toFixed(2)
        subtotal = parseFloat(total-igv).toFixed(2)

        document.getElementById('subtotal').innerHTML = `$${subtotal}`
        document.getElementById('igv').innerHTML = `$${igv}`
        document.getElementById('total').innerHTML = `$${total}`
    }


    
    

}