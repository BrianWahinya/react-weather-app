const configs = {
  lang: "en",
  defaultLocation: "Nairobi",
  api: {
    main: `https://api.openweathermap.org/data/2.5/weather?`,
    daily: `https://api.openweathermap.org/data/2.5/forecast?`,
    city: "units=metric&exclude=hourly,daily&q=",
    location: `https://ipapi.co/json/`,
  },
};

export default configs;
