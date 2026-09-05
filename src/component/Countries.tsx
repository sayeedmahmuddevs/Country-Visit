import { use } from "react";
import type { CountryType } from "../CountryType";
import Country from "./Country";

interface DataType {
  data: Promise<CountryType[]>;
  handleVisitCount: (num:number) => void;
  handleFlagsClick: (flag: string, name:string) => void;
  search: string
  
}


export default function Countries({ data, handleVisitCount, handleFlagsClick, search}: DataType) {
  const datas = use(data);

  const filterData = datas.filter(val => val.name.common.toLowerCase().startsWith(search.toLowerCase().trim()))

  return (
    <>

      <div className=" grid grid-cols-3 gap-2 p-2 ">
        {filterData.map((country) => (
          <Country key={country.ccn3.ccn3} data={country} 
          handleVisitCount = {handleVisitCount}
          handleFlagsClick = {handleFlagsClick}
          />
        ))}
      </div>
    </>
  );
}
