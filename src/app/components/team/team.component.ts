import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { FormPokemonComponent } from '../form-pokemon/form-pokemon.component';
import { CardPokemonComponent } from "../card-pokemon/card-pokemon.component";
import { ListaEquiposComponent } from '../lista-equipos/lista-equipos.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,FormPokemonComponent, CardPokemonComponent,ListaEquiposComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  listaPokemon: Pokemon[] = [];

  recibirPokemon(pokemon: any) {
    console.log(pokemon);
    this.listaPokemon.push({...pokemon});
  }
}
