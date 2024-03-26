export interface GraphTileProps {
  data: GraphTileDataType | null;
}

export type fuel =
  | "biomass"
  | "coal"
  | "imports"
  | "gas"
  | "nuclear"
  | "other"
  | "hydro"
  | "solar"
  | "wind";

export interface GenerationMixType {
  fuel: fuel;
  perc: Number;
}

export interface GraphTileDataType {
  from: string;
  to: string;
  generationmix: GenerationMixType[];
}
