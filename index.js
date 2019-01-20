#!/usr/bin/env node

require("dotenv").config();

const Client = require("./client");

let city = process.argv[2].trim();

let cityClient = new Client(process.env.APPID);

cityClient.getWeather(city);
