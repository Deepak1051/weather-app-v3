// const { response } = require("express")

// const { response } = require("express")

const input = document.querySelector('input')
const loc = document.querySelector('.location')
const temp = document.querySelector('.temp')
const speed = document.querySelector('.speed')
const type = document.querySelector('.type')
const image = document.getElementById('random-img')
const btn = document.querySelector('.btn')
const magic = document.querySelector('.magic')
const weather_img = document.getElementById('weather-img')
// const location = document.querySelector('.location')

let backImgSrc


///unpsplash api

const apiKey = 'zUhA9581YBicP--l4q5inQdUimfJe8hXn9ZYqZ0mFbQ'
// const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`
const apiUrl = "https://source.unsplash.com/random"

console.log(input)
console.log(magic)
// console.log(image.src)


// const weatherData=async()=>{
//     const res=await fetch(url)
//     const data=await res.json()
//     return data
// }
// weatherData()


btn.addEventListener('click', async () => {
    // const url = `http://api.weatherstack.com/current?access_key=0dd029bca0e88896dfaf13835a1fa1e3&query=${input.value}`
    // if (input.value.length === 0) {
    //     // return document.querySelector('div').textContent = `Type somthing`
    //     return console.log("type something...")
    // }

    // const res = await fetch(url)
    // const data = await res.json()
    // console.log(data)

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '8661ada0bdmsh560bb6d514949acp1ca7dcjsn95cb56f3393c',
    //         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //     }
    // };

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8661ada0bdmsh560bb6d514949acp1ca7dcjsn95cb56f3393c',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };


    if (input.value.length === 0) {
        return loc.textContent = `Type something...`
        return console.log("type something...")
    }
    // const res = await fetch(`https:weatherapi-com.p.rapidapi.com/current.json?q=${input.value}`, options)
    // const data = await res.json()
    // console.log(data)

    // fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=jaipur', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${input.value}&units=metric`, options)
    const data = await res.json()
    console.log(data)

    // console.log(response)
    loc.textContent = `lat: ${data.coord.lat}, lon: ${data.coord.lon}`
    temp.textContent = `temp ${data.main.temp}°`
    type.textContent = `${data.weather[0].description} `
    speed.textContent = `Wind: ${data.wind.speed} m / sec`
    // image.src = `${ data.current.weather_icons[0] } `
    weather_img.setAttribute('src', `img/${data.weather[0].icon}.png `)
    // console.log(image)
})

magic.addEventListener(("click"), async () => {
    const res = await fetch(apiUrl)
    // const data = await res.json()
    // const 
    console.log(res.url)
    // backImgSrc = data.urls.full
    // backImgSrc = data.links.html
    backImgSrc = res.url
    image.setAttribute('src', backImgSrc)
    // console.log(image)
})


