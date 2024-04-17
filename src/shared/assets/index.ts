// detail icons
import clouds from './icons/detailIcons/clouds.svg'
import feels_like from './icons/detailIcons/feels_like.svg'
import humidity from './icons/detailIcons/humidity.svg'
import pressure from './icons/detailIcons/pressure.svg'
import wind from './icons/detailIcons/wind.svg'

// weather icons
import clear_day from './icons/wheaterIcons/clear_day.svg'
import clear_night from './icons/wheaterIcons/clear_night.svg'
import cloudy_day from './icons/wheaterIcons/cloudy_day.svg'
import cloudy_night from './icons/wheaterIcons/cloudy_night.svg'
import fewClouds_day from './icons/wheaterIcons/fewClouds_day.svg'
import fewClouds_night from './icons/wheaterIcons/fewClouds_night.svg'
import rain_day from './icons/wheaterIcons/rain_day.svg'
import rain_night from './icons/wheaterIcons/rain_night.svg'
import snow_day from './icons/wheaterIcons/snow_day.svg'
import snow_night from './icons/wheaterIcons/snow_night.svg'
import storm_day from './icons/wheaterIcons/storm_day.svg'
import storm_night from './icons/wheaterIcons/storm_night.svg'

// bg images
import clear_day_bg from './images/clear_day_bg.png'
import clear_night_bg from './images/clear_night_bg.png'
import cloudy_day_bg from './images/cloudy_day_bg.png'
import cloudy_night_bg from './images/cloudy_night_bg.png'
import fewClouds_day_bg from './images/fewClouds_day_bg.png'
import fewClouds_night_bg from './images/fewClouds_night_bg.png'
import rain_day_bg from './images/rain_day_bg.png'
import rain_night_bg from './images/rain_night_bg.png'
import snow_day_bg from './images/snow_day_bg.png'
import snow_night_bg from './images/snow_night_bg.png'
import storm_day_bg from './images/storm_day_bg.png'
import storm_night_bg from './images/storm_night_bg.png'

export const detailIcons = {
    clouds,
    feels_like,
    humidity,
    pressure,
    wind
}

export const weatherIcons = {
    'clear_day': clear_day,
    'clear_night': clear_night,
    'cloudy_day': cloudy_day,
    'cloudy_night': cloudy_night,
    'fewClouds_day': fewClouds_day,
    'fewClouds_night': fewClouds_night,
    'rain_day': rain_day,
    'rain_night': rain_night,
    'snow_day': snow_day,
    'snow_night': snow_night,
    'storm_day': storm_day,
    'storm_night': storm_night
}

export type weatherIconsType = keyof typeof weatherIcons

export const weatherBackgroundImages = {
    clear_day_bg,
    clear_night_bg,
    cloudy_day_bg,
    cloudy_night_bg,
    fewClouds_day_bg,
    fewClouds_night_bg,
    rain_day_bg,
    rain_night_bg,
    snow_day_bg,
    snow_night_bg,
    storm_day_bg,
    storm_night_bg
}
