let listaProductos = document.querySelector("#listaProductos");
let listaCategorias = document.querySelector("#listaCategorias");
let carrito = [];
let verCarrito=document.querySelector("#verCarrito")
const URLproductos = "https://fakestoreapi.com/products/";
const URLCategorias="https://fakestoreapi.com/products/categories";

function cerrarModal(){
    const modalElement=document.querySelector("#carrito");

}
 
fetch(URLproductos)
    .then(res=>res.json())
    .then( productosObtenidos => {
        console.log(productosObtenidos);
        listaProductos.innerHTML = "";
        productosObtenidos.forEach( (producto, indice) => {
            listaProductos.innerHTML += `
                <div class="col-12 col-md-3 py-5">
                    <div class="card">
                        <img src="${ producto.image }" class="p-3 imagenProducto card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${ producto.title.slice(0,20) }</h5>
                            <p class="card-text">${ producto.description.slice(0,70) }</p>
                            <p class="card-text text-danger">$ ${ producto.price }</p>
                            <p class="card-text text-danger">$ ${ producto.id }</p>
                            <a href="#" class="btn btn-primary w-100">Comprar</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }); 

    fetch(URLCategorias)
    .then(res=>res.json())
    .then( categoriasObtenidas => {
        console.log(categoriasObtenidas);
        listaCategorias.innerHTML = "";
        categoriasObtenidas.forEach( (categoria, indice) => {
            categoria= categoria.replace("'","");

            listaCategorias.innerHTML += `
                <li class="nav-item">
                <a href="#" onclick="nuestroProductos('${categoria}')" class="nav-link">
                    ${categoria.toUppercase()} 
                </a>
                </li>
            `;
        });
        document.querySelector('btn-outline-primary').forEach(button=>{
button.addEventListener('click',agregarCarrito);
        })
    }); 

    function agregarCarrito(){
        event.preventDefault();
        const idProducto=event.target.databaset.id;
        fetch(`$(URL)/$(id)`)
        .then(response=>response.json())
        .then(producto=>{
            carrito.push(producto);
            localStorage.setItem('carrito',JSON)
        })
    }