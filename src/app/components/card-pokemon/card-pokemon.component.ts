import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';

@Component({
  selector: 'app-card-pokemon',
  standalone: true,
  imports: [CommonModule,DetailPokemonComponent],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent {
  @Input()
  public pokemoncard: Pokemon = {
    numero_pokedex: 0,
    nombre: '',
    tipo1: '',
    habilidad: '',
    descripcion: ''
  };
}
