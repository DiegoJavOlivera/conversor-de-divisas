function convertir(){
    let valor = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 468.5;
    let euro = 513.80;
    if (document.getElementById("uno").checked){
        resultado = valor / dolar;
        alert("Tu sueldo en Dolares es de: U$D Blue " + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valor / euro ;
        alert(" Tu sueldo en Euros es de: EUR" + resultado.toFixed(2));
    }
    else{
        alert("TIENE QUE COMPLETAR TODOS LOS REQUERIMIENTOS");
    }
}