import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':id')
  getPokemon(@Param('id', ParseIntPipe) id: number) {
    if (id <= 0) {
      throw new BadRequestException('ID must be a positive integer');
    }

    return this.pokemonService.getPokemonById(id);
  }
}
