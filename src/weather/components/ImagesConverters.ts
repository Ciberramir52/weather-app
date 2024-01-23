interface ImageConverter {
    "clear sky": string,
    "few clouds": string,
    "scattered clouds": string,
    "broken clouds": string,
    "shower rain": string,
    "rain": string,
    "thunderstorm": string,
    "snow": string,
    "mist": string,
}

export type DayImageKey = keyof typeof DayImages;
export type NightImageKey = keyof typeof DayImages;

export const DayImages:ImageConverter = {
    "clear sky": "01d.png",
    "few clouds": "02d.png",
    "scattered clouds": "03d.png",
    "broken clouds": "04d.png",
    "shower rain": "09d.png",
    "rain": "10d.png",
    "thunderstorm": "11d.png",
    "snow": "13d.png",
    "mist": "50n.png",   
}

export const NightImages:ImageConverter = {
    "clear sky": "01n.png",
    "few clouds": "02n.png",
    "scattered clouds": "03n.png",
    "broken clouds": "04n.png",
    "shower rain": "09n.png",
    "rain": "10n.png",
    "thunderstorm": "11n.png",
    "snow": "13n.png",
    "mist": "50n.png",   
}