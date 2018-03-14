export interface WeatherCity {
  id: number;
  name: string;
}

export interface WeatherCoord {
  lon: number;
  lat: number;
}

export interface WeatherMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherClouds {
  all: number;
}

export interface WeatherWind {
  speed: number;
  deg: number;
}

export interface WeatherSys {
  pod: string;
}

export interface WeatherList {
  dt: number;
  main: WeatherMain;
  weather: WeatherDescription;
  clouds: WeatherClouds;
  wind: WeatherWind;
  sys: WeatherSys;
  dt_txt: string;
}

export interface Weather {
  city: WeatherCity;
  coord: WeatherCoord;
  country: string;
  cod: string;
  message: number;
  cnt: number;
  list: WeatherList[];
}
