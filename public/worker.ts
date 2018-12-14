interface Comida {
    nombre : string;
    calorias : number;
}

function informarInterface(comida: Comida) : void {
    var display = '';
    display += "<h3>Interfaces</h3>";
    display += "<p>Tu " + comida.nombre + " tiene " + comida.calorias +" calorias</p>";
    document.getElementById("interface").innerHTML = display;
    console.log('Tu ' + comida.nombre + " tiene " + comida.calorias + " calorias ");
}

var helado = {
    nombre : 'helado',
    calorias : 200
}

informarInterface(helado);