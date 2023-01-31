const dotenv = require('dotenv')
dotenv.config()
const { Configuration, OpenAIApi } = require("openai") ;
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 3002

const configuration = new Configuration({
  apiKey: process.env.VITE_KEY
});

const openai = new OpenAIApi(configuration);
const app = express()
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})


app.post('/resposta', async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: 'me faca um mendagem estilo biscoito da sorte',
    temperature: 0.6,
    max_tokens: 60,
  })

  res.json(response.data.choices[0].text)
  console.log('rodando')
})

app.listen(port, ()=>{
  console.log('rodando')
})

