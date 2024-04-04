export const getWeatherConditionByCode = (code: number) => {
    switch (code) {
        case 200: return 'storm'
            
        case 201: return 'storm'
            
        case 202: return 'storm'
            
        case 210: return 'storm'
            
        case 211: return 'storm'
            
        case 212: return 'storm'
            
        case 221: return 'storm'
            
        case 230: return 'storm'
            
        case 231: return 'storm'
            
        case 232: return 'storm'
            
        case 300: return 'rain'
            
        case 301: return 'rain'
            
        case 302: return 'rain'
            
        case 310: return 'rain'
            
        case 311: return 'rain'
            
        case 312: return 'rain'
            
        case 313: return 'rain'
            
        case 314: return 'rain'
            
        case 321: return 'rain'
            
        case 500: return 'rain'
            
        case 501: return 'rain'
            
        case 502: return 'rain'
            
        case 503: return 'rain'
            
        case 504: return 'rain'
            
        case 511: return 'rain'
            
        case 520: return 'rain'
            
        case 521: return 'rain'
            
        case 522: return 'rain'
            
        case 531: return 'rain'
            
        case 600: return 'snow'
            
        case 601: return 'snow'
            
        case 602: return 'snow'
            
        case 611: return 'snow'
            
        case 612: return 'snow'
            
        case 613: return'snow'
            
        case 615: return'snow'
            
        case 616: return'snow'
            
        case 620: return'snow'
            
        case 621: return'snow'
            
        case 622: return'snow'
            
        case 701: return'cloudy'
            
        case 711: return'cloudy'
            
        case 721: return'cloudy'
            
        case 731: return 'cloudy'
            
        case 741: return 'cloudy'
            
        case 751: return 'cloudy'
            
        case 761: return 'cloudy'
            
        case 762: return 'cloudy'
            
        case 771: return 'cloudy'
            
        case 781: return 'cloudy'
            
        case 800: return 'clear'
            
        case 801: return 'fewClouds'
            
        case 802: return 'fewClouds'
            
        case 803: return 'fewClouds'
            
        case 804: return 'fewClouds'
            
        default: return 'clear'
    }
}