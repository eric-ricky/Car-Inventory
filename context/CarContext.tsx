import React, { createContext, useContext, useEffect, useState } from "react";
import { ICarsContext, ICarsContextProvider, ICarsData } from "./types";

const CarsContext = createContext<ICarsContext | null>(null);

const CarsContextProvider: React.FC<ICarsContextProvider> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState<ICarsData[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      console.log("fetching cars...");
      try {
        const res = await fetch("/api/v1/cars");
        const data = await res.json();
        console.log("data", data);

        if (!data.success) {
          throw new Error("Something went wrong!");
        }

        const tempCars = data.data.cars;
        setCars(tempCars);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchCars();
  }, []);

  return (
    <CarsContext.Provider value={{ cars, isLoading }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;

export const useCarsContext = () => useContext(CarsContext);
