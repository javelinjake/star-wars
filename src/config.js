function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Config = {
  api: {
    url: "https://swapi.co/api/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    withCredentials: false,
    mockDelay: getRandomInt(250, 1500)
  }
};

module.exports = Config;
