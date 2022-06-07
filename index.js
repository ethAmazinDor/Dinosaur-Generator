if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const port = 5000
const fetch = require('node-fetch')//allows you to use the fetch function in node


app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listning on port: ${port}`)
})

const api_key = process.env.API_KEY
app.get('/dinoimage', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
            'X-RapidAPI-Key': api_key
        }
    };

    // run the code 
    const fetchApi = await fetch('https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaurs&count=20', options)

    const dinoImageResponse = await fetchApi.json()
    res.json(dinoImageResponse)

})


app.get('/dinoname', async (req, res) => {
    // run the code 
    const fetchApi = await fetch('https://dinoipsum.com/api/?format=json&words=2&paragraphs=1')

    const dinoNameResponse = await fetchApi.json()
    console.log(dinoNameResponse)
    res.json(dinoNameResponse)

})