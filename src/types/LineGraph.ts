import { GraphTileProps } from "./GraphTile.type";

export interface LineGraphProps extends GraphTileProps {}

export enum FuelTypeColor {
  "biomass" = "#e91",
  "coal" = "#ef8",
  "imports" = "#1a7",
  "gas" = "#bb5",
  "nuclear" = "#aa9",
  "other" = "#976",
  "hydro" = "#ff9",
  "solar" = "#fa6",
  "wind" = "#8a8",
}
