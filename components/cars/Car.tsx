import { ICarsData } from "@/context/types";
import Image from "next/image";
import React from "react";

interface ICar {
  car: ICarsData;
}

const Car: React.FC<ICar> = ({ car }) => {
  return (
    <div className="lg:col-span-3 md:col-span-6 col-span-12 px-2 pb-5">
      <div className="border rounded-xl py-5 px-4">
        <h5 className="text-lg font-medium">
          {car.model} ({car.year})
        </h5>

        <div className="relative w-full h-36 bg-slate-200 rounded-md overflow-hidden mt-2">
          <Image src={car.url} alt="." fill className="object-cover" />
        </div>

        <div className="pt-2">
          <p className="text-zinc-500 text-sm">
            Model:{" "}
            <span className="text-sm font-medium text-zinc-800">
              {car.model}
            </span>
          </p>

          <div className="flex items-center justify-between space-x-4 py-2">
            <p className="font-medium text-lg">KES {car.price}</p>

            <div className="py-2 px-4 rounded-md bg-rose-500 text-white">
              Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
