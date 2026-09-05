import { use, useState } from "react";
import type { CountryType } from "../CountryType";
import Country from "./Country";

interface DataType {
  data: Promise<CountryType[]>;
  handleVisitCount: (num:number) => void;
  handleFlagsClick: (flag: string, name:string, isVisit:boolean) => void;
  search: string;
}


export default function Countries({ data, handleVisitCount, handleFlagsClick, search}: DataType) {
  const datas = use(data);
  const [updateData, setUpdateData] = useState(datas.map((country)=>({...country, isVisit: false})))

  const handleVisit = (id: string) => {
  setUpdateData((prev) =>
    prev.map((country) =>
      country.ccn3.ccn3 === id
        ? { ...country, isVisit: true }
        : country
    )
  );
};

  // searchBar
  const filterData = updateData.filter(val => val.name.common.toLowerCase().startsWith(search.toLowerCase().trim()))

  return (
    <>

      <div className=" grid grid-cols-3 gap-2 p-2 ">
        {filterData.map((country) => (
          <Country key={country.ccn3.ccn3} data={country} 
          handleVisitCount = {handleVisitCount}
          handleFlagsClick = {handleFlagsClick}
          handleVisit = {handleVisit}
          />
        ))}
      </div>
    </>
  );
}
