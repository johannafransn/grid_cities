import axios from "axios";

const ApiService = {
    //TODO add return type
    getWeatherData: async function (cityName: string) {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`);
        const main = data.main
        return { ...main, type: data.weather[0].main }
    },


}
export default ApiService;
