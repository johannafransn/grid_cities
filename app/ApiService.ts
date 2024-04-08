import axios from "axios";

const ApiService = {
    getWeatherData: async function (lng: number, lat: number) {
        console.log(process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY, 'APIKEY')
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lon=${lng}&lat=${lat}&units=metric&APPID=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`);
        console.log(data, 'wats data????')
        return data
    },


}
export default ApiService;
