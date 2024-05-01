const search = document.getElementById("search-query");
const year = document.getElementById("year-query");
const month = document.getElementById("month-query");
const day = document.getElementById("day-query");
const country = document.getElementById("country-query");
const language = document.getElementById("language-query");
const KEY_API = "b829f87d-cc40-41f0-a1df-1e92029611e1";
const BtnHandler = () => {
  console.log("handle click even");
};
document
  .getElementById("languages-list-btn")
  .addEventListener("click", BtnHandler);
const getLanguage = async () => {
  try {
    const url = `https://holidayapi.com/v1/languages?pretty&key=${KEY_API}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("error", err);
  }
};
const renderLanguage = async () => {
  try {
    const data = await getLanguage();
    const languagesList = document.getElementById("languages-list");
    const ullanguagesList = languagesList.children[2];
    ullanguagesList.innerHTML = "";
    data.languages.forEach((language, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
      <div class="li-wrapper">
        <div class="li-title">${language.name}</div>
        <div class="li-text">${language.code}</div>
      </div>`;
      ullanguagesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document
  .getElementById("languages-list-btn")
  .addEventListener("click", renderLanguage());
document.getElementById("holidays-btn").addEventListener("click", BtnHandler);
const getHoliday = async () => {
  try {
    let querystring = "";
    if (search.value) {
      querystring += `&search=${search.value}`;
    }
    if (year.value) {
      querystring += `&year=${year.value}`;
    } else {
      querystring += `&year=2023`;
    }
    if (month.value) {
      querystring += `&month=${month.value}`;
    }
    if (day.value) {
      querystring += `&day=${day.value}`;
    }
    if (country.value) {
      querystring += `&country=${country.value}`;
    } else {
      querystring += `&country=VN`;
    }
    if (language.value) {
      querystring += `&language=${language.value}`;
    }
    const url = `https://holidayapi.com/v1/holidays?pretty&key=${KEY_API}${querystring}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
const renderHoliday = async () => {
  try {
    const data = await getHoliday();
    const holidaysList = document.getElementById("holidays-list");
    const ulholidaysList = holidaysList.children[1];
    ulholidaysList.innerHTML = "";
    data.holidays.forEach((holidays, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
      <div class="li-wrapper">
        <div class="li-title">${holidays.name}</div>
        <div class="li-text">${holidays.weekday.date.name}-${
        holidays.date
      }</div>
      </div>`;
      ulholidaysList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document
  .getElementById("holidays-btn")
  .addEventListener("click", renderHoliday);
document
  .getElementById("countries-list-btn")
  .addEventListener("click", BtnHandler);
const getCountries = async () => {
  try {
    const url = `https://holidayapi.com/v1/countries?pretty&key=${KEY_API}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
const renderCountrises = async () => {
  try {
    // tao bien data de lay du lieu cua ham getCountries o phia tren
    const data = await getCountries();
    const countrieslist = document.getElementById("countries-list");
    const ulcountrieslist = countrieslist.children[2];
    ulcountrieslist.innerHTML = "";
    data.countries.forEach((country, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
      <div class="li-wrapper">
        <div class="li-title">${country.name}</div>
        <div class="li-text">${country.code}</div>
      </div>`;
      ulcountrieslist.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document
  .getElementById("countries-list-btn")
  .addEventListener("click", renderCountrises);
