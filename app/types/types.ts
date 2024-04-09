export type TCity = {
    name: string;
    continent: string;
    active: boolean;
    country: string;
    description: string;
    image: string;
    coords: {
        lat: number;
        lng: number;
    }
}

export type TTempUnit = "celcius" | "fahrenheit"
export type TSortBy = "name" | "distance"

export const celcius = "celcius";
export const fahrenheit = "fahrenheit";
export const sortOptions = ["name", "distance"];
