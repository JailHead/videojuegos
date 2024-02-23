import { Component } from "@angular/core";
@Component({
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent{
    public nombre: String;
    public mejor_juego: String;
    public mejor_juego_retro: String;
    public mostrar_retro: Boolean;
    public year: Number;

    public videojuegos: Array<String>;

    constructor (){
        this.nombre = 'videojuegos 2024';
        this.mejor_juego = 'GTA 5';
        this.mejor_juego_retro = 'Super Mario Bros';
        this.mostrar_retro = true;
        this.year = 2024;
        this.videojuegos = [
            'Los simpson',
            'Assasin\'s Creed',
            'Red Dead Redemption',        
            'God of War',
            'Dark Souls'
        ]
    }

    // public nombre='Videojuegos 2024';
    // public mejor_juego = 'GTA 5';
    // public mejor_juego_retro = 'Super Mario Bros';
    // public mostrar_retro = true;
    // public videojuegos = [
    //     'Los simpson',
    //     'Assasin\'s Creed',
    //     'Red Dead Redemption',        
    //     'God of War',
    //     'Dark Souls',
    // ];
}