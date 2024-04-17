import historyReducer from "@/entities/weather/model/historySlice";
import { weatherApi } from "@/entities/weather/api/weatherApi";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    history: historyReducer,
    [weatherApi.reducerPath]: weatherApi.reducer
})

