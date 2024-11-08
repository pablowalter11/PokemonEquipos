import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-form-pokemon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-pokemon.component.html',
  styleUrl: './form-pokemon.component.css'
})
export class FormPokemonComponent {
  @Output()
  emitirPokemon: EventEmitter<Pokemon> = new EventEmitter();

  pokemon: Pokemon = {
    numero_pokedex: 0,
    nombre: '',
    tipo1: '',
    habilidad: '',
    descripcion: ''
  }

  agregarPokemon() {
    this.emitirPokemon.emit(this.pokemon);
  }
}
