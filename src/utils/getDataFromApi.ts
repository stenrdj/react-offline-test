import { GraphTileDataType } from "../types/GraphTile.type";

export const getEnergyGeneration = () =>
  fetch("https://api.carbonintensity.org.uk/generation")
    .then((response) => response.json())
    .then((response) => response.data);
