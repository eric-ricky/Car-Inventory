import HeaderComponent from "@/components/Header";
import Car from "@/components/cars/Car";
import LoadingComponent from "@/components/cars/LoadingComponent";
import AdjustmentsHorizontalIcon from "@/components/icons/AdjustmentsHorizontalIcon";
import ExclamationIcon from "@/components/icons/ExclamationIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import { useCarsContext } from "@/context/CarContext";

import { ICarsData } from "@/context/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = () => {
  const carsCtx = useCarsContext();
  const [input, setInput] = useState("");
  const [filteredCars, setFilteredCars] = useState<ICarsData[]>([]);

  useEffect(() => {
    const cars = carsCtx?.cars;
    if (!cars) return;

    // sorting
    const sortedCars = cars.sort((a, b) => a.year - b.year);

    // filtering
    let filtered = sortedCars;
    if (input) {
      filtered = filtered.filter((car) => car.year === +input);
    }

    setFilteredCars(filtered);
  }, [carsCtx, input]);

  return (
    <>
      <HeaderComponent />

      <section id="cars" className="py-20">
        <div className="container mx-auto md:px-20 px-5">
          <div className="flex items-center justify-end md:px-10 pb-10">
            <div className="flex items-center space-x-2 bg-white border rounded-lg py-2 px-4 lg:w-[35%] md:w-[55%]">
              <SearchIcon styles="w-6 text-zinc-500" />
              <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Filter by year of vehicle e.g. 2018"
                className="flex-grow bg-white border-none outline-none"
              />
              <div className="rounded-md p-2 bg-rose-50 shadow cursor-pointer">
                <AdjustmentsHorizontalIcon styles="w-6 text-rose-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 mt-10 md:px-10 gap-5">
            {carsCtx?.isLoading ? (
              <LoadingComponent />
            ) : (
              <>
                {carsCtx?.cars && filteredCars.length ? (
                  filteredCars.map((car) => <Car key={car.id} car={car} />)
                ) : (
                  <div className="col-span-12 py-10 flex items-center space-x-2 justify-center text-center">
                    <ExclamationIcon styles="w-6" />
                    <p className="text-lg font-medium">No cars found</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
