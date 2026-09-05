import type {CountryType} from "./CountryType"

export async function Data(): Promise<CountryType[]> {

    const res = await fetch("https://openapi.programming-hero.com/api/all")
    const data = await res.json()

    return data.countries

}

export default Data


