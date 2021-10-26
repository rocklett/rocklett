class Billete
{
    constructor(v, c)//v=billete valor
    {
        this.valor=v
        this.cantidad=c
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
};
var imagenes = [];
imagenes ["100"] = "100.png";
imagenes ["50"] = "50.png";
imagenes ["20"] = "20.png";
imagenes ["10"] = "10.png";

///


var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var bi of caja)//por cada elemento del array CAJA hace un "ciclo", ponele. Y nos muestra cada valor de ese mismo array
    {
        
        /////////////////////////////
        if (dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);//esto nos da la CANTIDAD de billetes que son necesarios para entregar el dinero requerido, ej: pedis 200 pe, el resultado va a ser 4 billetes de 50 paaaaa;
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            
            entregados.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
            
        }
        
        /////////////////////////////
    }
    
    if(dinero > 0)
    {
        resultado.innerHTML = "No tengo tanta guita capo";
    }
    else
    {
        resultado.innerHTML = "Retiraste: <br />";
        
        for (var e of entregados)
        {
            
            if(e.cantidad > 0)
            {
            
                for(var bi = 1; bi <= e.cantidad ;bi++)
             {
                resultado.innerHTML +="<img src=" + e.imagen.src + " />" + " ";
             }

            }
            

        }
    };
    
};
///


var caja = [];
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));

var entregados =[];



var dinero;
var div = 0; ////RESULTADO DE LA DIVISION CADA VE QUE SE ITERA UN CICLO
var papeles = 0;
var resultado = document.getElementById("resultado");


