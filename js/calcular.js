function calcular(){
    let n1, n2, n3, promedio, ap="";
    n1=document.getElementById("num1").value;
    n2=document.getElementById("num2").value;
    n3=document.getElementById("num3").value;
    promedio=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    promedio=Math.round(promedio)
    if(promedio<7){
        ap="Reprobado";
    }else{
        ap="Aprobado";
    }
    document.getElementById("prom").innerHTML=(`El promedio de notas es: ${promedio}`);
    document.getElementById("apr").innerHTML=(`El estudiante ha sido ${ap}`);
}