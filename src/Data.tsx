import type {CountryType} from "./CountryType"

export async function Data(): Promise<CountryType[]> {

    const res = await fetch("./src/Data/Datas.json")
    const data = await res.json()

    return data.countries

}

export default Data


