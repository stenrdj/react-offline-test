import { GraphTileDataType, fuel } from "../types/GraphTile.type";
import { FuelTypeColor } from "../types/LineGraph";

const getDatasetTypeColor = (type: fuel) => {
  return FuelTypeColor[type];
};

export const getLabelsFromData = (data: GraphTileDataType) => {
  return [data.from];
};

export const getDatasetFromData = (data: GraphTileDataType) => {
  const datasets = data?.generationmix?.map((type) => {
    return {
      label: type.fuel.toUpperCase(),
      data: [type.perc],
      backgroundColor: getDatasetTypeColor(type.fuel),
    };
  });
  return datasets;
};
