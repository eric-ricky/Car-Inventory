import { ReactNode } from "react";

export interface ICarsData {
  id: string;
  url: string;
  make: string;
  model: string;
  year: number;
  price: number;
}

export interface ICarsContextProvider {
  children: ReactNode;
}

export interface ICarsContext {
  cars: ICarsData[];
  isLoading: boolean;
}
