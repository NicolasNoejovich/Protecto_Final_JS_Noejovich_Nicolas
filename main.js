
let mail = prompt ("Por favor ingrese su email");
let contraseña = prompt ("ingrese su contraseña");
let celular = prompt ("ingrese su número de telefono");
alert (`Tu sesión se ha iniciado con éxito, bienvenido usuario ${mail}`);


const productos = [   
    {codigo: 000 , nombre: "Cafe suave",  cantidad:250 , precio:1250},
    {codigo: 001 , nombre: "Cafe fuerte",  cantidad:250 , precio:1350},
    {codigo: 002 , nombre: "Cafe especial",  cantidad:250 , precio:1550},
    {codigo: 003 , nombre: "Capuccino",  cantidad:250 , precio:1550},
    {codigo: 004 , nombre: "Mocaccino",  cantidad:250 , precio:1650},
    {codigo: 005 , nombre: "Chococchino",  cantidad:250 , precio:1400},
    {codigo: 006 , nombre: "Esspreso",  cantidad:250 , precio:1050},
    {codigo: 007 , nombre: "Cafe importado",  cantidad:250 , precio:2000},

];


const carroDeCompras = []
let cafe;

alert (`Indique el número del producto que desea llevar. Escriba salir para terminar la compra`);

let mensaje = prompt( "000 cafe suave, 001 cafe fuerte, 002 cafe especial, 003  capuccino, 004 mocaccino, 005 chococcino, 006 esspereso, 007 cafe importado.  " ) ;

// Opción A 

while (mensaje !== "salir") {
    cafe = productos.find (producto => producto.codigo == mensaje);
    carroDeCompras.push(cafe);
    mensaje = prompt( "000 cafe suave, 001 cafe fuerte, 002 cafe especial, 003  capuccino, 004 mocaccino, 005 chococcino, 006 esspereso, 007 cafe importado" ) ;
}

console.log(carroDeCompras);


const result= carroDeCompras.reduce((acumulador, elemento) => acumulador + elemento.precio ,0)

let total = prompt (` Su total es de ${result} desea proseguir con el pago?`);

console.log(result);    

if(total == "no" || total == "No"|| total == "NO" ){
alert (`Su compra ha sido cancelada, que tenga un buen día`);
} else if (total == "si" || total == "SI"|| total == "Si" ){
alert (`Gracias por confiar en nosotros que tenga un buen dia`);
};


// Opción B 

/*if (mensaje == 000  ) {
    cafe = productos.find (producto => producto.codigo == 000);
} else if (mensaje == 001  ) {
    cafe = productos.find (producto => producto.codigo == 001);
} else if (mensaje == 002  ){
    cafe = productos.find (producto => producto.codigo == 002);
} else if (mensaje == 003  ){
    cafe = productos.find (producto => producto.codigo == 003);
} else if (mensaje == 004  ) {
    cafe = productos.find (producto => producto.codigo == 004);
} else if (mensaje == 005  ){
    cafe = productos.find (producto => producto.codigo == 005);
} else if (mensaje == 006  ){
    cafe = productos.find (producto => producto.codigo == 006);
} else if (mensaje == 007  ){
    cafe = productos.find (producto => producto.codigo == 007);
} else {
    alert ("No tenemos el producto que estas buscando");
}

console.log(cafe);
*/






