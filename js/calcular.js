function calcular(){
    let marca, modelo, descuento=0;
    marca=document.getElementById("marca").value;
    modelo=document.getElementById("modelo").value;
    if((marca=="ford")&&(modelo=="fiesta")){
        descuento=5;
    }
        else{if((marca=="ford")&&(modelo=="focus")){
            descuento=10;
        }else{
            descuento="No tiene descuento";
        }
    }
    document.getElementById("descuento").innerHTML=(`El descuento es de: ${descuento} %`);
}