import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonService {
  async getPokemonById(id: number) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
        { timeout: 5000 },
      );
      const data = response.data;

      return {
        name: data.name,
        id: data.id,
        image: data.sprites.other['official-artwork'].front_default,
        types: data.types.map((t: { type: { name: string } }) => t.type.name),
        height: data.height,
        weight: data.weight,
      };
    } catch (error) {
      if (error.response?.status === 404) {
        throw new NotFoundException('Pokémon not found');
      }
      throw new Error('Error fetching Pokémon');
    }
  }
}
