var burger : string = 'Hamburguesa';
var calorias : number = 300;
var sabor : boolean = true;
var htmlToAdd = "Hola a todos";
//var sabor : boolean = 'Todavía no probé la hamburguesa';

function informar(comida: string,energia : number){
    document.getElementById("informar").innerHTML = 'Tu ' + comida + " tiene " + energia + " calorias ";
    console.log('Tu ' + comida + " tiene " + energia + " calorias ");
}

informar(burger,calorias);

class Menu {
    items : Array<string>;
    paginas : number;
    display: string= '';

    constructor(item_list: Array<string>, total_paginas : number){
        this.items = item_list;
        this.paginas = total_paginas;
    }

    //Metodos
    listar() : void{
        console.log("Nuestro menu para hoy:");
        this.display += "<h3>Nuestro menú para hoy:</h3>";
        this.display +="<ul>";
        for(var i=0;i<this.items.length;i++) {
            this.display += "<li>" + this.items[i] + "</li>";
            console.log(this.items[i]);
        }
        this.display +="</ul>";
        document.getElementById("menu").innerHTML=this.display;
    }
}

var lunesMenu = new Menu(['panqueques','panchos','jugo de naranja'],1);

lunesMenu.listar();

class MenuChicos extends Menu {
    display : string = '';
    constructor(item_list: Array<string>,total_paginas: number){
        super(item_list,total_paginas);
    }

    listar() : void {
        console.log("Nuestro menu especial para los chicos:");
        this.display += "<h3>Nuestro menu especial para los chicos:</h3>";
        this.display +="<ul>";
        for(var i=0;i< this.items.length;i++){
            this.display += "<li>" + this.items[i] + "</li>";
            console.log(this.items[i]);
        }
        this.display +="</ul>";
        document.getElementById("menu-chicos").innerHTML=this.display;
    }
}

var menu_para_chicos = new MenuChicos(['caramelos','Coca Cola','juguete'],1);

menu_para_chicos.listar();

function genericFunc<T>(argument : T): T[]{
    var arrayOfT : T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);
document.getElementById("array-from-string").innerHTML=arrayFromString[0];
console.log(typeof arrayFromString[0]);
document.getElementById("array-from-string-type").innerHTML=typeof arrayFromString[0];

