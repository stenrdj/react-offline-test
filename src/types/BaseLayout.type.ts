import { ReactNode } from "react";
import { GraphTileDataType } from "./GraphTile.type";

export interface BaseLayoutProps {
  children?: ReactNode;
}

export interface APIDataType extends GraphTileDataType {}
