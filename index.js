#!/usr/bin/env node

const dotenv = require("dotenv").config({
  path: "/home/dci/Development/exercises/Node/weather-app/.env",
  debug: true
});

const Client = require("./client");

let city = process.argv[2].trim();

let cityClient = new Client();

cityClient.getWeather(city, process.env.APPID);
