var fila1 = [[75],
[95,64],
[17,47,82],
[18,35,87,10],
[20,4,82,47,65],
[19,1,23,75,3,34],
[88,2,77,73,7,63,67],
[99,65,4,28,6,16,70,92],
[41,41,26,56,83,40,80,70,33],
[41,48,72,33,47,32,37,16,94,29],
[53,71,44,65,25,43,91,52,97,51,14],
[70,11,33,28,77,73,17,78,39,68,17,57],
[91,71,52,38,17,14,91,43,58,50,27,29,48],
[63,66,4,68,89,53,67,30,73,16,69,87,40,31],
[4,62,98,27,23,9,70,98,73,93,38,53,60,4,23]];
function DisplayPiramide(arg,arg2)
{
    let items = "";
    for(let i= 0;i<arg.length;i++)
        if(arg[arg2][i]!=undefined)
        items += `<h3>${arg[arg2][i]}</h3>`;
    return items;
}
function DisplayPiramide2(arg,index,arg2)
{
    let items = "";
    for(let i= 0;i<arg.length;i++)
    {   
        if(arg[arg2][i]!=undefined)
         {  if(i==index)
                    items += `<h3 style="background-color: lightcoral">${arg[arg2][i]}</h3>`;
                else
                        items += `<h3>${arg[arg2][i]}</h3>`;
         }
    }
    return items;
}
document.getElementById("piramide").innerHTML = 
`
<ul>
<li>${DisplayPiramide(fila1,0)}</li>
<li>${DisplayPiramide(fila1,1)}</li>
<li>${DisplayPiramide(fila1,2)}</li>
<li>${DisplayPiramide(fila1,3)}</li>
<li>${DisplayPiramide(fila1,4)}</li>
<li>${DisplayPiramide(fila1,5)}</li>
<li>${DisplayPiramide(fila1,6)}</li>
<li>${DisplayPiramide(fila1,7)}</li>
<li>${DisplayPiramide(fila1,8)}</li>
<li>${DisplayPiramide(fila1,9)}</li>
<li>${DisplayPiramide(fila1,10)}</li>
<li>${DisplayPiramide(fila1,11)}</li>
<li>${DisplayPiramide(fila1,12)}</li>
<li>${DisplayPiramide(fila1,13)}</li>
<li>${DisplayPiramide(fila1,14)}</li>
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
    for(var i=0;i<fila1.length;i++)
    {
        mayor[0]=fila1[0][i];
        rutaPos[0]=i;
        for (var j=i;j<=i+1;j++)
        { 
            mayor[1]=fila1[1][j];
            rutaPos[1]=j;
            for (var x=j;x<=j+1;x++)
            {
                mayor[2]=fila1[2][x];   
                rutaPos[2]=x;                 
                for (var z=x;z<=x+1;z++)
                {
                    mayor[3]=fila1[3][z];
                    rutaPos[3]=z;
                    for(var a=z;a<=z+1;a++)
                    {
                        mayor[4]=fila1[4][a];
                        rutaPos[4]=a;
                        for(var b=a;b<=a+1;b++)
                        {
                            mayor[5]=fila1[5][b];
                            rutaPos[5]=b;
                            for(var c=b;c<=b+1;c++)
                            {
                                mayor[6]=fila1[6][c];
                                rutaPos[6]=c;
                                for(var d=c;d<=c+1;d++)
                                {
                                    mayor[7]=fila1[7][d];
                                    rutaPos[7]=d;
                                    for(var e=d;e<=d+1;e++)
                                    {
                                        mayor[8]=fila1[8][e];
                                        rutaPos[8]=e;
                                        for(var f=e;f<=e+1;f++)
                                        {
                                            mayor[9]=fila1[9][f];
                                            rutaPos[9]=f;
                                            for(var g=f;g<=f+1;g++)
                                            {
                                                mayor[10]=fila1[10][g];
                                                rutaPos[10]=g;
                                                for(var h=g;h<=g+1;h++)
                                                {
                                                    mayor[11]=fila1[11][h];
                                                    rutaPos[11]=h;
                                                    for(var k=h;k<=h+1;k++)
                                                    {
                                                        mayor[12]=fila1[12][k];
                                                        rutaPos[12]=k;
                                                        for(var l=k;l<=k+1;l++)
                                                        {
                                                            mayor[13]=fila1[13][l];
                                                            rutaPos[13]=l;
                                                            for(var o=l;o<=l+1;o++)
                                                            {
                                                                mayor[14]=fila1[14][o];
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
            }    
        }
    }
    document.getElementById("resultados").innerHTML = "El resultado de la sumatoria es " + mayorTot2
    document.getElementById("piramide").innerHTML = 
    `
    <ul>
    <li>${DisplayPiramide2(fila1,ruta[0],0)}</li>
    <li>${DisplayPiramide2(fila1,ruta[1],1)}</li>
    <li>${DisplayPiramide2(fila1,ruta[2],2)}</li>
    <li>${DisplayPiramide2(fila1,ruta[3],3)}</li>
    <li>${DisplayPiramide2(fila1,ruta[4],4)}</li>
    <li>${DisplayPiramide2(fila1,ruta[5],5)}</li>
    <li>${DisplayPiramide2(fila1,ruta[6],6)}</li>
    <li>${DisplayPiramide2(fila1,ruta[7],7)}</li>
    <li>${DisplayPiramide2(fila1,ruta[8],8)}</li>
    <li>${DisplayPiramide2(fila1,ruta[9],9)}</li>
    <li>${DisplayPiramide2(fila1,ruta[10],10)}</li>
    <li>${DisplayPiramide2(fila1,ruta[11],11)}</li>
    <li>${DisplayPiramide2(fila1,ruta[12],12)}</li>
    <li>${DisplayPiramide2(fila1,ruta[13],13)}</li>
    <li>${DisplayPiramide2(fila1,ruta[14],14)}</li>
    </ul>
    `
}
 
