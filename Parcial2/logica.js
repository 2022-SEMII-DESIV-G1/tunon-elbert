var fila1 = [75];
    var fila2 = [95,64];
    var fila3 = [17,47,82];
    var fila4 = [18,35,87,10];
    var fila5 = [20,4,82,47,65];
    var fila6 = [19,1,23,75,3,34];
    var fila7 = [88,2,77,73,7,63,67];
    var fila8 = [99,65,4,28,6,16,70,92];
    var fila9 = [41,41,26,56,83,40,80,70,33];
    var fila10 = [41,48,72,33,47,32,37,16,94,29];
    var fila11 = [53,71,44,65,25,43,91,52,97,51,14];
    var fila12 = [70,11,33,28,77,73,17,78,39,68,17,57];
    var fila13 = [91,71,52,38,17,14,91,43,58,50,27,29,48];
    var fila14 = [63,66,4,68,89,53,67,30,73,16,69,87,40,31];
    var fila15 = [4,62,98,27,23,9,70,98,73,93,38,53,60,4,23];
function DisplayPiramide(arg)
{
    let items = "";
    for(let i= 0;i<arg.length;i++)
        items += `<h3>${arg[i]}</h3>`;
    return items;
}
function DisplayPiramide2(arg,index)
{
    let items = "";
    for(let i= 0;i<arg.length;i++)
    {
       if(i==index)
            items += `<h3 style="background-color: lightcoral">${arg[i]}</h3>`;
        else
                items += `<h3>${arg[i]}</h3>`;
    }
    return items;
}
document.getElementById("piramide").innerHTML = 
`
<ul>
<li>${DisplayPiramide(fila1)}</li>
<li>${DisplayPiramide(fila2)}</li>
<li>${DisplayPiramide(fila3)}</li>
<li>${DisplayPiramide(fila4)}</li>
<li>${DisplayPiramide(fila5)}</li>
<li>${DisplayPiramide(fila6)}</li>
<li>${DisplayPiramide(fila7)}</li>
<li>${DisplayPiramide(fila8)}</li>
<li>${DisplayPiramide(fila9)}</li>
<li>${DisplayPiramide(fila10)}</li>
<li>${DisplayPiramide(fila11)}</li>
<li>${DisplayPiramide(fila12)}</li>
<li>${DisplayPiramide(fila13)}</li>
<li>${DisplayPiramide(fila14)}</li>
<li>${DisplayPiramide(fila15)}</li>
</ul>
`
;
function contar()
{
    var mayor= [];
    var rutaPos=[];
    var ruta=[];
    var mayorTot1 = 0;
    var mayorTot2=0;
    for(var i=0;i<=fila1.length;i++)
    {
        mayor[0]=fila1[i];
        rutaPos[0]=i;
        for (var j=i;j<=i+1;j++)
        { 
            mayor[1]=fila2[j];
            rutaPos[1]=j;
            for (var x=j;x<=j+1;x++)
            {
                mayor[2]=fila3[x];   
                rutaPos[2]=x;                 
                for (var z=x;z<=x+1;z++)
                {
                    mayor[3]=fila4[z];
                    rutaPos[3]=z;
                    for(var a=z;a<=z+1;a++)
                    {
                        mayor[4]=fila5[a];
                        rutaPos[4]=a;
                        for(var b=a;b<=a+1;b++)
                        {
                            mayor[5]=fila6[b];
                            rutaPos[5]=b;
                            for(var c=b;c<=b+1;c++)
                            {
                                mayor[6]=fila7[c];
                                rutaPos[6]=c;
                                for(var d=c;d<=c+1;d++)
                                {
                                    mayor[7]=fila8[d];
                                    rutaPos[7]=d;
                                    for(var e=d;e<=d+1;e++)
                                    {
                                        mayor[8]=fila9[e];
                                        rutaPos[8]=e;
                                        for(var f=e;f<=e+1;f++)
                                        {
                                            mayor[9]=fila10[f];
                                            rutaPos[9]=f;
                                            for(var g=f;g<=f+1;g++)
                                            {
                                                mayor[10]=fila11[g];
                                                rutaPos[10]=g;
                                                for(var h=g;h<=g+1;h++)
                                                {
                                                    mayor[11]=fila12[h];
                                                    rutaPos[11]=h;
                                                    for(var k=h;k<=h+1;k++)
                                                    {
                                                        mayor[12]=fila13[k];
                                                        rutaPos[12]=k;
                                                        for(var l=k;l<=k+1;l++)
                                                        {
                                                            mayor[13]=fila14[l];
                                                            rutaPos[13]=l;
                                                            for(var o=l;o<=l+1;o++)
                                                            {
                                                                mayor[14]=fila15[o];
                                                                rutaPos[14]=o
                                                                for(var m = 0;m<mayor.length;m++)
                                                                {
                                                                    mayorTot1+=mayor[m];
                                                                }
                                                                if(mayorTot1>mayorTot2)
                                                                {
                                                                    mayorTot2=mayorTot1;
                                                                    for(var p=0;p<mayor.length;p++)
                                                                    {
                                                                        ruta[p]=rutaPos[p];
                                                                    };    
                                                                }
                                                                mayorTot1=0;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                //console.log("Mayor es: " + mayorTot1)
            }    
        }
    }
    document.getElementById("resultados").innerHTML = "El resultado de la sumatoria es " + mayorTot2
    document.getElementById("piramide").innerHTML = 
    `
    <ul>
    <li>${DisplayPiramide2(fila1,ruta[0])}</li>
    <li>${DisplayPiramide2(fila2,ruta[1])}</li>
    <li>${DisplayPiramide2(fila3,ruta[2])}</li>
    <li>${DisplayPiramide2(fila4,ruta[3])}</li>
    <li>${DisplayPiramide2(fila5,ruta[4])}</li>
    <li>${DisplayPiramide2(fila6,ruta[5])}</li>
    <li>${DisplayPiramide2(fila7,ruta[6])}</li>
    <li>${DisplayPiramide2(fila8,ruta[7])}</li>
    <li>${DisplayPiramide2(fila9,ruta[8])}</li>
    <li>${DisplayPiramide2(fila10,ruta[9])}</li>
    <li>${DisplayPiramide2(fila11,ruta[10])}</li>
    <li>${DisplayPiramide2(fila12,ruta[11])}</li>
    <li>${DisplayPiramide2(fila13,ruta[12])}</li>
    <li>${DisplayPiramide2(fila14,ruta[13])}</li>
    <li>${DisplayPiramide2(fila15,ruta[14])}</li>
    </ul>
    `
}
 
