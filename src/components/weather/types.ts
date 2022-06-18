type City = {
    id: number,
    name: string,
    country: string
}

export interface IWeather {
    cod: string,
    message: number,
    cnt: number,
    list: Array<WeatherItem>,
    city: City
}

export type WeatherItem = {
    main: Main,
    weather: WeatherDetails,
    dt_txt: string
}

type Main = {
    temp: number,
    pressure: number,
    humidity: number,
}

type WeatherDetails = [{
    id: number,
    main: string,
    description: string,
}]
