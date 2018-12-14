var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var burger = 'Hamburguesa';
var calorias = 300;
var sabor = true;
var htmlToAdd = "Hola a todos";
//var sabor : boolean = 'Todavía no probé la hamburguesa';
function informar(comida, energia) {
    document.getElementById("informar").innerHTML = 'Tu ' + comida + " tiene " + energia + " calorias ";
    console.log('Tu ' + comida + " tiene " + energia + " calorias ");
}
informar(burger, calorias);
var Menu = /** @class */ (function () {
    function Menu(item_list, total_paginas) {
        this.display = '';
        this.items = item_list;
        this.paginas = total_paginas;
    }
    //Metodos
    Menu.prototype.listar = function () {
        console.log("Nuestro menu para hoy:");
        this.display += "<h3>Nuestro menú para hoy:</h3>";
        this.display += "<ul>";
        for (var i = 0; i < this.items.length; i++) {
            this.display += "<li>" + this.items[i] + "</li>";
            console.log(this.items[i]);
        }
        this.display += "</ul>";
        document.getElementById("menu").innerHTML = this.display;
    };
    return Menu;
}());
var lunesMenu = new Menu(['panqueques', 'panchos', 'jugo de naranja'], 1);
lunesMenu.listar();
var MenuChicos = /** @class */ (function (_super) {
    __extends(MenuChicos, _super);
    function MenuChicos(item_list, total_paginas) {
        var _this = _super.call(this, item_list, total_paginas) || this;
        _this.display = '';
        return _this;
    }
    MenuChicos.prototype.listar = function () {
        console.log("Nuestro menu especial para los chicos:");
        this.display += "<h3>Nuestro menu especial para los chicos:</h3>";
        this.display += "<ul>";
        for (var i = 0; i < this.items.length; i++) {
            this.display += "<li>" + this.items[i] + "</li>";
            console.log(this.items[i]);
        }
        this.display += "</ul>";
        document.getElementById("menu-chicos").innerHTML = this.display;
    };
    return MenuChicos;
}(Menu));
var menu_para_chicos = new MenuChicos(['caramelos', 'Coca Cola', 'juguete'], 1);
menu_para_chicos.listar();
function genericFunc(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]);
document.getElementById("array-from-string").innerHTML = arrayFromString[0];
console.log(typeof arrayFromString[0]);
document.getElementById("array-from-string-type").innerHTML = typeof arrayFromString[0];
