const form = document.querySelector(".cityform");

// Add city for API call
const handleForm = (event) => {
    event.preventDefault();

    const newCity = event.target.city.value;

    // API call
    const getData = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newCity}&appid=${config.apiKey}&units=metric&cnt=5`)
        .then(response => response.json())
        .then(data => {

            const lat = data.city.coord.lat
            const lon = data.city.coord.lon
            const name = data.city.name

            const h1Name = document.querySelector(".name");
            h1Name.innerHTML = name;

            const getData = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${config.apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {

                    // Current weather:
                    const weatherNow = {
                        Descr: data.current.weather[0].description,
                        Temp: `${Math.floor(data.current.temp)}°C`,
                    }

                    const h2Temp = document.querySelector(".temp");
                    h2Temp.innerHTML = weatherNow.Temp;

                    const pDescr = document.querySelector(".descr");
                    pDescr.innerHTML = weatherNow.Descr;

                    // Next five days:
                    const fiveDays = document.querySelector(".weatherfivedays");
                    const date = new Date();
                    const today = date.getDay();
                    const weekDays = {
                        1: "Monday",
                        2: "Tuesday",
                        3: "Wednesday",
                        4: "Thursday",
                        5: "Friday",
                        6: "Saturday",
                        7: "Sunday",
                        8: "Monday",
                        9: "Tuesday",
                        10: "Wednesday",
                        11: "Thursday",
                        12: "Friday",
                    }

                    const weatherFive = {
                        dayOne: "Today",
                        dayTwo: weekDays[today + 1],
                        dayThree: weekDays[today + 2],
                        dayFour: weekDays[today + 3],
                        dayFive: weekDays[today + 4],
                    }

                    const h1DayOne = document.querySelector("h1.dayone");
                    h1DayOne.innerHTML = weatherFive.dayOne;
                    const dayOneTemp = document.querySelector("h2.dayonetemp");
                    dayOneTemp.innerHTML = `${Math.floor(data.daily[0].temp.day)}°C`;
                    const dayOneDescr = document.querySelector("p.dayonedescr");
                    dayOneDescr.innerHTML = data.daily[0].weather[0].description;

                    const h1DayTwo = document.querySelector("h1.daytwo");
                    h1DayTwo.innerHTML = weatherFive.dayTwo;
                    const dayTwoTemp = document.querySelector("h2.daytwotemp");
                    dayTwoTemp.innerHTML = `${Math.floor(data.daily[1].temp.day)}°C`;
                    const dayTwoDescr = document.querySelector("p.daytwodescr");
                    dayTwoDescr.innerHTML = data.daily[1].weather[0].description;

                    const h1DayThree = document.querySelector("h1.daythree");
                    h1DayThree.innerHTML = weatherFive.dayThree;
                    const dayThreeTemp = document.querySelector("h2.daythreetemp");
                    dayThreeTemp.innerHTML = `${Math.floor(data.daily[2].temp.day)}°C`;
                    const dayThreeDescr = document.querySelector("p.daythreedescr");
                    dayThreeDescr.innerHTML = data.daily[2].weather[0].description;

                    const h1DayFour = document.querySelector("h1.dayfour");
                    h1DayFour.innerHTML = weatherFive.dayFour;
                    const dayFourTemp = document.querySelector("h2.dayfourtemp");
                    dayFourTemp.innerHTML = `${Math.floor(data.daily[3].temp.day)}°C`;
                    const dayFourDescr = document.querySelector("p.dayfourdescr");
                    dayFourDescr.innerHTML = data.daily[3].weather[0].description;

                    const h1DayFive = document.querySelector("h1.dayfive");
                    h1DayFive.innerHTML = weatherFive.dayFive;
                    const dayFiveTemp = document.querySelector("h2.dayfivetemp");
                    dayFiveTemp.innerHTML = `${Math.floor(data.daily[4].temp.day)}°C`;
                    const dayFiveDescr = document.querySelector("p.dayfivedescr");
                    dayFiveDescr.innerHTML = data.daily[4].weather[0].description;

                    console.log(data);
                })
        })
}

form.addEventListener("submit", handleForm)
