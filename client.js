let axios = require("axios");

module.exports = class Client {
  constructor(appId) {

    this.baseURL = "http://api.openweathermap.org/data/2.5/",

      this.client = axios.create({
        baseURL: this.baseURL,

        headers: {
          accept: "application/json"
        },

        params: {
          APPID: appId
        }
      })
  }

  getWeather(city) {
    this.client.get(`weather?q=${city}`)
      .then((res) => {
        let tempCelsuis = res.data.main.temp - 273.15;
        let date = new Date(res.data.dt * 1000).toDateString();
        let weather = res.data.weather.map(item => item.description).toString();
        console.log(
          `The temperature in ${city} is ${tempCelsuis} C\nExpect ${weather} \nOn ${date}`);
      })
  }
}