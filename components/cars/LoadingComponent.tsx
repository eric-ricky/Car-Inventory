import React from "react";

const LoadingComponent = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div
          key={n}
          className="lg:col-span-3 md:col-span-6 col-span-12 px-2 pb-5"
        >
          <div className="border rounded-xl py-5 px-4">
            <div className="h-3 w-24 bg-slate-200 animate-pulse mb-2"></div>

            <div className="w-full h-36 bg-slate-200 rounded-md overflow-hidden mt-2 animate-pulse"></div>

            <div className="pt-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-2 w-16 bg-slate-200 animate-pulse"></div>
                <div className="h-2 w-12 bg-slate-200 animate-pulse"></div>
              </div>

              <div className="flex items-center justify-between space-x-4 py-2">
                <div className="h-3 w-24 bg-slate-200 animate-pulse"></div>

                <div className="h-7 w-20 rounded-md bg-slate-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingComponent;
