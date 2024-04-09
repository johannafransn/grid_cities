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

export type TWeather = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    type: string;
};


export type TTempUnit = "celcius" | "fahrenheit"
export type TSortBy = "name" | "distance"

export const celcius = "celcius";
export const fahrenheit = "fahrenheit";
export const sortOptions = ["name", "distance"];
