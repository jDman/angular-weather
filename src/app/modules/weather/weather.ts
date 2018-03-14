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

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  pod: string;
}

export interface Weather {
  dt: number;
  main: WeatherMain;
  weather: WeatherDescription;
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
}
