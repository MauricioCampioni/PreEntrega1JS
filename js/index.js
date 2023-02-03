const costoProducto1=15000;
const costoProducto2=15000;
const costoProducto3=15000;
const costoProducto4=6500;
const costoProducto5=13500
let total=0;
function mostrarTotal(total){
    alert("El total de su compra es de $"+total);
}
do{
    
    let valorIngresado=prompt("BIENVENIDO A BOCASTORE\nSeleccione el producto que desea comprar\n1.Camiseta Titular -$15.000\n2.Camiseta Suplente -$15.000\n3.Camiseta Mujer Titular-$15.000\n4.Short titular niño -$6.500\n5.Buzo Hombre Titular -$13.500");
    if(valorIngresado=="1"){
        total+=costoProducto1;
    }else if(valorIngresado=="2"){
        total+=costoProducto2;
    }else if(valorIngresado=="3"){
        total+=costoProducto3;
    }else if(valorIngresado=="4"){
        total+=costoProducto4;
    }
    else if(valorIngresado=="5"){
        total+=costoProducto5;
    }
    else{
        alert("El valor ingresado no es valido");
    }
}while(confirm("Desea seguir comprando?"))

mostrarTotal(total);