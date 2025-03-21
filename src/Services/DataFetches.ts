const APIKEY = process.env.APIKEY;

async function CurrentWeather(lat: number, lon: number) {

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
    const data = await promise.json();
    console.log(data)
    // if you are gonna use data outside of this function remember to do the return
    return data;
    
}

async function forecastWeather(lat: number, lon: number) {

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
    const data = await promise.json();
    console.log(data)
    return data;
  
}

async function getName(userSearch: string) {

    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=1&appid=${APIKEY}`);
    const data = await promise.json();
    console.log(data)
    return data;
    
}

export { CurrentWeather, forecastWeather, getName }