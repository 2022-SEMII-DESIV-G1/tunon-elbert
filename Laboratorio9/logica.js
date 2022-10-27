
function contar()
{
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
    var mayor = [];
    var ruta=[];
    var mayorTot1 = 0;
    var mayorTot2=0;
    for(var i=0;i<=fila1.length;i++)
    {
        //console.log(fila1[i])
        mayor[0]=fila1[0];
        for (var j=i;j<=i+1;j++)
        { 
           // console.log(fila2[j])
            mayor[1]=fila2[j];
            for (var x=j;x<=j+1;x++)
            {
                mayor[2]=fila3[x]                    
                for (var z=x;z<=x+1;z++)
                {
                    mayor[3]=fila4[z]
                    for(var a=z;a<=z+1;a++)
                    {
                        mayor[4]=fila5[a];
                        for(var b=a;b<=a+1;b++)
                        {
                            mayor[5]=fila6[b];
                            for(var c=b;c<=b+1;c++)
                            {
                                mayor[6]=fila7[c];
                                for(var d=c;d<=c+1;d++)
                                {
                                    mayor[7]=fila8[d];
                                    for(var e=d;e<=d+1;e++)
                                    {
                                        mayor[8]=fila9[e];
                                        for(var f=e;f<=e+1;f++)
                                        {
                                            mayor[9]=fila10[f];
                                            for(var g=f;g<=f+1;g++)
                                            {
                                                mayor[10]=fila11[g];
                                                for(var h=g;h<=g+1;h++)
                                                {
                                                    mayor[11]=fila12[h];
                                                    for(var k=h;k<=h+1;k++)
                                                    {
                                                        mayor[12]=fila13[k];
                                                        for(var l=k;l<=k+1;l++)
                                                        {
                                                            mayor[13]=fila14[l];
                                                            for(var o=l;o<=l+1;o++)
                                                            {
                                                                mayor[14]=fila15[o];
                                                                for(var m = 0;m<mayor.length;m++)
                                                                {
                                                                    mayorTot1+=mayor[m];
                                                                }
                                                                if(mayorTot1>mayorTot2)
                                                                {
                                                                    mayorTot2=mayorTot1;
                                                                    for(var p=0;p<mayor.length;p++)
                                                                        ruta[p]=mayor[p];
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
    //console.log(mayorTot2);
   /* for(var t=0;t<ruta.length;t++)
        console.log(ruta[t]);*/
}
