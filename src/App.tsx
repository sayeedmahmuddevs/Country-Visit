import { Suspense, useState } from "react";
import Countries from "./component/Countries";
import Data from "./Data";

const dataPromise = Data();
function App() {
  
  // visit flags count
  const [visitCount, setVisitCount] = useState(0);
  const handleVisitCount = (num: number) => {
    setVisitCount((prev) => prev + num);
  };

  // add flags
  const [addFlags, setAddFlags] = useState<{ flag: string, name: string, isVisit: boolean }[]>(
    [],
  );

  const handleFlagsClick = (flag: string, name: string , isVisit: boolean) => {
    setAddFlags((prev) => {
      if (prev.some((country) => country.flag === flag)) {
        return prev;
      }
      return [...prev, { flag, name, isVisit}];
    });
  };

  // searchbox
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-310 mx-auto">
      <h1 className="text-center text-green-500 font-bold my-4">All Country</h1>

      <div>
        <div className="flex justify-between">
          <div>Explored <span className="text-red-500 text-xl font-bold">{visitCount}</span>  Countries </div>
          <div>
            <label className="mr-2 font-bold">Search Country</label>
            <input
              className="border p-1 rounded-xl border-gray-300 bg-white py-2 pl-5 pr-4 text-sm text-gray-700
                  outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-200
                hover:border-green-400"
              type="text"
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="max-w-full flex flex-wrap items-center gap-1 my-4">
          <h4 className="mr-2 font-bold">Visited Country : </h4>

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
          search={search}
        ></Countries>
      </Suspense>
    </div>
  );
}

export default App;
