
/*var newData = document.querySelector('.response');
let valoresPiramide,coma = ",";
let piramide = [], arregloHijo = [],arrayDeCadenas=[],valoresDeX=[],valoresDeY=[];

valoresPiramide= newData.k;
tamañoPiramide=valoresPiramide.length;
arrayDeCadenas = valoresPiramide.split(coma);

//Descompone la cadena de valores y los guarda en un arregloHIjo para luego guardarlo en el arreglo piramide
//crear un arrego de arreglos
for (var i=1; i <=arrayDeCadenas.length; i++) {
    for(var j = 0; j<i; j++){
    var valorString = " ";
    var valorInt;
    valorString = arrayDeCadenas[0];
    valorInt = parseInt(valorString);
    arregloHijo.push(valorInt);
    arrayDeCadenas.shift();
    }

    piramide.push(arregloHijo);
    arregloHijo = [];  
 }

 //Crea etiquetas li para mostrar los valores de la piramide.
for(var i = 0; i<piramide.length; i++){
    // const newElement = document.createElement("li");
    // newElement.classList.add("li");
    // newElement.textContent = piramide[i];
    // document.querySelector(".contenedor").appendChild(newElement);
    // document.write(piramide[i]+"<br>");
}

let valorX=0, comparadorR=0, tamañoPiramideMenos=piramide.length-1, rutaActual=0, rutaMayor=0;

//Indica las veces que se va a repetir el cliclo interno
for(vuelta=piramide.length-1; vuelta>0; vuelta--){
    if(vuelta==tamañoPiramideMenos){
        v_piramideMenos=tamañoPiramideMenos
    }else if(vuelta<tamañoPiramideMenos && vuelta!=0){
        v_piramideMenos=tamañoPiramideMenos-1
    }
    //itera el valor de uso para comprar con la fila y saber si aumenta x o no
    for(comparaFila=v_piramideMenos+1; comparaFila>comparadorR; comparaFila--){

        
        //visita cada fila para comprar con comparaFila y recorrer las rutas correctas
        for(valorY=piramide.length-1; valorY>=0; valorY--){
            if(valorX>=valorY){
                v_valorX=valorY
                rutaActual=rutaActual+piramide[valorY][v_valorX]
                valoresDeY.push(valorY);
                valoresDeX.push(v_valorX);
            }else{
                if((comparaFila!=valorY && comparaFila>valorY)&&(valorY!=0)){
                    v_valorX=valorX
                    rutaActual=rutaActual+piramide[valorY][v_valorX]
                    valoresDeY.push(valorY);
                    valoresDeX.push(v_valorX);
                }else if(comparaFila==valorY || comparaFila<valorY){
                    v_valorX=valorX+1
                    rutaActual=rutaActual+piramide[valorY][v_valorX]
                    valoresDeY.push(valorY);
                    valoresDeX.push(v_valorX);
                }else if(valorY==0){
                    v_valorX=0
                    rutaActual=rutaActual+piramide[valorY][y]
                    valoresDeY.push(valorY);
                    valoresDeX.push(v_valorX);
                }

            }
            
        }

        if(rutaActual>rutaMayor){
            rutaMayor=rutaActual
        }
        
        // document.write(+rutaActual+" "+"<b>"+rutaMayor+"</b>")
        // document.write("<br>")
        rutaActual=0
    }

    valorX++
    comparadorR++
}
console.log(rutaMayor);*/