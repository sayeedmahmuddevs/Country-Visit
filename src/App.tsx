import { Suspense, useState } from "react";
import Countries from "./component/Countries";
import Data from "./Data";

const dataPromise = Data();
function App() {
  const [visitCount, setVisitCount] = useState(0);
  const [addFlags, setAddFlags] = useState<{ flag: string; name: string }[]>(
    [],
  );

  const handleVisitCount = (num: number) => {
    setVisitCount((prev) => prev + num);
  };

  const handleFlagsClick = (flag: string, name: string) => {
    setAddFlags((prev) => {
      if (prev.some((country) => country.flag === flag)) {
        return prev;
      }
      return [...prev, { flag, name }];
    });
  };

  return (
    <div className="max-w-310 mx-auto">
      <h1 className="text-center text-green-500 font-bold my-4">
        All Country Name
      </h1>

      <div>
        <div>VisitedCount: {visitCount} </div>

        <div className="max-w-full flex flex-wrap items-center gap-1">
          <h4 className="mr-2">All flags Add:</h4>

          {addFlags.map((country) => (
            <div
              key={country.name}
              className="relative group w-10 h-7 flex items-center justify-center"
            >
              {/* Country Name */}
              <p
                className="absolute bottom-full left-1/2 -translate-x-1/2  translate-y-2 whitespace-nowrap rounded-md
              bg-black px-2 py-1 text-xs text-white opacity-0 scale-0 pointer-events-none transition-all
                duration-300 ease-out group-hover:mb-3  group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 z-20 "
              >
                {country.name}
              </p>

              {/* Flag */}
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-10 h-7 object-cover rounded-sm transition-transform duration-300 ease-out group-hover:scale-140 group-hover:z-10 "
              />
            </div>
          ))}
        </div>
      </div>

      <Suspense fallback={<p>Loadding Dataa.......</p>}>
        <Countries
          data={dataPromise}
          handleVisitCount={handleVisitCount}
          handleFlagsClick={handleFlagsClick}
        ></Countries>
      </Suspense>
    </div>
  );
}

export default App;
