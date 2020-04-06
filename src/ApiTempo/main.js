import axios from 'axios';

class Api {
  static async getWeather(city) {
    const response = new Weather((await axios.get(`https://api.hgbrasil.com/weather?key=66bb97e2&city_name=${city}`)).data.results);
    return response
  }

}
class Weather{
  constructor ({temp, date, city_name, condition_slug}){
    this.city_name = city_name,
    this.temp = temp,
    this.condition_slug = condition_slug,
    this.date = date
  }
}

Api.getWeather("Pelotas,RS").then(v => {console.log(v)})
