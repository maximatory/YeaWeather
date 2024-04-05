import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherApiResponse } from "../model/types";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherApiResponse, string>({
            query: (location) => {
                return {
                    url: 'weather',
                    params: {
                        q: location,
                        appid: API_KEY,
                        lang: 'ru',
                        units: 'metric'
                    }
                }
            }
        })
    })
})

export const { useGetWeatherQuery } = weatherApi
