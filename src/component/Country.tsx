import type { CountryType } from "../CountryType";

interface dataType {
  data: CountryType & {isVisit: Boolean};
  handleVisitCount: (num:number) => void;
  handleFlagsClick: (flag: string, name:string, isVisit:boolean) => void;
  handleVisit: (id: string) => void;
}

function Country({ data, handleVisitCount, handleFlagsClick, handleVisit }: dataType) {
  

  const handleClick = () => {
      if(!data.isVisit)
      handleVisitCount(1)
      handleFlagsClick(data.flags.flags.png, data.name.common, true)
      handleVisit(data.ccn3.ccn3)

      

    


  };

  return (
    <div className="border-2 border-green-600 rounded-2xl p-2 flex flex-col justify-between h-50">
      <h1 className="text-center font-bold text-green-500">
        {data.name.common}
      </h1>

      <div className="flex gap-5 mb-5">
        <img src={data.flags.flags.png} alt="" className="w-40 h-25 " />

        <div className="flex justify-center items-center">
          <p>{data.name.official}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={handleClick}
          className={`border-green-500 rounded-md w-15 ${data.isVisit? "bg-gray-200 ": "text-blue-500 underline underline-offset-1 bg-gray-100"}  `}
        >
          {data.isVisit? "Visited": "Visit"}
        </button>

        <button className="border-green-500 rounded-md bg-gray-400 w-15">
          Added
        </button>
      </div>
    </div>
  );
}

export default Country;
