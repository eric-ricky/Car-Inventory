import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  return (
    <>
      <section className="py-4 md:py-10 shadow-md">
        <div className="container mx-auto md:px-10 px-2">
          <Link href={"/"} className="text-2xl font-bold text-rose-700">
            C/ars.
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-800">
            Your Car Inventory
          </h2>
          <p className="text-zinc-500 mt-4 px-2 md:px-0">
            Connecting you to the biggest brands in car rental
          </p>

          <Link
            href="#cars"
            className="flex items-center space-x-2 mt-10 py-2 px-4 rounded-md bg-rose-500 text-slate-50 shadow-md"
          >
            Start Browsing
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
