import { use } from "react";
import type { CountryType } from "../CountryType";
import Country from "./Country";

interface DataType {
  data: Promise<CountryType[]>;
  handleVisitCount: (num:number) => void;
  handleFlagsClick: (flag: string, name:string) => void;
  
}

export default function Countries({ data, handleVisitCount, handleFlagsClick }: DataType) {
  const datas = use(data);

  return (
    <>

      <div className=" grid grid-cols-3 gap-2 p-2 ">
        {datas.map((country) => (
          <Country key={country.ccn3.ccn3} data={country} 
          handleVisitCount = {handleVisitCount}
          handleFlagsClick = {handleFlagsClick}
          />
        ))}
      </div>
    </>
  );
}
