interface ISprites {
  normal: string;
  lage: string;
  animated: string;
}

export interface IPokemon {
  name: string;
  national_number: string;
  sprites: ISprites;
  type: string[];
}

export interface IGetPokemonResponse {
  results: IPokemon[];
}
