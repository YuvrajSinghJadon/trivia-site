import axios from "axios";
//const axios = require('axios'); // legacy way
const URL = "https://opentdb.com";

export function getTopics() {
  // Make a request for a user with a given ID
  return axios.get(`${URL}/api_category.php`);
}
export function getQuestionsByCategory(category) {
  // Make a request for a user with a given ID
  return axios.get(`${URL}/api.php?amount=10&category=${category}`);
}
export function getRandomQuestion() {
  return axios.get(`${URL}/api.php?amount=10`);
}
export function getQuestionsByType(category, number, difficulty, type) {
  return axios.get(
    `${URL}/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`
  );
}
