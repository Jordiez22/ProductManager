const contenedor = new Contenedor()

contenedor.agregar(new Product {nombre:'celular',descripcion del producto:'',precio:'500',ruta de imagen:'',codigo identificador:'',stock:''})

contenedor.agregar({nombre:'tablet',precio:'250'})

contenedor.agregar({nombre:'auriculares',precio:'100'})

console.log(contenedor.obtenerTodo())

[Producto{producto:'celular',precio:'500'}, Producto{producto:'tablet',precio:'250'}, Producto{producto:'auriculares',precio:'100'}]

console.log(contenedor.obtenerPorProducto('') )

 