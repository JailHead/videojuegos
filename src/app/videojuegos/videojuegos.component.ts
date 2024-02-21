import { Component } from "@angular/core";
@Component({
    selector: 'videojuegos',
    template: `
        <h2>Componente de {{nombre}}
        <h3 *ngIf="mostrar_retro !== true">El mejor juego es {{mejor_juego}}</h3>
        <h3 [style.background]="'yellow'" *ngIf="mostrar_retro">El juego retro: {{mejor_juego_retro}}</h3>
        <h2>Listado de videojuegos</h2>
        <ul>
            <li *ngFor="let game of videojuegos">{{game}}</li>
        </ul>
    `
})
export class VideojuegosComponent{
    public nombre='Videojuegos 2024';
    public mejor_juego = 'GTA 5';
    public mejor_juego_retro = 'Super Mario Bros';
    public mostrar_retro = true;
    public videojuegos = [
        'Los simpson',
        'Assasin\'s Creed',
        'Red Dead Redemption',        
        'God of War',
        'Dark Souls',
    ];
}